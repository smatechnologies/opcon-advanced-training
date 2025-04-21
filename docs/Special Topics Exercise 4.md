---
sidebar_label: 'Special Topics Exercise 4'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Special Topics Exercise 4
 
## Exercise 4: Frequency Based Features
 
### Objective

To use Advanced Frequency setting.
 
### Summary

To utilize Advanced Frequency setting to customize the builds of multiple jobs in the same schedule.
 
### Instructions
 
#### Create the Schedule

1. Create a Schedule named **Frequency Features**.

#### Create the Jobs

2. Create 4 Windows Jobs with the following settings:
  * **Command Line for all jobs:** ```timeout /t 10```
  * **Job 1** 
    * **Frequency:** Runs on EOM
  * **Job 2**
    * **Frequency:** Runs Daily
    * **Dependency:** Frequency related Required Dependency to Job 1.
    * **Event:** Frequency-based Event that will trigger a **$JOB:SKIP** event to skip Job 3 at EOM when this job **Finishes OK**
  * **Job 3** 
    * **Frequency:** Runs Daily
    * **Dependency:** Dependent on Job 2
  * **Job 4** 
    * **Frequency:** Runs Daily
    * **Dependency 1:** * **EXCEPT** at EOM when the job must run between ```7:00 am``` and ```10:00 am``` **OR** ```6:00 pm``` and ```8:00 pm```.
    * **Dependency 2:** Every other day the job can run between ```4:30 am``` and ```10:00 am``` **OR** ```6:00 pm``` and ```9:30 pm```.

#### Build the Schedule

3. Build the Schedule multiple times
  * Once for a normal day 
  * Once at end of month. 
4. Force the Schedules to run and verify the results.

:::note

* Verify that Job 4 in both daily instances is waiting if it is outside of the run times.
* Verify in the **EOM Schedule**, that **Job 2** is **NOT dependent** on **Job 1** and that **Job 3** is **SKIPPED**.

![](../static/imgadvanced/STEx4Solution1.png)

![](../static/imgadvanced/STEx4Solution2.png)

:::