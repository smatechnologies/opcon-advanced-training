---
sidebar_label: 'Multi Instance Exercise 11'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 11

## Exercise 11: Cross SubSchedule Events

### Objective

To use an event to affect a job in a subschedule.

### Summary

Use a **$JOB:SKIP** event to **SKIP Job 2** in the 15 second subschedule by using a **NULL JOB** in the **Primary Schedule**.

### Instructions

#### Capture the SubSchedule Name

1. Right-click on the **Primary Schedule > Multi Instance Container Job_15** in the **Schedule** section of the **Processes** screen.
2. In the **Schedule Summary** section, copy the **Schedule Name** into Notepad or Notepad++ for later use.
3. If the **Primary Schedule** is still running, cancel all Jobs to close out the Schedules and **delete** the **Primary Schedule** from the Daily list.

#### Update the Primary Schedule

4. Add the following **Instance Property** to the existing **Property Group** 
  * ```TIME=15```

#### Create a NULL Job with a $JOB:SKIP Event

5. Add a **Null Job** to the **Primary Schedule**.
  * **Frequency:** Mon-Fri-N
  * Add an **Event** to Skip the 2nd Job within the **SS SubSchedule** with the **Instance Property** of ```TIME=15```.
    * Use the fully qualified Schedule Name.
    * Use the new Schedule Instance Property ```[[SI.TIME]]``` in place of the number ```15``` in the name.
    * ```$JOB:SKIP,[[$SCHEDULE DATE]],Primary Schedule_Multi Instance Container Job_[[SI.TIME]][SS SubSchedule],Job 2```

#### Build the Primary Schedule

6. Rebuild the Schedule and verify that the appropriate Job was skipped.

:::note

You should see that Job 2 in the **Primary Schedule_Multi Instance Container Job_15** is **SKIPPED**.

![](../static/imgadvanced/MIEx11Solution1.png)

![](../static/imgadvanced/MIEx11Solution2.png)

:::





## Enterprise Manager

<details>

1.	Record the fully qualified Schedule name of the **SUBSCHEUDLE** using the **Schedule Instance** ```TIME``` of ```15``` created in Exercise 10.
2.	If the Schedule is still running, cancel all Jobs to close out the Schedules and **delete** the **PRIMARY SCHEDULE** from the Daily list.
3.	Add the following **Schedule Instance Property** to **PRIMARY SCHEDULE:** ```TIME=15```
4.	Add a **Null Job** to the **Primary Schedule**.
    * **Frequency:** Mon-Fri-N
    * **Event:** Skip the 2nd Job within the **SUBSCHEDULE** with the **Job Instance Property** of ```TIME=15```.
        * Use the fully qualified Schedule Name.
        * Use the new Schedule Instance Property ```[[SI.TIME]]``` in place of the number ```15``` in the name.
5.	Rebuild the Schedule and verify that the appropriate Job was skipped.

</details>