---
sidebar_label: 'Multi Instance Schedules'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi-Instance: Schedules

## Overview

* There are three types of Mulit Instance Schedules
  * Property Schedules
  * Machine Group Schedules
  * Named Instances Schedules 

![](../static/imgadvanced/SM_InstanceDef.png)

## Property Schedules

* These are the default selection when Mult Instance is selected.
* Multiple **Property Set** are defined at the Master Schedule level
* Each containing the same set of Property Names with different Values assigned.

![](../static/imgadvanced/InstanceSchedule1020_SM.png)

* Each Schedule is unquily named during the build by appending an underscore and value of the first Property defined.
  * ```ScheduleName_FirstPropertyValue```

![](../static/imgadvanced/SM_SchedulePropBuilt.png)

## Utilizing Properties 

* Schedule Instance Property are called in the Command Line with ```SI.``` before the property name
  * ```[[SI.PropertyName]]```

![](../static/imgadvanced/CallingProperties_SM.png)

* The Daily Schedule shows each unique Schedule Instance Property instead of a String of Properties

![](../static/imgadvanced/Instance_Definition_SM.png)

## Enterprise Manager

<details>

#### Multi-Instance Schedules - Instance Properties

* Each parameter line will have its own copy of the Schedule
* In this case, there are two Instance Properties defined:

```TIME=10```

```TIME=20```

* Naming Scheme: Schedule Name followed by an underscore and the first Property's value

##### Example:

```ScheduleName_FirstPropertyValue```

* ```My First Multi Instance Schedule_10```

* ```My First Multi Instance Schedule_20```


![](../static/imgadvanced/InstanceSchedule1020.png)

#### Calling Properties 

* Tokenization allows a Schedule Instance Property to be called in the Command Line when prefixed with ```SI.```

##### Example:

```[[SI.PropertyName]]```

```[[SI.TIME]]```

![](../static/imgadvanced/CallingProperties.png) 

</details>