---
sidebar_label: 'Multi Instance JI Property'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance - Fully Qualified Job Instance Property

## Syntax

* **JI.PropertyName.Date.ScheduleName.JobName**
* Fully-Qualified ScheduJoble Instance Property Names are made up of five parts each seperated with a period, .
  * JI
  * Property Name
  * Schedule Date
  * Schedule Name
  * Job Name

## Parameters  

* **JI:** is Requred and indicates a Job Instance Property
* **PropertyName:** is Required and is the name of the Property defined on the Job
* **Date:** is the Scheduled Date of the Job the Job Instance Property is defined on
* **ScheduleName:** is the Fully Qualified Schedule Name where the Schedule Instance Property is defined
* **JobName:** is the fully qualified Job Name of the Job Instance Property being updated 

## Usage Rules

* If being used in an Event or Notification Trigger **ALL PARAMETERS** are Required.
* A Job Name does not change if the value of the first Job Instance Property is updated after a Schedule the job is in is built
* If the **Property Name**, **Schedule Name**, or **Job Name** contains a **Period** or is a **SubSchedule** the parameter needs to be wrapped in quotes.
  * _JI."Property.Name"..ScheduleName.JobName_
  * _JI.PropertyName.."Schedule.Name".JobName_
  * _JI.PropertyName..ScheduleName."Job.Name"_
  * _JI.ScheduleProperty.."ParentSchedule\_Container[SubSchedule]".JobName_
* All 5 parts need to be defined to successfully reference the Job Instance Property **EXECPT:**
  * If the Schedule Date will always be the current Date, then you can leave out the Schedule Date qualifier
    * _JI.PropertyName..ScheduleName.JobName_
  * If the Schedule Name isn't needed as the Event or Notification is tied to that Schedule
    * _JI.Propertyname.ScheduleDate..JobName_
  * If the Job Name isn't needed as the Event or Notification is tied to that Job
      * _JI.Propertyname.ScheduleDate.ScheduleName_

:::tip Example

* **Job1** in a Schedule named **Training Schedule** has a Job Instance Property of ```TIME``` with a value of ```10```
* Using a $PROPERTY:SET event that updates that value in today's schedule to a value of ```20```
* Schedule name: ```Training Schedule```
* Job Name: ```Job1_10```
* Property Name: ```TIME```

$PROPERTY:SET,**JI.TIME.[[$DATE]].Training Schedule.Job1_10**,20

:::
