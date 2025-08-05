---
sidebar_label: 'Special Topics Exercise 5'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Special Topics Exercise 5
 
## Exercise 5: System Date Offsets
 
### Objective

To use offsets to calculate variations of dates or times.
 
### Summary

Use offsets to manipulate how a $SCHEDULE DATE is resolved by using the same property in multiple jobs with different offsets specified.

### Instructions
 
#### Create the System Property

1. Create a variation of the ```$SCHEDULE DATE``` Global Property to use in this exercise.
  * Make sure that it has a month, date, and year.

#### Create an Embedded Script

2. Use the following Echo script
  * ```echo %1```

#### Create the Schedule

3. Create a Schedule named **Date Offsets**.

#### Create Jobs

4. Create 4 Embedded Script Jobs calling the Echo script. 
  * Job 1: One using an offset of +/- X **days**.
  * Job 2: One using an offset of +/- X **months**.
  * Job 3: One using an offset of +/- X **working days**.
  * Job 4: One advancing to the last day of next month (**eom**).

#### Build the Schedule

5. Build the Schedule and review the Job Outputs of each Job and verify proper dates were used.

:::note

Verify the dates are resolving correctly by viewing the Job Output of each job.

:::