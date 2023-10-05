---
sidebar_label: 'Multi Instance Exercise 10'
hide_title: 'false'
---

### Exercise 10 - Create Two SubSchedules

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


### Enterprise Manager

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