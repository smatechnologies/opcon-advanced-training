---
sidebar_label: 'Expressions Exercise 6'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 6
 
## Exercise 6: OI (Property in a Property Name)
 
### Objective

To use an **OpCon Instance** to combine a **Schedule Instance Property** with another string to create another Property Name.
 
### Summary

Utilizing an **OpCon Instance** to create and use a Property Name that is the combination of 2 values that will resolve to the wanted parameter value.

### Instructions

#### Create the Global Properties

1. Create 6 Global Properties
  * **PROD-LOAD** = ```5```
  * **PROD-POST** = ```30```
  * **PROD-RETURNS** = ```15```
  * **DEV-LOAD** = ```3```
  * **DEV-POST** = ```18```
  * **DEV-RETURNS** = ```9```

#### Create the Schedule

2. Create a Multi-Instance Schedule named **Property In Property Name** with two different Schedule Instance Properties
  * **ENV** = ```PROD```
  * **ENV** = ```DEV```

#### Create the Jobs

3. Create a Windows Jobs with the following settings
  * **Job Name:** ```Load Job```
  * **Job Type:** ```Windows```
  * **Primary Machine:** ```SMATraining```
  * **User ID:** ```SMATRAINING\SMAUSER```
  * **Command Line** ```timeout /t [[OI.[[=[[SI.ENV]]+"-LOAD"]]]]```
  * **Frequency:** ```MON-FRI-N```
4. Copy the job to create the jobs for Post and Returns.
  * Make sure to modify the expression in the command line accordingly.
5. Add dependencies so that they run in order
  * **Load &rarr; Post &rarr; Returns**

#### Build the schedule

5. Build and run the schedule for today.

:::note

Verify that 2 schedules build, PROD and DEV and that all jobs ran successfully

![](../static/imgadvanced/ExpressEx6Solution.png)

:::