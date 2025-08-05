---
sidebar_label: 'Fully Qualified SI Property Name'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Fully Qualified Schedule Instance Property Names

## Syntax

* **SI.PropertyName.Date.ScheduleName**
* Fully-Qualified Schedule Instance Property Names are made up of four parts each separated with a period.
  * SI
  * Property Name
  * Schedule Date
  * Schedule Name

## Parameters

* **SI:** is Required and identifies the property as a Schedule Instance Property
* **PropertyName:** is Required and is the name of the Property defined on the Schedule
* **ScheduleDate:** is the Scheduled Date of the Schedule the Schedule Instance Property is defined on
* **ScheduleName:** is the Fully Qualified Schedule Name where the Schedule Instance Property is defined

## Usage Rules

* If being used in an Event or Notification Trigger **ALL PARAMETERS** are Required.
* A Schedule Name does not change if the value of the first Schedule Instance Property is updated after a Schedule is built
* If the **Property Name** or **Schedule Name** contains a **Period** or is a **SubSchedule** the parameter needs to be wrapped in quotes.
  * _SI."Property.Name"..ScheduleName_
  * _SI.PropertyName.."Schedule.Name"_
  * _SI.ScheduleProperty.."ParentSchedule\_Container[SubSchedule]"_
* All 4 parts need to be defined to successfully reference the Schedule Instance Property **EXCEPT:**
  * if the Schedule Date will always be the current Date, then you can leave out the Schedule Date qualifier
    * _SI.PropertyName..ScheduleName_
  * if the Schedule Name isn't needed as the Event or Notification is tied to that Schedule
    * _SI.PropertyName.ScheduleDate_

:::tip Example

* A Schedule named **Training Schedule** with a Schedule Instance Property of ```TIME``` with a value of ```10```
* Using a $PROPERTY:SET event that updates that value in today's schedule to a value of ```20```
* Schedule name: ```Training Schedule_10```
* Property Name: ```TIME```

$PROPERTY:SET,**SI.TIME.[[$DATE]].Training Schedule_10**,20

:::
