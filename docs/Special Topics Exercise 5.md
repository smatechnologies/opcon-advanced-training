---
sidebar_label: 'Special Topics Exercise 5'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 5 - System Date Offsets

1.	Create a variation of the ```$SCHEDULE DATE``` Global Property to use in this exercise.
2.	Create a Schedule named **DATE OFFSETS**.
3.	Use the following Echo script:
```
echo %1
```
4.	Create 4 Windows Jobs calling this script. 
* One using an offset of X **days**.
* One using an offset of X **months**.
* One using an offset of X **working days**.
* One advancing to the last day of next month (**eom**).
5.	Build the Schedule and review the Job Outputs of each Job and verify proper dates were used.