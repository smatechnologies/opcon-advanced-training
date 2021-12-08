---
sidebar_label: 'SubSchedules External Events'
hide_title: 'false'
---

## SubSchedules - External Events

### SubSchedules - Schedule Instance Property Update

```$PROPERTY:ADD,PropertyName,Value```

* For a Schedule Instance Property:

```$PROPERTY:ADD,SI.PropertyName.Date.ScheduleName,Value```

```
$PROPERTY:ADD,SI.PropertyName.[[$DATE]].PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2Instance[SubSchedule2Name],Value
```

### SubSchedules - Dropping Events into MSGIN

* SMA has many utilities that can update Properties via ```MSGIN``` passing Event parameters as Command Line arguments
* Spaces in each parameter must be quoted or the program will be thrown off
* Quotes are removed by the OS when passing parameters to the script
* This can ruin quoted parameters when accounting for periods in Schedule Names

##### Examples:

```$PROPERTY:ADD,SI.PropertyName.[[$DATE]]."ScheduleName",Value```

```$PROPERTY:ADD,SI.File Path.[[$DATE]]."Test.Schedule 001",C:\Test\```

* If this Event is passed from the Command Line into a file to be processed by ```MSGIN```, make sure that the quotes are not dropped
* To do so, comment out the quotes:

```$PROPERTY:ADD,SI.File Path.[[$DATE]].\"Test.Schedule 001\",C:\Test\```

### Unique Properties

* ```SSI``` - Pulls the **Schedule Instance Property** of the Master Schedule instead of a SubSchedule's Schedule Instance Property
* ```SJI``` - Pulls the Job Instance Property of a Container Job controlling a SubSchedule Job