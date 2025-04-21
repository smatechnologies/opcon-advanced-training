---
sidebar_label: 'Expressions Property in Property Name'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions - OpCon Instances

## Overview

OpCon Instances provide the ability to modify the value of a Property by combining it with another value.

## Syntax

OI.[expression]
  * **expression:** the equation to combine a Property value with another value.

### Usage

* To resolve to the value of a property that is the combination of 2 property names.

:::tip Example

* Environment where all the properties have the prefix of Prod or Dev for all Global Properties defined. 
* To allow minimum maintenance all the Schedules are defined with the following Schedule Instances
  * **SI.NAME** = Prod
  * **SI.NAME** = Dev
* Using an expression we can combine the Schedule Instance value with the work TIME to get the Properties
  * PROD-TIME
  * DEV-TIME
* Expression:
  * ```[[OI.[[=[[SI.NAME]]+"-TIME"]]]]```

_Note: **OI.** is used to specify an **OpCon Instance** instead of a Schedule, Job, or Machine Instance_

:::