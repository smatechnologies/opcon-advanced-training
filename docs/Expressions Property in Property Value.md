---
sidebar_label: 'Expressions Property in Property Value'
hide_title: 'false'
---

## Property in Property Value 

Expressions provide the ability to place a Property within the Value of another Property (embedding a Property within Property)

Use the ```Expr``` function: ```[[=Expr([[PropertyName]])]]```

Add strings together
 
PropertyName = ```"/SYM/SYM" + [[SI.SYM]] + "/" + "REPORT”```

<a href="imgadvanced/ExpLetterFiles.png" target="_blank"><img src="imgadvanced/LetterSpecs.png" width="250"></img></a>  
<a href="imgadvanced/LetterSpecs.png" target="_blank"><img src="imgadvanced/LetterSpecs.png" width="250"></img></a>  


* Starting or ending string with ```\``` on Windows Path throws the Expression off

###### (Click Images to Enlarge)