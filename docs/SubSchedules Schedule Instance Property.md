---
sidebar_label: 'SubSchedules Schedule Instance Property'
hide_title: 'false'
---

## SubSchedules - Schedule Instance Property

* **Schedule Instance Properties** can be used by Jobs within a **SubSchedule**
* A Container Job's **Job Instance Properties** are passed to **SubSchedules** during build time

<a href="imgadvanced/SubScheduleInstanceProperties.png" target="_blank"><img src="imgadvanced/SubScheduleInstanceProperties.png" width="500"></img></a>   

#### SubSchedules - Operations List

<a href="imgadvanced/SubScheduleOperationsList.png" target="_blank"><img src="imgadvanced/SubScheduleOperationsList.png" width="500"></img></a>   

#### Subschedules - Operations Matrix

<a href="imgadvanced/SubSchedulesOperationsMatrix.png" target="_blank"><img src="imgadvanced/SubSchedulesOperationsMatrix.png" width="500"></img></a>   

###### (Click Images to Enlarge)

### SubSchedules - Container Jobs Fully-Qualified Naming Scheme

* Typical Naming Scheme
```PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]```  
* Instance Properties for the Primary Schedule and/or SubSchedule can also be included in the fully-qualified Name
* Only the first Instance Property for each component are included in the Name


<a href="imgadvanced/ContainerJobNames.png" target="_blank"><img src="imgadvanced/ContainerJobNames.png" width="500"></img></a>   

###### (Click Images to Enlarge)

### SubSchedules - Multiple Levels Deep

```
PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleNamed]_ContainerJob2_ContainerJob2InstanceProperty[SubScheduleName2]
```

<a href="imgadvanced/SubSchedulesMultipleLevels.png" target="_blank"><img src="imgadvanced/SubSchedulesMultipleLevels.png" width="500"></img></a>   

###### (Click Images to Enlarge)

### SubSchedules - Background

* Purpose:
    * Give Job, Threshold, and Resource Dependencies to full Schedules
    * Embed Schedules within other Schedules for organizational purposes
* Setup:
    * Mark the SubSchedule checkbox in Schedule Master screen
    * Create a Container Job to hold the SubSchedule
* SubSchedules are Multi-Instance by default

<a href="imgadvanced/SubScheduleCheckBox.png" target="_blank"><img src="imgadvanced/SubScheduleCheckBox.png" width="500"></img></a>   

### SubSchedules - Container Jobs

* SubSchedules are controlled via Container Jobs
* Two Parameters:
    * Job Type: Container
    * Schedule to run as SubSchedule

<a href="imgadvanced/SubScheduleJobMaster.png" target="_blank"><img src="imgadvanced/SubScheduleJobMaster.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### SubSchedules - Schedule Instance Property Update

```$PROPERTY:ADD,PropertyName,Value```

* For a Schedule Instance Property:

```$PROPERTY:ADD,SI."PropertyName".Date."ScheduleName",Value```

```
$PROPERTY:ADD,SI."PropertyName".[[$DATE]]."PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2Instance[SubSchedule2Name]",Value
```

### SubSchedules - Cross SubSchedule Events

```
$JOB:SKIP,CURRENT,PrimarySchedule_ContainerJob_ContainerJobInstanceProperty[SubScheduleName]_ContainerJob2_ContainerJob2InstanceProperty[SubSchedule2Name],Upload File
```