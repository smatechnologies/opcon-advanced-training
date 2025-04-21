---
sidebar_label: 'Expressions Exercise 5'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 5
 
## Exercise 5: Expr (Property in Property Value)
 
### Objective

To use Expr to evaluate the value of a property when it contains properties in its value.
 
### Summary

Utilizing the Expr expression create and use a Property that has a value with another Property in it so that a file can be copied into that path.

### Instructions

#### Create the Directory

1. Create the following folder:  ```C:\Expressions\yyyy-mm-dd```  
  * ```yyyy-mm-dd``` needs to be the current date in that format.

#### Create the Properties

2. Create four Global Properties
  * SERVER-DRIVE = ```C:```
  * BACKSLASH = ```\```
  * $SCHEDULE DATEyyyy-mm-dd = ```yyyy-mm-dd```
  * PATH_PROPERTY = the expression required to combine the three Properties above with the rest of the desired path.
    * ```[[SERVER-DRIVE]] + [[BACKSLASH]] + "Expressions" + [[BACKSLASH]] + [[$SCHEDULE DATEyyyy-mm-dd]]```

#### Create the Schedule

3.	Create a Schedule named **Property In Property Value**

#### Create the Job

4. Create a **File Copy Job** that copies **ACH_A.txt** into the directory using the Global Property for the full destination path.
  * **Job Type:** ```Windows```
  * **Job Sub-Type:** ```Command: File Copy```
  * **Primary Machine:** ```SMATraining```
  * **User ID:** ```SMATRAINING\SMAUSER```
  * **Source:** ```C:\Expressions\ACH_A.txt```
  * **Destination:** ```[[=Expr([[PATH_PROPERTY]])]]\ACH_A.txt```
  * **Frequency:** ```MON-FRI-N```


#### Build the Schedule

5. Build and run the schedule for today's date.

:::note

Verify that the file was copied into the correct directory.

![](../static/imgadvanced/ExpressEx5Solution.png)

:::