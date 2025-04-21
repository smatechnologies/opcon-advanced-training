---
sidebar_label: 'Multi Instance Schedule Limitation'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi-Instance Schedule Limitations

## Limitations

* Only **Schedule Instance Properties** are unique with each instance
* The following are the same for every instance of the Schedule:
  * Calendars
  * Workdays per Week
  * Machines
  * Batch Users
  * Departments
  * Access Codes
  * Start Times
  * Frequency Build Status
* Events require the **fully-qualified Schedule Name**

:::caution

* Tying External or Cross-Schedule **Events** to Multi-Instance Schedules can be difficult
* **Threshold** or **Resource** Dependencies will **NOT** be unique between Schedule Instances

:::