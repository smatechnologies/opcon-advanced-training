---
sidebar_label: 'Expressions Exercise 3'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 3 - Property Expressions - SubStrings

1.	Create a Global Property named ```[[SubStringExample]]``` with a value of: ```ACHAJ010123456789AIN202001011234.txt```
2.	Create a Schedule named **Substring Schedule**.
3.	Create a file somewhere on the OpCon Training Machine with the name stored in the Global Property.
4.	Create a Copy Job like the Jobs used in the Upper/Lower exercise that will be named after the 1st letter after the 1st string of digits in the file name. 
* The copied file name will convert to ```“ACH_A.txt”``` with ```A``` being the value pulled by the SubString.
5.	Build the Schedule and verify that the proper file was created.
6.	Update the source file name and the Global Property to: ```ACHAJ010123456789ZIN202001011234.txt```
7.	Rerun the Job and verify that file ```ACH_Z.txt``` is created.

