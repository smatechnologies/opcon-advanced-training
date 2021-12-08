---
sidebar_label: 'Multi Instance Schedule Limitation'
hide_title: 'false'
---

## Multi-Instance Schedule Limitation 

* Only **Schedule Instance Properties** can be unique
* The following cannot:
    * Calendars
    * Workdays per Week
    * Machines
    * Batch Users
    * Departments
    * Access Codes
    * Start Times
    * Frequency Build Status

:::caution Caution
* Tying External or Cross-Schedule **Events** to Multi-Instance Schedules can be difficult

* _Schedule or Job Events require fully-qualified Schedule Names_

* **Threshold** or **Resource** Dependencies **will NOT** be unique between Schedule Instances
:::