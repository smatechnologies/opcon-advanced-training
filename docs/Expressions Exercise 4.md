---
sidebar_label: 'Expressions Exercise 4'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 4
 
## Exercise 4: Length
 
### Objective

To use Length to change the extention of a file name.
 
### Summary

Utilizing the Length in combination with SubStr, modify the extention of the files that are specified. These files will be changed from ```.csv``` to ```.xlsx```.

### Instructions

#### Create the Schedule

1. Create a Multi-Instance Schedule called **Length Schedule**
2. Define the following Schedule Instance Properties:
* FILENAME = AccountGaby.csv
* FILENAME = AccountRaul.csv
* FILENAME = AccountMike.csv
* FILENAME = AccountPaulius.csv
* FILENAME = AccountKelly.csv
* FILENAME = AccountRyan.csv
* FILENAME = AccountMatt.csv
* FILENAME = AccountDavid.csv

#### Create the Job

2. Create a **Null Job** that will send a Notification that includes the File Name and Length when the job Finishes OK.
* Email: smauser@congo.local
* Example: _[[SI.FILENAME]] is [[=Length([[SI.FILENAME]])]] characters in length._ 
3. Create a **File Copy Job** that will **rename** the file, keeping its root name but **replacing the extension** with ```xlsx```.
* The CSV files are located in ```C:\Accounting```
* **Source:** ```“C:\Accounting\[[SI.FILENAME]]”```
* **Destination:** ```C:\Accounting\[[=SubStr([[SI.FILENAME]],0,Length([[SI.FILENAME]])-4)]].xlsx```

#### Build the Schedule

4. Build the schedule for today's date.

:::note

Verify that the files were copied and have the correct extention on them.

![](../static/imgadvanced/ExpressEx4Solution.png)

:::