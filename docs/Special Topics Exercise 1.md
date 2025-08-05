---
sidebar_label: 'Special Topics Exercise 1'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>


# Special Topics Exercise 1

## Exercise 1: Advanced Failure Criteria

### Objective

To define Advanced Failure Criteria on a job.

### Summary

Create a schedule, **Advanced Failure**, that contains a job that will **Finish OK** when the job returns a **500** for an exit code. Then have the exit code of **500** trigger a **$JOB:SKIP** event to skip the dependent job.

### Instructions

#### Create the Schedule

1.	Create a Schedule named **Advanced Failure**.

#### Create the Jobs

2.	Create a Job called **Job 1** with the following settings:
  * Command Line: ```C:\Program Files\OpConxps\MSLSAM\genericp.exe -t15 -e500```
  * Advanced Failure Criteria: ```0``` or a ```500``` is a **Finish OK**
  * Frequency: Mon-Sun-O
  * Event: **SKIP** the **NULL Job** when this job returns a **500**
3.	Create a **Null Job** with the following settings:
  * Frequency: Mon-Sun-O
  * Dependency: **Requires Job 1** to **Finish OK**

#### Build the Schedule

4.	Build the Schedule

:::note

* Verify that the 1st Job exited with a ```500``` but was listed as Finished OK.
* Verify that the 2nd Job was skipped.

![](../static/imgadvanced/STEx1Solution.png)

:::