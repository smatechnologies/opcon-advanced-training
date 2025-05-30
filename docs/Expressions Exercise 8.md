---
sidebar_label: 'Expressions Exercise 8'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 8
 
## Exercise 8: Multiple Time Windows

### Objective

To create a job that can run in multiple time windows with the use of an expression.

### Summary

Utilize an expression and a Property called **FAKETIME** to prevent a job from running unless it is between **2 AM and 5 AM**, **11 AM and 2 PM**, or **5 PM and 8 PM**.

### Instructions

#### Create the Property

1.	Create a Global Property called ```FAKETIME``` with a value of ```0```.

#### Create the Schedule

2.	Create a Schedule named **Multiple Time Windows**.

#### Create the Jobs

3. Create a NULL Job that contains is constained by three Time windows.
  * Use the ```[[FAKETIME]]``` Global Property that will allow us to manually update the Time.
  * Between ```2``` and ```5``` am
  * Between ```11``` am and ```2``` pm
  * Between ```5``` and ```8``` pm
  * ```(ToInt([[FAKETIME]]) > 02 && ToInt([[FAKETIME]]) < 05) || (ToInt([[FAKETIME]]) > 11 && ToInt([[FAKETIME]]) < 14) || (ToInt([[FAKETIME]]) > 17 && ToInt([[FAKETIME]]) < 20)```

#### Build the Schedule

4. Build the Schedule. 
5. Verify that the Job did not run.

#### Manipulate the Property

6. Update the Property to a value between ```02``` and ```05```
7. Verify that the Job ran.
8. Update the Property to a value between ```05``` and ```11```.
9. Restart the Job. 
10. Verify that the Job is waiting.
11. Update the Property to a value between ```11``` and ```14```. 
12. Verify that the Job ran again.
13. Update the Property to a value between ```14``` and ```17```. 
14. Restart the Job. 
15. Verify that the Job is waiting.
16. Update the Property to a value between ```17``` and ```20```.
17. Verify that the Job ran again.
18. Update the Property to a value btween ```20``` and ```24```. 
19. Restart the Job. 
20. Verify that the Job is waiting.

:::note

In the real world, a ```Latest Start Time``` would be used.

:::