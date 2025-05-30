---
sidebar_label: 'Multi Instance Exercise 12'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 12

## Exercise 12: External Events Schedule Instance Update

### Objective

To use an External Event change the property of a SubSchedule

### Summary

To use an embedded script, **PropAdd**, to submit an external event into **MSGIN** that will change the **TIME** property from **25** to **45**.

### Instructions

#### Capture the SubSchedule Name

1. Right-click on the **Primary Schedule > Multi Instance Container Job_25** in the **Schedule** section of the **Processes** screen.
2. In the **Schedule Summary** section, copy the **Schedule Name** into Notepad or Notepad++ for later use.
3. If the **Primary Schedule** is still running, cancel all Jobs to close out the Schedules and **delete** the **Primary Schedule** from the Daily list.

#### Create an Embedded Script

4. Create an **Embedded Script** called **PropAdd** using the following **Command Prompt:**
  * ![](../static/imgadvanced/propertyaddscript_MI_sm.png) 
  * ```echo $PROPERTY:ADD,%1,%2,%3,%4 > "C:\ProgramData\OpConxps\MSLSAN\MSGIN\PropSet.txt"```

#### Create the Embedded Script Job

5. Create a Job in the **Primary Schedule** that will call the **Embedded Script** above.  
  * **Script Arguments:**
    * ```SI.TIME.DATE.FullyQualifiedScheduleName```
      * Use the **Fully-Qualified Schedule Name** for the **SS SubSchedule** with the property **TIME=25**
      * Remember to add or comment out quotes when needed.
    * ```45```
    * ```ocadm```
    * ```opconxps```
  * **Frequency:** Mon-Fri-N

#### Build the Schedule

6. Build the Schedule.

:::note

* Verify that the ```SI.TIME``` for the Schedule has been increased from ```25``` to ```45```.
  * The name of the Schedule will not change, only the value of the Property.

![](../static/imgadvanced/MIEx12Solution.png)

:::


## Enterprise Manager

<details>

1.	If the Schedule is still running, cancel all Jobs to close out the Schedules and delete the **PRIMARY SCHEDULE** from the Daily list.
2.	Create the following **Embedded Script** using the **Command Shell** type:

![](../static/imgadvanced/ExternalEventUpdate.png)

3.	Create a Job in the **PRIMARY SCHEDULE** that will call the **Embedded Script** above.  
    * **Frequency:** Mon-Fri-N
    * **Script Arguments:**```SI.TIME.DATE.FullyQualifiedScheduleName```
4.	Use **SUBSCHEDULE** with ```25``` for the **Schedule Instance Property** for the **Fully-Qualified Schedule Name**
    * ```45```
    * ```ocadm```
    * ```opconxps```
5.	Build the Schedule and verify that the ```SI.TIME``` for the Schedule has been increased from ```25``` to ```45```.
    * The name of the Schedule will not change, only the value of the Property.

</details>