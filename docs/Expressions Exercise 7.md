---
sidebar_label: 'Expressions Exercise 7'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 7
 
## Exercise 7: Threshold Replacement

### Objective

To use a combination of Expressions to remove the need for a Threshold
 
### Summary

Utilizing an Expression to update the value of a Schedule Instance Property. Then use that SI in an expression to allow a job to run when it has a certain value.

### Instructions

#### Create the Schedule

1.	Create a Schedule named **Threshold Replacement** with two Schedule Instance Properties *(not Multi-Instance)*.
  * ```MANUAL=0```
  * ```AUTO=0```

#### Create the Jobs

2.	Create 3 Null Jobs.
  * Job 1:
    *	The first will be built ```On Hold```
    * Add a ```$PROPERTY:SET``` Event to increment the Schedule Instance Property ```AUTO``` by a ```+1```
  * Job 2:
    *	The second will have an Expression Dependency for the ```MANUAL``` Schedule Instance Property equaling ```1```.
    * ```ToInt([[SI.MANUAL]]) == 1```
  *	Job 3:
    * The third will have an Expression Dependency for the ```AUTO``` Schedule Instance Property equaling ```1```.
    * ```ToInt([[SI.AUTO]]) == 1```

#### Build the Schedule

4.	Build the Schedule.

:::note 

* Verify that none of the Jobs run by themselves.

![](../static/imgadvanced/ExpressEx7Solution1.png)

:::

#### Manipulate the Daily Jobs

6.	Edit the Daily Schedule, updating the ```MANUAL``` Schedule Instance Property from ```0``` to ```1```. 
7.	Verify that the 2nd Job ran once the Property was updated to meet the Expression Dependency.
8.	Release the Job that was built ```On Hold```. 
9.	The 3rd Job should run shortly after the held Job was released.