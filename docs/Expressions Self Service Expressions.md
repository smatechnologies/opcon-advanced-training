---
sidebar_label: 'Expressions Self Service Expressions'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Expressons - Self Service

## Overview

* Multiple fields in a Self Service button can utilize Expressions
  * Disable Rule
  * Hide Rule

## Usage

* This allows multiple ways to disable buttons:  
  * Disable when a Button is pressed  
  * Disable all Buttons for a Department  
  * Disable all Buttons within SMA Self Service

:::tip Example

* Disable a button after it has been 'pressed' by the end user.
* In the **Disable Rule** field, utilize the following expression:
  * ```ToInt([[SSB Name]]) == 1```
* When the value of **SSB Name** is **1**, the button is disabled because the statement is true.
  * ![](../static/imgadvanced/self_service_expressiondisable2.png) 
* When the value of **SSB Name** is **NOT 1**, the button is available because the statement is false.
  * ![](../static/imgadvanced/Self_service_button_expressions1.png)

:::

## Enterprise Manager

<details>

Both the **Hide** and **Disable** features in SMA Self Service can be driven by Expressions

This allows multiple ways to disable buttons:  

* Disable when a Button is pressed  
* Disable all Buttons for a Department  
* Disable all Buttons within SMA Self Service  

The value of the Global Property must be set to true to release functionality

![](../static/imgadvanced/HideDisable1.png)
![](../static/imgadvanced/HideDisable2.png)

</details>