{{{
  "title" : "uim-fep for japanese input in sway",
  "tags" : ["input method", "uim", "sway", "japanese", "console"],
  "desc" : "leaning japanese and transiting to wayland",
  "category" : "language x computer",
  "date" : "19 Oct 2019"
}}}


[uim-fep]: https://github.com/uim/uim/wiki/Building-uim-from-sources "uim-fep github"

uim in sway(wayland)
---

This only works in console applications, there are still no direct input method framework available for applications using the wayland backend. 
Existing program like ibus, fcitx, etc will crash and burn unless xwayland bridge is enabled. 

## uim-fep ##

You can get uim-fep from the ubuntu repository, arch AUR, and your favorite respository of choice. 
There is also [uim-fep] github. And you also need an input engine like anthy.

Once it is installed, you should config the $HOME/.uim file like this:

	;;; japanese input options ;;;
	(define default-im-name 'anthy)
	(define generic-on-key? (make-key-predicate '("F4")))
	(define generic-off-key? (make-key-predicate '("F4")))

'I use anthy engine and F4 key to switch between hiragana and direct input for example. 
you can use any other uim compatible engine for korean or chinese. 
After that, just launch it in your console:

	uim-fep

or

	uim-fep -e [console program]

And you should get a status line at the bottom like this:

![maxwidth](./blog-dir/uim-fep.png "uim-fep")

This works in urxvt and termite, Xorg and wayland. If you happen to also use GNU screen or emacs, there is a nice screen integration with uim-fep. Example $HOME/.screenrc:

	backtick 0 0 0 uim-fep-tick
	hardstatus alwayslastline "%0`"
	bind j exec | uim-fep -S 
	bind k eval 'exec cat' kill redisplay


Reference:

+ [hitode909](https://blog.sushi.money/entry/20090809/1249818638)
+ [uim-fep-ja](https://github.com/uim/uim-doc-ja/wiki/UimFep)


