---
sidebar_label: 'Expressions Exercise 1'
hide_title: 'false'
---

## Exercise 1 - Property Expressions - ToUpper and ToLower

1. Create the folder ```C:\PropertyExpressions``` on the OpCon Training Machine.
2. Create a blank text file named ```PropertyExpressions.txt```
3. Create a Global Property for ```[[$SCHEDULE DATE mmm]]```
* Name: ```$SCHEDULE DATE mmm```
* Value: ```mmm```
4. Create a Schedule called **Property Expressions**.
5. Create a Job named **File Copy** with the following parameters:

* **Job Type**: ```Windows```
* **Job Sub-Type**: ```Command: File Copy```
* **Primary Machine**: ```SMATraining```
* **User ID**: ```Use Service Account```
* **Source**:  
```
C:\PropertyExpressions\PropertyExpressions.txt
```
* **Destination**:  
```
C:\PropertyExpressions\PropertyExpressions_[[=ToUpper([[$SCHEDULE DATE mmm]])]].txt
```
* **Frequency**: ```MON-FRI-N```

6. Copy the Job changing the following two things:

* **Source**:  
```
C:\PropertyExpressions\PropertyExpressions_[[=ToUpper([[$SCHEDULE DATE mmm]])]].txt
```

* **Destination**:  
```
C:\PropertyExpressions\PropertyExpressions2_[[=ToLower([[$SCHEDULE DATE mmm]])]].txt
```

* Make the copied Job dependent on the first Job.

7. Build the Schedule for today.
8. Verify that the Job Finished **OK** (release the Schedule if necessary).
9. Verify that the two files were created with the proper names.