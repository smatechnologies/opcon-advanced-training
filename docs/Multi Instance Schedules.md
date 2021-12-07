---
sidebar_label: 'Multi Instance Schedules'
hide_title: 'false'
---

## Multi-Instance Schedules - Instance Properties

* Each parameter line will have its own copy of the Schedule
* In this case, there are two Instance Properties defined:

```TIME=10```

```TIME=20```

* Naming Scheme: Schedule Name followed by an underscore and the first Property's value

#### Example:

```ScheduleName_FirstPropertyValue```

* ```My First Multi-Instance Schedule_10```

* ```My First Multi-Instance Schedule_20```

<a href="imgadvanced/InstanceSchedule1020.png" target="_blank"><img src="imgadvanced/InstanceSchedule1020.png" width="500"></img></a>   

### Calling Properties 

* Tokenization allows a Schedule Instance Property to be called in the Command Line when prefixed with ```SI.```

#### Example:

```[[SI.PropertyName]]```

```[[SI.TIME]]```

<a href="imgadvanced/CallingProperties.png" target="_blank"><img src="imgadvanced/CallingProperties.png" width="500"></img></a>   