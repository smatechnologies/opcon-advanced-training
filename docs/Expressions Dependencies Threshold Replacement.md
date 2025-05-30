---
sidebar_label: 'Expressions Dependencies Threshold Replacement'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Expression Dependencies - Threshold Replacement

## Overview

* We can a combination of an Expression and a Schedule Instance Property to function like a Threshold.
* Remember: Properties are **Strings** and **_NOT_** **Integers**

## Usage

* It is necessary to convert a Property to Integer for an Expression to be true

![](../static/imgadvanced/expressiondependency_sm.png)

:::tip Example

* We need to count something but don't want to use a Threshold
* We can use a Scheudle Instance and a $PROPERTY:SET event to increment the SI value
  * **SI:** FILECOUNT with a Value of ```0```
  * **Event:** $PROPERTY:SET,SI.FILECOUNT,[[=ToInt([[SI.FILECOUNT]]) + 1]]
* This confinds the count to this instance of the Schedule and doesn't require a reset at the end of the process
* We can then use ```ToInt([[SI.FILECOUNT]]) == N``` as an Expression Dependency

:::

## Enterprise Manager

<details>

Properties are **Strings** and **_NOT_** **Integers**

It is necessary to convert a Property to Integer for an Expression to be true

![](../static/imgadvanced/ThreshReplace.png)

</details>