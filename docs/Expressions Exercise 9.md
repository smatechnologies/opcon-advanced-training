---
sidebar_label: 'Expressions Exercise 9'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 9
 
## Exercise 9: Expression Events (Time Windows)

### Objective

To trigger events with an expression using time windows

### Summary

Using time window expression, set up **$PROPERTY:SET** events to set the value of a property called **SHIFT** with the correct shift number.

  * If between ```22:00``` and ```06:00```, Update the Global Property to ```1```.
  * If between ```06:00``` and ```14:00```, Update the Global Property to ```2```.
  * If between ```14:00``` and ```22:00```, Update the Global Property to ```3```.

### Instructions

#### Create the Property

1. Create a Global Property called ```Shift``` with a value of ```NULL```

#### Create the Schedule

2. Create a Schedule named **Expression Events**.

#### Create the Job

3. Create a NULL Job with following specs:
  * **Job Name:** ```Shift```
  * **Frequency:** Mon-Fri-O
  * **Event 1 Specs:**
    * **Event Trigger:** Job Completion Complex Expression
	* **Expression:**  ```ToInt([[$TIMEhh]]) > 22 && ToInt([[$TIMEhh]]) < 06```
	* **Event:** $PROPERTY:SET,Shift,1
  * **Event 2 Specs:**
    * **Event Trigger:** Job Completion Complex Expression
	* **Expression:**  ```ToInt([[$TIMEhh]]) > 06 && ToInt([[$TIMEhh]]) < 14```
	* **Event:** $PROPERTY:SET,Shift,2
  * **Event 3 Specs:**
    * **Event Trigger:** Job Completion Complex Expression
	* **Expression:**  ```ToInt([[$TIMEhh]]) > 14 && ToInt([[$TIMEhh]]) < 22```
	* **Event:** $PROPERTY:SET,Shift,3

#### Build the Schedule

4. Build the Schedule and run the job

:::note

* Verify that the Global Property was updated to the proper Shift number
  * by viewing the Global Property

![](../static/imgadvanced/ExpressEx9Solution.png)

  * by viewing the SAM Log

```
Receiving Event $PROPERTY:SET,Shift,3.  Received from 4/22/2025:Multi Instance job Limitations:Shifts (Job Termination Expression)
Processing Event $PROPERTY:SET,Shift,3,smatraining\smauser.  Received from 4/22/2025:Multi Instance job Limitations:Shifts (Job Termination Expression)
Property [Shift] Changed to [3] by smatraining\smauser
```

:::
