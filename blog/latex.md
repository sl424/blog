
{{{
  "title" : "latex in reST",
  "tags" : ["reStructuredText", "latex"],
  "desc" : "latex math support in reStructuredText",
  "category" : "documentation",
  "date" : "11 May 2018",
  "arbitrary" : "arbitrary content"
}}}

[reStructuredText]: http://docutils.sourceforge.net/docs/user/rst/cheatsheet.txt "reStructuredText"
[Latex]: https://www.latex-project.org/ "LaTex"

# Latex and reST #
---

I am a fan of Latex for most engineering hw and paper but one down side is that it is not very easy to read. 
Sometimes, I just need to write a couple of math equations in latex but I do not necesarrily need the full feature of Latex. 

## [Latex] ##

	Select the make\_name and model\_name of all vehicles which have a first
	production year of 1976                                                
	\begin{multline*}                                                              
		\Pi_{(make\_name, model\_name)} \Big(\sigma_{(year=1976)} Vehicle      
		\bowtie_{(fk\_model\_id=model\_id)} Model                              
		\bowtie_{(fk\_make\_id=make\_id)} Make\Big)                            
	\end{multline*}

## [reStructuredText] ##

	Select the make_name and mode_name of all vehicles which have a first production
	year of 1976.                                                                  
																																 
	.. math::                                                                      

		\Pi_{(make\_name, model\_name)} \Big(\sigma_{(year=1976)} Vehicle \\  
		\bowtie_{(fk\_model\_id=model\_id)} Model                  \\            
		\bowtie_{(fk\_make\_id=make\_id)} Make\Big)                \\

![reST](./blog-dir/rst.png "reStructuredText")

The main difference is that in reST, syntax is easier to see. The other benefit is that reST 
can be easily parsed and shared online.   
