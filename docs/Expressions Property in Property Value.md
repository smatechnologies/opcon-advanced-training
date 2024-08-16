---
sidebar_label: 'Expressions Property in Property Value'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Property in Property Value 

Expressions provide the ability to place a Property within the Value of another Property (embedding a Property within Property)

Use the ```Expr``` function: ```[[=Expr([[PropertyName]])]]```

Add strings together
 
PropertyName = ```"/SYM/SYM" + [[SI.SYM]] + "/" + "REPORT”```

![](../static/imgadvanced/expressionsproperty_in_propertyvalue.png)

* Starting or ending string with ```\``` on Windows Path throws the Expression off


### Enterprise Manager

<details>

Expressions provide the ability to place a Property within the Value of another Property (embedding a Property within Property)

Use the ```Expr``` function: ```[[=Expr([[PropertyName]])]]```

Add strings together
 
PropertyName = ```"/SYM/SYM" + [[SI.SYM]] + "/" + "REPORT”```

![](../static/imgadvanced/ExpLetterFiles.png)

![](../static/imgadvanced/LetterSpecs.png)

* Starting or ending string with ```\``` on Windows Path throws the Expression off

</details>