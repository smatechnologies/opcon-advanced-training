---
sidebar_label: 'Expressions Exercise 10'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 10
 
## Exercise 10: Expression Events (Months)
 
### Objective

To use a date related expression to set the value of a property.
 
### Summary

Using date related expression, set up **$PROPERTY:SET** events to set the value of a property called **Month** with the corresponding number.

  * ```Jan```, ```Apr```, ```Jul```, or ```Oct``` have a group number of ```01040710```
  * ```Feb```, ```May```, ```Aug```, or ```Nov``` have a group number of ```02050811```
  * ```Mar```, ```Jun```, ```Sep```, or ```Dec``` have a group number of ```03060912```

### Instructions

#### Create the Property

1. Create a Global Property called ```Month``` with a value of ```NULL```

#### Create the Job

2. Create another NULL Job within the Schedule named **Expression Events** with the following specs:
  * **Job Name:** ```Month```
  * **Frequency:** Mon-Fri-O
  * **Event 1 Specs:**
    * **Event Trigger:** Job Completion Complex Expression
	* **Expression:**  ```ToInt([[$SCHEDULE DATEmm]]) == 01 || ToInt([[$SCHEDULE DATEmm]]) == 04 || ToInt([[$SCHEDULE DATEmm]]) == 07 || ToInt([[$SCHEDULE DATEmm]]) == 10```
	* **Event:** $PROPERTY:SET,Month,01040710
  * **Event 2 Specs:**
    * **Event Trigger:** Job Completion Complex Expression
	* **Expression:**  ```ToInt([[$SCHEDULE DATEmm]]) == 02 || ToInt([[$SCHEDULE DATEmm]]) == 05 || ToInt([[$SCHEDULE DATEmm]]) == 08 || ToInt([[$SCHEDULE DATEmm]]) == 11```
	* **Event:** $PROPERTY:SET,Month,02050811
  * **Event 3 Specs:**
    * **Event Trigger:** Job Completion Complex Expression
	* **Expression:**  ```ToInt([[$SCHEDULE DATEmm]]) == 03 || ToInt([[$SCHEDULE DATEmm]]) == 06 || ToInt([[$SCHEDULE DATEmm]]) == 09 || ToInt([[$SCHEDULE DATEmm]]) == 12```
	* **Event:** $PROPERTY:SET,Month,03060912

#### Build the Schedule

3. Build the Schedule and run the job

:::note

* Verify that the Global Property was updated to the proper Month number
  * by viewing the Global Property

![](../static/imgadvanced/ExpressEx10Solution.png)

  * by viewing the SAM Log

```
Receiving Event $PROPERTY:SET,Month,01040710.  Received from 4/22/2025:Multi Instance job Limitations:Month (Job Termination Expression)
Processing Event $PROPERTY:SET,Month,01040710,smatraining\smauser.  Received from 4/22/2025:Multi Instance job Limitations:Month (Job Termination Expression)
Property [Month] Changed to [01040710] by smatraining\smauser
```

:::