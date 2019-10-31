
{{{
  "title" : "markdown template",
  "tags" : ["mathjax", "latex", "markdown", "html", "code"],
  "desc" : "template for writing markdown html page with latex math",
  "category" : "category",
  "date" : "15 May 2017",
  "arbitrary" : "arbitrary content"
}}}

$$x_{1,2} = {-b\pm\sqrt{b^2 - 4ac} \over 2a}.$$

This is some inline math. 

blackslash character '\\', '\(' needs an addditonal '\' to escape html. \\(x = \frac{1}{2}\\)

\begin{align}
x&=1\label{eq:1}\\\
y&=2
\end{align}

End of math.

[github1]: https://github.com/sl424/junit-debugging.git 		"Github"
[junit1]: https://www.tutorialspoint.com/junit/index.htm 	"Junit Tutorial"

Reference:

+ [Jason Lee](http://www.jasondl.ee/posts/2013/gradle-tip-attaching-a-debugger.html)
+ [Oracle](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jdb.html)

# JUnit debugging in Ant, Gradle, Maven #
---

> I want a JVM on a printer - by someone

## jdb ##
It was different coming from gdb and trying to wrap my head around the attaching debugger to all the different build system in java. I find it best to automate these in a bash script when you have it setup the way you want it. You can see all the examples [Github][github1] and [Junit Tutorial][junit1].

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
