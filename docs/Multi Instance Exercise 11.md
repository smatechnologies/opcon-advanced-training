---
sidebar_label: 'Multi Instance Exercise 11'
hide_title: 'false'
---

## Exercise 11 - Cross SubSchedule Events

1.	Record the fully qualified Schedule name of the **SUBSCHEUDLE** using the **Schedule Instance** ```TIME``` of ```15``` created in Exercise 10.
2.	If the Schedule is still running, cancel all Jobs to close out the Schedules and **delete** the **PRIMARY SCHEDULE** from the Daily list.
3.	Add the following **Schedule Instance Property** to **PRIMARY SCHEDULE**: ```TIME=15```
4.	Add a **Null Job** to the **Primary Schedule**.
    * **Frequency**: Mon-Fri-N
    * **Event**: Skip the 2nd Job within the **SUBSCHEDULE** with the **Job Instance Property** of ```TIME=15```.
        * Use the fully qualified Schedule Name.
        * Use the new Schedule Instance Property ```[[SI.TIME]]``` in place of the number ```15``` in the name.
5.	Rebuild the Schedule and verify that the appropriate Job was skipped.