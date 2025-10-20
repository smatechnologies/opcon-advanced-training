---
sidebar_label: 'Special Topics Exercise 3'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Special Topics Exercise 3
 
## Exercise 3: Advanced Frequency Settings
 
### Objective

Create multiple Jobs utilizing Advanced Frequency settings. 

### Summary
 
Create Null Jobs utilizing Exclude, Start and Stop Scheduling, and Include Scheduling then view and verify the Calendar output in the Forecast screen.

### Instructions
 
#### Create the Schedule

1. Create a Schedule named **Advanced Frequency Settings** 

#### Create the Jobs

2. Create 4 NULL jobs with the following settings:
  * Frequency for 4 of the 5 jobs: Mon-Sun-O
  * Frequency for the 5th job: EOM-O
  * **Advanced Frequency Settings** for each Job:
    * **Null Job 1:** Exclude Feb, Jun, Aug, and Nov
    * **Null Job 2:** Start Scheduling on next Wednesday’s date
    * **Null Job 3:** Stop Scheduling on next Wednesday’s date
    * **Null Job 4:** Exclude from Schedule on this Friday
    * **Null Job 5:** Include in Schedule on this Friday (this is the end of the month Frequency)

#### Build the Schedule

3. Build the Schedule multiple times based on the following:
  * Until next Sunday
  * One random day in November.

:::note

You should see the following jobs scheduled as follows: 

* **NULL Job 1**

![](../static/imgadvanced/STEx3Solution1.png)

* **NULL Job 2**

![](../static/imgadvanced/STEx3Solution2.png)

* **NULL Job 3**

![](../static/imgadvanced/STEx3Solution3.png)

* **NULL Job 4**

![](../static/imgadvanced/STEx3Solution4.png)

* **NULL Job 5**

![](../static/imgadvanced/STEx3Solution5.png)

:::