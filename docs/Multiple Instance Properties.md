---
sidebar_label: 'Multiple Properties'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance: Multiple Properties

## Multiple Properties

* Multiple **Property Sets** are allowed **ONLY** if a Schedule is marked as **Multi Instance**
* Each Property Set can have multiple properties defined but they **MUST** contain the same set of **Property Names**.
* When there are multiple properties defined in a set each property is seperated with a semi-colon (;)

![](../static/imgadvanced/SM_MultipleProperties.png)



## Enterprise Manager

<details>

#### Multiple Instance Properties 

* Multiple entries are allowed only if a Schedule is marked as **Multi-Instance**
* Multiple Properties tied to a single Schedule Instance are separated by a semicolon (;)

##### Example:

```ID=10;PATH=C:\Demo```

```ID=20;PATH=D:\Demo```

* The Schedule Name uses only the **first** defined Instance Property 

![](../static/imgadvanced/MultipleInstanceProperties.png)

* The Daily Schedule shows each unique Schedule Instance Property instead of a String of Properties

![](../static/imgadvanced/AvailableProperties.png)

</details>