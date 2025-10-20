---
sidebar_label: 'Special Topics Exercise 2'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Special Topics Exercise 2

 
## Exercise 2: Job Output Parsing
 
### Objective
 
Use Parsing Criteria to find an error and place the Job in a Failed status.
 
### Summary
 
Create a Windows Job and set Job Parsing Criteria to search output for potential defined errors and set the Job to Failed status if criteria are detected.
 
### Instructions
 
#### Create a DOS script

1.	Create a DOS script with the following text:
  * ```echo “This is an example of Job Output Parsing finding an Error and in the Job Output and place the Job in a Failed status.”```
2. Save this script in ```C:\scripts``` with a ```.bat``` extension.
  * You can name it whatever you want.

#### Create a Schedule

3.	Create a Schedule named **Job Output Parsing**. 

#### Create the Windows Job

4.	Create a Windows Job named after the script you created with the following settings:
  * Command Line: ```"C:\scripts\<Name of your script>.bat``` 
  * 1st Job Output Parsing Search Criteria: 
    * Search Operator = Contains
    * String to Search = Error
    * Exit Code = 901
  * 2nd Job Output Parsing Search Criteria: 
    * Search Operator = Contains
    * String to Search = Failed
    * Exit Code = 900
  * Frequency: Mon-Fri-O

#### Build the Schedule

5.	Built the Job and check the results.

:::note

* Look at the Job Output too see why the job failed with the exit code that it did.

```
************************************* Start Main Job Details *************************************

Job Start Time : 112803
Job Process Name : cmd
Job Process Id : 1564
Getting Job Termination Status for Job JOPSCRIPT        0000003098
Job terminated with Exit Code : 901 ( JobOutputSearch : C:\ProgramData\OpConxps\MSLSAM\JobOutput\Archives\2025_04_17 (Thursday)\0000003098.out, Contains : Error ) 
Job finished at : 112803
Job Standard Out/Error : 

C:\Program Files\OpConxps\MSLSAM>echo "This is an example of Job Output Parsing finding an Error and in the Job Output and place the Job in a Failed status." 
"This is an example of Job Output Parsing finding an Error and in the Job Output and place the Job in a Failed status."

************************************* End Main Job Details *************************************
```