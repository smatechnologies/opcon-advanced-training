---
sidebar_label: 'Expressions Exercise 2'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 2
 
## Exercise 2: Arithmetic
 
### Objective

To use ToInt to manipulate the name of a file with different types of equations.
 
### Summary

Utilizing the ToInt expression to manipulate the name of a file, **PropertyExpressions.txt**, so that it reflects the solution of various equations as part of the name.

### Instructions

#### Create the Files

1. In the **C:\Expressions** folder create the following files:
  * PropertyExpressions_Addition.txt
  * PropertyExpressions_Subtraction.txt
  * PropertyExpressions_Multiplication.txt
  * PropertyExpressions_Division.txt
  * PropertyExpressions_Arithmetic.txt

#### Create Managed System Properties

2. Verify that the following Global Properties exist.
  * $SCHEDULE DATEmm
  * $SCHEDULE DATEdd
  * $TIMEhh
  * $TIMEnn

#### Create the Jobs

3. Create the **Addition Job** in the **Property Expressions** Schedule with the following settings:
  * **Name:** ```Addition Job```
  * **Job Type:** ```Windows```
  * **Job Sub-Type:** ```Command: File Rename```
  * **Primary Machine:** ```SMATraining```
  * **User ID:** ```SMATRAINING\SMAUSER```
  * **Path and Current File Name:** ```C:\Expressions\PropertyExpressions_Addition.txt```  
  * **New File Name:** ```PropertyExpressions_Addition_[[=ToInt([[$SCHEDULE DATEmm]]) + ToInt([[$TIMEhh]])]].txt```
  * **Frequency:** Mon-Fri-O 
4. Copy the **Addition Job** to create the following jobs that point to the corresponding file. Use the Properties created in Step 2 to create a unquie New File Name according the job name.
  * Subtraction Job
    * ```PropertyExpressions_Subtraction.txt```
  * Multiplication Job
    * ```PropertyExpressions_Multiplication.txt```
  * Division Job
    * ```PropertyExpressions_Division.txt```
  * Arithmetic Job
    * ```PropertyExpressions_Arithmetic.txt```

#### Build the Schedule
5. Manually add these jobs to the Schedule for today and make sure all Jobs run successfully and the proper files were created.

:::note

Verify that each file was renamed and now has a numeric value at the end of the file name.

![](../static/imgadvanced/ExpressEx2Solution.png)

:::