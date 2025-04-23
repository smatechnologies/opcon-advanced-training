---
sidebar_label: 'SubSchedule Schedule Instance Property'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance - SubSchedules & Schedule Instance Property

* A Container Job's **Job Instance Properties** are passed to **SubSchedules** during build time
* **Schedule Instance Properties** can be used by Jobs within a **SubSchedule**

![](../static/imgadvanced/SubSchedule_Instance_Properties_SM.png)

#### Operations List

![](../static/imgadvanced/multi_instance_subschedule_operations.png)

## Fully-Qualified Naming Scheme

* Typical Naming Scheme: ```PrimarySchedule_ContainerJob[SubScheduleName]```  
* Instance Properties for the Primary Schedule and/or SubSchedule can also be included in the fully-qualified Name
    * Only the first Instance Property for each component are included in the Name
    * ```PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]```
    * ```PrimarySchedule_ContainerJob[SubScheduleName_SubScheduleInstanceProperty]```

![](../static/imgadvanced/schedule_selection_info_subschedule_sm.png)

:::tip Example 

### Using Fully Qualified Names

* To update a Global Property, you would use Property Name in the event string:
  * ```$PROPERTY:ADD,PropertyName,Value```. 
* To update a Schedule Instance Property, you would use Fully Qualified Property Name in the event string:
  * ```$PROPERTY:ADD,SI."PropertyName".Date."ScheduleName",Value```
* To update a SubSchedule Schedule Instance Property, you would use the Fully Qualified Property Name. Here is an event to update multiple layers deep:
  * ```$PROPERTY:ADD,SI."PropertyName".[[$DATE]]."PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2Instance[SubSchedule2Name]",Value```

:::

:::tip Example

### Cross SubSchedule Events

* To skip a job in a Schedule, you would use the event string:
  * ```$JOB:SKIP,Schedule Date,Schedule Name,Job Name```
* To skip a job in a SubSchedule, you would use the event string:
  * ```$JOB:SKIP,CURRENT,PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName],Upload File```

:::



## Enterprise Manager

<details>

#### SubSchedules - Schedule Instance Property

* **Schedule Instance Properties** can be used by Jobs within a **SubSchedule**
* A Container Job's **Job Instance Properties** are passed to **SubSchedules** during build time  

![](../static/imgadvanced/SubScheduleInstanceProperties.png)

#### SubSchedules - Operations List 

![](../static/imgadvanced/SubScheduleOperationsList.png)

#### Subschedules - Operations Matrix  

![](../static/imgadvanced/SubSchedulesOperationsMatrix.png)

#### SubSchedules - Container Jobs Fully-Qualified Naming Scheme

* Typical Naming Scheme
```PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]```  
* Instance Properties for the Primary Schedule and/or SubSchedule can also be included in the fully-qualified Name
* Only the first Instance Property for each component are included in the Name

![](../static/imgadvanced/ContainerJobNames.png)

#### SubSchedules - Multiple Levels Deep

```
PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleNamed]_ContainerJob2_ContainerJob2InstanceProperty[SubScheduleName2]
```  

![](../static/imgadvanced/SubSchedulesMultipleLevels.png)

#### SubSchedules - Background

* Purpose:
    * Give Job, Threshold, and Resource Dependencies to full Schedules
    * Embed Schedules within other Schedules for organizational purposes
* Setup:
    * Mark the SubSchedule checkbox in Schedule Master screen
    * Create a Container Job to hold the SubSchedule
* SubSchedules are Multi-Instance by default

![](../static/imgadvanced/SubScheduleCheckBox.png)

#### SubSchedules - Container Jobs

* SubSchedules are controlled via Container Jobs
* Two Parameters:
    * Job Type: Container
    * Schedule to run as SubSchedule

![](../static/imgadvanced/SubScheduleJobMaster.png)

#### SubSchedules - Schedule Instance Property Update

```$PROPERTY:ADD,PropertyName,Value```

* For a Schedule Instance Property:

```$PROPERTY:ADD,SI."PropertyName".Date."ScheduleName",Value```

```
$PROPERTY:ADD,SI."PropertyName".[[$DATE]]."PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2Instance[SubSchedule2Name]",Value
```

#### SubSchedules - Cross SubSchedule Events

```
$JOB:SKIP,CURRENT,PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2InstanceProperty[SubSchedule2Name],Upload File
```

</details>