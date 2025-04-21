---
sidebar_label: 'Expressions Exercise 1'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 1
 
## Exercise 1: ToUpper and ToLower
 
### Objective

To use ToUpper and ToLower to manipulate the name of a file.
 
### Summary

Utilizing ToUpper and ToLower expressions to manipulate the name of a file, **PropertyExpressions.txt**, so that it reflects the month as part of the name.

### Instructions

#### Create the Directory and File

1. Create the folder ```C:\Expressions``` on the OpCon Training Machine.
2. Create a blank text file named ```PropertyExpressions.txt```

#### Create the Global Property

3. Create a Global Property
  * Name: ```$SCHEDULE DATEmmm```
  * Value: ```mmm```

#### Create the Schedule

4. Create a Schedule called **Property Expressions**.

#### Create the Jobs

5. Create a File Copy Job called, **To Upper File Copy**, with the following parameters:
  * **Job Type:** ```Windows```
  * **Job Sub-Type:** ```Command: File Copy```
  * **Primary Machine:** ```SMATraining```
  * **User ID:** ```SMATRAINING\SMAUSER```
  * **Source:** ```C:\Expressions\PropertyExpressions.txt```
  * **Destination:** ```C:\Expressions\PropertyExpressions_1_[[=ToUpper([[$SCHEDULE DATEmmm]])]].txt```
  * **Frequency:** ```MON-FRI-N```
6. **Copy the Job** changing the following two things:
  * Name: **To Lower File Copy**
  * **Source:** ```C:\Expressions\PropertyExpressions_1_[[=ToUpper([[$SCHEDULE DATEmmm]])]].txt```
  * **Destination:** ```C:\Expressions\PropertyExpressions_2_[[=ToLower([[$SCHEDULE DATEmmm]])]].txt```
  * **Dependency:** Make the copied Job dependent on the first Job.

#### Build the Schedule

7. Build the Schedule for today and run it.

:::note 

* Verify that the Job Finished **OK** 
* Verify that the two files were created with the proper names.

![](../static/imgadvanced/ExpressEx1Solution.png)
:::
