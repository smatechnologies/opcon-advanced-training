---
sidebar_label: 'Expressions Exercise 3'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 3
 
## Exercise 3: SubStrings
 
### Objective

To use SubStr to capture a part of the file name.
 
### Summary

Utilizing the SubStr expression to capture a single character in the file name, **ACHAJ010123456789PAIN202001011234.txt**, and use that character to rename the file in a second job.

### Instructions

#### Create the File

1. Create a file in ```C:\Expressions``` called ```ACHAJ010123456789PAIN202001011234.txt```.

#### Create the Property

2. Create a Global Property 
  * **Name:** ```SubStringExample```
  * **Value:** ```ACHAJ010123456789PAIN202001011234.txt```

#### Create the Schedule

3. Create a Schedule named **SubString Schedule**.

#### Create the Job

4. Create a File Copy Job called, **SubStr File Copy**, with the following parameters:
  * **Job Type:** ```Windows```
  * **Job Sub-Type:** ```Command: File Copy```
  * **Primary Machine:** ```SMATraining```
  * **User ID:** ```SMATRAINING\SMAUSER```
  * **Source:** ```C:\Expressions\[[SubStringExample]]```
  * **Destination:** ```C:\Expressions\ACH_[[=SubStr([[SubStringExample]],18,1)]].txt```
  * **Frequency:** ```MON-FRI-N```

#### Build the Schedule

5. Build the Schedule and verify that the proper file was created.

:::note

Verify that the new file was created with the name **ACH_A.txt**

![](../static/imgadvanced/ExpressEx3Solution.png)

:::

#### Manipulate the Property for a Second File

6. Update the source file name and the Global Property to: ```ACHAJ010123456789PZIN202001011234.txt```
7. Rerun the Job and verify that file ```ACH_Z.txt``` is created.

