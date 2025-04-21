---
sidebar_label: 'Multi Instance Exercise 10'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 10

## Exercise 10: Multiple SubSchedules

### Objective

To utilize Job Instance Properties to build 2 SubSchedules.

### Summary

Create a Schedule, **Primary Schedule**, with a multi instance Container, **Multi-Instance Container Job**, that will create 2 subschedules with different TIME Properties, ```15``` and ```20```, that propogate down to the SubSchedule, **SS SubSchedule**, as SIs, ```SI.TIME```. 

### Instructions

#### Create the Resource

1. Create a **Resource** with **Max Value** of ```1```.

#### Create the SubSchedule and Jobs

2. Create a SubSchedule named **SS SubSchedule**.
3. Within **SS Subschedule**, create 5 Jobs running in dependent order with the following Command Line: ```timeout /t [[SI.TIME]]```
  * Job 1 &rarr; Job 1 &rarr; Job 1 &rarr; Job 1 &rarr; Job 1

#### Create the Primary Schedule
4. Create a Schedule named **Primary Schedule**.
  * Give it a Schedule Instance Property of: ```ENV=Production```

#### Create the Multi Instance Container Job

5. Within **Primary Schedule**, create a container job called, **Multi-Instance Container Job:**  
  * Assign the Container Job to **SS SubSchedule**  
  * Mark it as **Multi-Instance**  
  * Give the Container Job a **Frequency** of **Mon-Fri-N**
  * Create two **Job Instance Properties**
    * ```TIME=15```
    * ```TIME=25```
  * Define a **Resource Dependency** equal to ```1```.

#### Build the Schedule

6. Build the **Primary Schedule**.

:::note 

* You should be able to see the following in an Operations window:  
  * Two Container Jobs, each containing **SUBSCHEDULE** were built
  * Take note of the fully qualified SubSchedule Names
  * Verify that only one Container Job runs at a time

![](../static/imgadvanced/MIEx10Solution1.png)

![](../static/imgadvanced/MIEx10Solution2.png)

:::


## Enterprise Manager

<details>

1.	Create a Schedule named **PRIMARY SCHEDULE**.
    * Give it a Schedule Instance Property of: ```ENV=PRODUCTION```
2.	Create a SubSchedule named **SUBSCHEDULE**.  
    * Do **NOT** give it a Schedule Instance Property
3.	Within **SUBSCHEDULE**, create 5 Jobs running in dependent order with the following Command Line: ```Timeout /t [[SI.TIME]]```
4.	Within **PRIMARY SCHEDULE**, create a Multi-Instance Container Job:  
    * Assign the Container Job to **SUBSCHEDULE**  
    * Mark it as **Multi-Instance**  
    * Give the Container Job a Mon-Fri-N **Frequency**  
    * Create two **Job Instance Properties**
    * ```TIME=15```
    * ```TIME=25```
5.	Create a **Resource** with a **Max Value** of ```1```.
6.	Give the **Container Job** a **Resource Dependency** with **Resource** = ```1```.
7.	Build the Schedule.
8.	Verify the following in an Operations window:  
    * Two Container Jobs, each containing **SUBSCHEDULE** were built
    * Take note of the fully qualified SubSchedule Names
    * Verify that only one Container Job runs at a time

</details>