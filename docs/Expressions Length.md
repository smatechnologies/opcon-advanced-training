---
sidebar_label: 'Expressions Length'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions - Length

## Overview 

It returns the length of a specified Property or value

## Syntax

Length(value)

* **value:** The Property or value that the length is needed for
  * can use arithmetic in this field

### Usage:

* Move a file while changing the file extension but keeping the rest of the File Name same
* Combine Length Expression, Arithmetic Expression, and SubString to automatically keep the full Name but change extension
* An Expression followed by ```.<extension>``` will change the extension of the file while keeping the original base name

:::tip Example

* To remove the extension off the file name, we would capture the file name in a property,
  * ```[[SI.FILENAME]]``` = Test.txt
* Use the Length expression to find the total length of the file name.
  * ```[[=Length([[SI.FILENAME]])]]``` = 8
* Use subtraction to remove the length of the extension of the file name from the full length
  * ```[[=(Length([[SI.FILENAME]])-4)]]``` = 4
* All steps can be combined into one expression
  * ```[[=SubStr([[SI.FILENAME]],0,Length([[SI.FILENAME]])-4)]]``` = Test

:::

:::note

Most SMA File Monitors, ie. File Arrival and SMA Resource Monitor, have ways to pass the Root of a File Name while dropping the extension.

:::