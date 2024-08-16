---
sidebar_label: 'Fully Qualified SI Property Name'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Fully-Qualified [SI] Property Name

* Fully-Qualified Schedule Instance Property:

```
SI.PropertyName.Date.ScheduleName
```

* Periods are a delimiter between parameters when spelling out the fully qualified Schedule Instance Property

* Parameters:
    * ```SI``` - Indicates a Schedule Instance Property
    * ```PropertyName``` - Name of the Schedule Instance Property
    * ```Date``` - Scheduled Date of the Schedule Instance Property being called
    * ```ScheduleName``` - Fully Qualified Schedule Name of the Schedule Instance Property being called

##### Example: 

* A Schedule named **Training Schedule** with a Schedule Instance Property of ```TIME``` with a value of ```10```
* Update that value in today's schedule to a value of ```20```
* Schedule name: ```Training Schedule_10```
* Property Name: ```TIME```

```
$PROPERTY:SET,SI.TIME.[[$DATE]].Training Schedule_10,20
```