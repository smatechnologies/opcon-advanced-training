---
sidebar_label: 'Multi Instance Exercise 12'
hide_title: 'false'
---

### Exercise 12 - External Events Schedule Instance Update

1.	If the Schedule is still running, cancel all Jobs to close out the Schedules and delete the **PRIMARY SCHEDULE** from the Daily list.
2.	Create the following **Embedded Script** using the **Command Shell** type:

![](../static/imgadvanced/propertyaddscript_MI_sm.png) 

3.	Create a Job in the **PRIMARY SCHEDULE** that will call the **Embedded Script** above.  
    * **Frequency**: Mon-Fri-N
    * **Script Arguments**:```SI.TIME.DATE.FullyQualifiedScheduleName```
4.	Use **SUBSCHEDULE** with ```25``` for the **Schedule Instance Property** for the **Fully-Qualified Schedule Name**
    * ```45```
    * ```ocadm```
    * ```opconxps```
5.	Build the Schedule and verify that the ```SI.TIME``` for the Schedule has been increased from ```25``` to ```45```.
    * The name of the Schedule will not change, only the value of the Property.


### Enterprise Manager

<details>

1.	If the Schedule is still running, cancel all Jobs to close out the Schedules and delete the **PRIMARY SCHEDULE** from the Daily list.
2.	Create the following **Embedded Script** using the **Command Shell** type:

![](../static/imgadvanced/ExternalEventUpdate.png)

3.	Create a Job in the **PRIMARY SCHEDULE** that will call the **Embedded Script** above.  
    * **Frequency**: Mon-Fri-N
    * **Script Arguments**:```SI.TIME.DATE.FullyQualifiedScheduleName```
4.	Use **SUBSCHEDULE** with ```25``` for the **Schedule Instance Property** for the **Fully-Qualified Schedule Name**
    * ```45```
    * ```ocadm```
    * ```opconxps```
5.	Build the Schedule and verify that the ```SI.TIME``` for the Schedule has been increased from ```25``` to ```45```.
    * The name of the Schedule will not change, only the value of the Property.

</details>