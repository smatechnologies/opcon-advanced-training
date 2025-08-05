---
sidebar_label: 'Expressions Upper and Lower'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions - Upper and Lower

## Overview

ToUpper and ToLower Expressions can be used to alter the case of a string to be either UPPER case or Lower case.

## Syntax

* **ToUpper(value):** Converts a string to UPPER CASE
* **ToLower(value):** Converts a string to lower case

## Usage

* To convert a string that resolves as all **lower case** to be **UPPER CASE**
* To convert a string that resolves as all **UPPER CASE** to be **lower case**
* To convert a string that resolves as **Camel Case** to be either **UPPER** or **lower case**.

:::tip Example

When **$SCHEDULE DATEmmm** properties get resolved the result is Mmm.

```[[$SCHEDULE DATEmmm]]``` = **Jan**, **Feb**, **Mar**, ect.

To convert to all **UPPER** you would use the **ToUpper** syntax;

```[[=ToUpper([[$SCHEDULE DATEmmm]])]]``` = **JAN**, **FEB**, **MAR**, ect.

:::
