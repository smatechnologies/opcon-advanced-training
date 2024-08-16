---
sidebar_label: 'Multi Instance JI Property'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Multi Instance Job Instance Property

### Job Instance Property Update

* Updating Job Instance Properties through an event is a similar process to updating Schedule Instance Properties
    * Occurs in Daily Tables, not Master Tables
    * A fully-qualified Job Instance Property Name is required
    * A Job Name does not change if the value of the first Job Instance Property is updated after a Schedule is built

### Fully-Qualifed JI Property Name

* Fully Qualified Job Instance Property:
    * ```JI.PropertyName.Date.ScheduleName.JobName```
* Periods are the delimiter between parameters when spelling out a fully qualified Job Instance Property

Parameters:  

* ```JI``` - Indicates a Job Instance Property
* ```PropertyName``` - the name of the Job Instance Property
* ```Date``` - The Schedule Date of an Instance which will be updated
* ```ScheduleName``` - The fully qualified Schedule Name containing a Job whose Job Instance Property is being updated
* ```JobName``` - The fully qualified Job Name of the Job Instance Property being updated 