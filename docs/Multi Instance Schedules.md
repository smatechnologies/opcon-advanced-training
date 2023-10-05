---
sidebar_label: 'Multi Instance Schedules'
hide_title: 'false'
---


### Multi-Instance Schedules - Instance Properties

* Each parameter line will have its own copy of the Schedule
* In this case, there are two Instance Properties defined:

```TIME=10```

```TIME=20```

* Naming Scheme: Schedule Name followed by an underscore and the first Property's value

#### Example:

```ScheduleName_FirstPropertyValue```

* ```My First Multi-Instance Schedule_10```

* ```My First Multi-Instance Schedule_20```

![](../static/imgadvanced/InstanceSchedule1020_SM.png)

### Calling Properties 

* Tokenization allows a Schedule Instance Property to be called in the Command Line when prefixed with ```SI.```

#### Example:

```[[SI.PropertyName]]```

```[[SI.TIME]]```

![](../static/imgadvanced/CallingProperties_SM.png)  

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

* ```My First Multi-Instance Schedule_10```

* ```My First Multi-Instance Schedule_20```


![](../static/imgadvanced/InstanceSchedule1020.png)

#### Calling Properties 

* Tokenization allows a Schedule Instance Property to be called in the Command Line when prefixed with ```SI.```

##### Example:

```[[SI.PropertyName]]```

```[[SI.TIME]]```

![](../static/imgadvanced/CallingProperties.png) 

</details>