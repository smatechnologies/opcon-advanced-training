---
sidebar_label: 'SubSchedules External Events'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# SubSchedules - External Events

## Dropping Events into MSGIN

* SMA has many utilities that can update Properties via ```MSGIN``` passing Event parameters as Command Line arguments
* Spaces in each parameter must be quoted or the program will be thrown off
* Quotes are removed by the OS when passing parameters to the script
* This can ruin quoted parameters when accounting for periods in Schedule Names
* Have to include a valid UserName and Token

## Schedule Instance Property Update

```$PROPERTY:ADD,PropertyName,Value,username,token```

* For a Schedule Instance Property:
  * ```$PROPERTY:ADD,SI.PropertyName.Date.ScheduleName,Value,username,token```
  
For a Multi Instance Container job that is multiple levels deep:
  * ```$PROPERTY:ADD,SI.PropertyName.[[$DATE]].PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2Instance[SubSchedule2Name],Value,username,token```

:::tip Example

* If this Event is passed from the Command Line into a file to be processed by ```MSGIN```, make sure that the quotes are not dropped

```$PROPERTY:ADD,SI.File Path.[[$DATE]]."Test.Schedule 001",C:\Test\,username,token```

* To do so, comment out the quotes:

```$PROPERTY:ADD,SI.File Path.[[$DATE]].\"Test.Schedule 001\",C:\Test\,username,token```

:::