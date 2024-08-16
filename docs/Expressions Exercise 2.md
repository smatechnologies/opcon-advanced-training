---
sidebar_label: 'Expressions Exercise 2'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 2 - Property Expressions: Arithmetic


1.	In the ```C:\PropertyExpressions``` folder create the following files:

```
PropertyExpressionsAddition.txt
PropertyExpressionsSubtraction.txt
PropertyExpressionsMultiplication.txt
PropertyExpressionsDivision.txt
PropertyExpressionsArithmetic.txt
```

2.	Verify that the following Global Properties exist.

* ```[[$SCHEDULE DATE mm]]```
* ```[[$TIME hh]]```
* ```[[$SCHEDULE DATE dd]]```
* ```[[$TIME mm]]```

3.	Add five Jobs to the PROPERTY EXPRESSIONS Schedule to do the following:

* Add
* Subtract
* Multiply
* Divide
* Add Then Divide


4.	Use the following parameters for the Job named ADD.

* **Job Type**: ```Windows```
* **Job Sub-Type**: ```Command: File Move```
* **Primary Machine**: ```SMATraining```
* **User ID**: ```Use Service Account```
* **Source**: ```C:\PropertyExpressions\PropertyExpressionsAddition.txt```  
* **Destination**: 

    ```
    C:\PropertyExpressions\PropertyExpressionsAddition_[[=ToInt([[$SCHEDULE DATE mm]]) + ToInt([[$TIME hh]])]].txt
    ```

5.	Repeat for each of the remaining four jobs using the following types of equations with at least one Property in the expression:

* Subtracting Values **(PropertyExpressionsSubtraction.txt)**

* Multiplying Values **(PropertyExpressionsMultiplication.txt)**

* Dividing Values **(PropertyExpressionsDivision.txt)**

* Adding Values and then Dividing the total by another value **(PropertyExpressionsArithmetic.txt)**

:::note Note 
Decide what values to use during this exercise
:::

6.	Build the Schedule and make sure all Jobs run successfully and the proper files were created.
