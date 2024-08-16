---
sidebar_label: 'Special Topics Exercise 4'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 4 - Frequency Based Features

1.	Create a Schedule named **FREQUENCY FEATURES**.
2.	Create 4 Jobs
* Job 1 only runs on EOM.
* Job 2 runs daily and has a Frequency related Required Dependency on Job 1.
* Job 3 has a daily Frequency and is dependent on Job 2. Job 2 has a Frequency-based Event that will skip Job 3 on EOM.
*  Job 4 runs every day, but:
    *  On EOM, Job 4 can only run between ```7:00 am``` and ```10:00 am``` or ```6:00 pm``` and ```8:00 pm```.
    *  Every other day, Job 4 can run between ```4:30 am``` and ```10:00 am``` or ```6:00 pm``` and ```9:30 pm```.
3.	Build the Schedule for a normal day as well as an EOM. 
4.	Force the Schedules to run and verify the results.