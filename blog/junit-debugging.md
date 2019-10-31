
{{{
  "title" : "JUnit debugging in Ant, Gradle, Maven",
  "tags" : [ "junit", "jdb", "ant", "gradle", "maven" ],
  "desc" : "debugging",
  "category" : "category",
  "date" : "15 May 2017",
  "arbitrary" : "arbitrary content"
}}}

[1]: https://github.com/sl424/junit-debugging.git 		"Github"
[1]: https://www.tutorialspoint.com/junit/index.htm 	"Junit Tutorial"

Reference:

+ [Jason Lee](http://www.jasondl.ee/posts/2013/gradle-tip-attaching-a-debugger.html)
+ [Oracle](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jdb.html)
+ [Ant](https://ant.apache.org/manual/Tasks/junit.html)
+ [Maven](http://maven.apache.org/surefire/maven-surefire-plugin/examples/junit.html)


# JUnit debugging in Ant, Gradle, Maven #
---

> I want a JVM on a printer - by someone
> 
> “Debugging is twice as hard as writing the code                                
> in the first place.  Therefore, if you write the code                          
> as cleverly as possible, you are, by definition, not                           
> smart enough to debug it.”  - Brian Kernighan

## jdb ##
It was different coming from gdb and trying to wrap my head around the attaching debugger to all the different build system in java. I find it best to automate these in a bash script when you have it setup the way you want it. You can see all the examples [Github][1] and [Junit Tutorial][1].

A simple example of jdb would be `javac -g Test.java` and then `jdb Test`, set breakpoints and run. All is well for a simple hello world program. 

**TIP**. You can set breakpoints in a `jdb.ini` file.

* stop at <class_name>:<line_no>
* stop in <class_name>.<method | var>
* # comment 
* catch java.lang.<exception_name>

There are some useful jdb commands:

* `print <name>` `locals` to look at variable values
* `step over` to execute the line and return to the next line
* `list` `list <line-no>` `list <method>` see 10 lines of source code

## junit-javac ##

For a simple java program, using javac, java, and jdb is pretty simple. In addition to the java code and junit code, you also need a main runner program to start the testing. This is done for you if using the build systems below.

	javac -cp junit-4.10.jar TestMessageUtil.java  MessageUtil.java TestRunner.java
	java  -cp junit-4.10.jar:$path -agentlib:jdwp=transport=dt_socket,address=$debug_port,server=y,suspend=y TestRunner
	jdb -attach localhost:$debug_port -sourcepath $path

As you will see, all the build system vary a little on how you supply the arguments but it is essentially doing the same.


## junit-ant ##

When you are using ant for testing java programs, it might be better to create a target in the build.xml file with. Enable debug mode and attach sourcepath when attaching jdb. 

	<target name = "compile" depends = "clean">
		<javac srcdir = "${testdir}" destdir = "${testdir}" 
			debug="true" debuglevel="lines,vars,source" 
			verbose = "${full-compile}"> 
			<classpath refid = "classpath.test"/>
		</javac>
	</target>      

	<target name = "debug-test" depends = "compile">
		 <junit fork="yes">
				 <jvmarg value="-Xdebug" />
				 <jvmarg value="-Xnoagent" />
				 <jvmarg value="-Djava.compiler=NONE" />
				 <jvmarg value="-Xrunjdwp:transport=dt_socket,address=5005,server=y,suspend=y" />
				 <classpath refid = "classpath.test" />
				 <formatter type = "brief" usefile = "false" />
				 <test name = "debug-test" />
		 </junit>
	</target>

If you enable debug modes in compile target, you can use jdb to peak at the source code as you step through the program or tests. In this example, we set the JVM port to 5005. You can attach jdb like so: `jdb -attach localhost:$debug_port -sourcepath $src_code_dir`

## junit-gradle ##

In gradle, the build system is slightly different so instead of target, lets create a task:

                                                                               
	test {
		if (System.getProperty('DEBUG', 'false') == 'true') { 
			jvmArgs '-Xdebug', 
			'-Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005'
		}
	}

After which the jdb can attach in the same way. 


## junit-maven ##

Probably the easiest so far. There is not much to add in maven other than the correct depencies and you can run the test in debug with ` mvn -Dmaven.surefire.debug test ` and attach jdb. 

