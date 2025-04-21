---
sidebar_label: 'Expressions Substrings'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions - SubStrings

## Overview 

The SubStr expression allows character trimming from a value.

## Syntax

SubStr(value,start,length)

* **value:** The original String to be trimmed 
* **start:** The number of characters to move from the left
* **length:** How many characters to collect *(if omitted, the full remaining String will be collected)*

## Usage

* Used primarily to capture part of the Filename or value.

:::tip Example

If we need to capture the 5th leter in the Filename that was found, we can use SubStr.

* We would use the following
  * ```[[=SubStr([[SI.FILENAME]],4,1)]]```
* Where
  * ```[[SI.FILENAME]] = FileA.txt```
  * ```[[SI.FILENAME]] = FileB.txt```
* Result would be
   * ```A```
   * ```B```

:::