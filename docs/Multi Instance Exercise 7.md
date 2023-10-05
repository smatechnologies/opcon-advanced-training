---
sidebar_label: 'Multi Instance Exercise 7'
hide_title: 'false'
---

### Exercise 7 - Multiple Multi Instance Jobs

1.	Create a Schedule named **MULTI-INSTANCE JOB LIMITATION**.
2.	Create 3 Multi-Instance Jobs (First Job below)
    * **Name**: FILE COPY
    * **Job Type**: ```Windows```
    * **Job Sub-Type**: ```Command: File Copy```
    * **Primary Machine**: ```SMATraining```
    * **User ID**: ```SMATRAINING\SMAUSER```
    * **Source**:
```
C:\Multi-Instance\IT\test.txt
```
* **Destination**:
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
* **Frequency**: Mon-Fri-N
* **Job Instance Definition**:
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```
3.	(Second Job Below)
    * **Name**: FILE MOVE
    * **Job Type**: ```Windows```
    * **Job Sub-Type**: ```Command: File Move```
    * **Primary Machine**: ```SMATraining```
    * **User ID**: ```SMATRAINING\SMAUSER```
    * **Source**:  
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
**Destination**:  
```
C:\Multi-Instance\IT\Archive\[[$SCHEDULE DATEyyyymmdd]]_[[JI.CITY]].txt
```
* **Frequency**: Mon-Fri-N
* **Job Instance Definition**:
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

    **Job Dependency**: Requires the **FILE COPY** Job

4.	(Third Job Below)
    * **Name**: FILE DELETE
    * **Job Type**: ```Windows```
    * **Job Sub-Type**: ```Command: File Delete```
    * **Primary Machine**: ```SMATraining```
    * **User ID**: ```SMATRAINING\SMAUSER```
    * **File To Delete**:  
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
* **Frequency**: Mon-Fri-N
* **Job Instance Definition**:
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

* **Job Dependency**: Requires the **FILE MOVE** Job

5.	Build the Schedule **On Hold**.
6.	The **PERT** screen should show something like the following:

![](../static/imgadvanced/Job_Limitation_PERT_SM.png)


### Enterprise Manager

<details>

1.	Create a Schedule named **MULTI-INSTANCE JOB LIMITATION**.
2.	Create 3 Multi-Instance Jobs (First Job below)
    * **Name**: FILE COPY
    * **Job Type**: ```Windows```
    * **Job Sub-Type**: ```Command: File Copy```
    * **Primary Machine**: ```SMATraining```
    * **User ID**: ```SMATRAINING\SMAUSER```
    * **Source**:
```
C:\Multi-Instance\IT\test.txt
```
* **Destination**:
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
* **Frequency**: Mon-Fri-N
* **Job Instance Definition**:
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```
3.	(Second Job Below)
    * **Name**: FILE MOVE
    * **Job Type**: ```Windows```
    * **Job Sub-Type**: ```Command: File Move```
    * **Primary Machine**: ```SMATraining```
    * **User ID**: ```SMATRAINING\SMAUSER```
    * **Source**:  
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
**Destination**:  
```
C:\Multi-Instance\IT\Archive\[[$SCHEDULE DATEyyyymmdd]]_[[JI.CITY]].txt
```
* **Frequency**: Mon-Fri-N
* **Job Instance Definition**:
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

    **Job Dependency**: Requires the **FILE COPY** Job

4.	(Third Job Below)
    * **Name**: FILE DELETE
    * **Job Type**: ```Windows```
    * **Job Sub-Type**: ```Command: File Delete```
    * **Primary Machine**: ```SMATraining```
    * **User ID**: ```SMATRAINING\SMAUSER```
    * **File To Delete**:  
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
* **Frequency**: Mon-Fri-N
* **Job Instance Definition**:
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

* **Job Dependency**: Requires the **FILE MOVE** Job

5.	Build the Schedule **On Hold**.
6.	The **PERT** screen should show something like the following:

![](../static/imgadvanced/MultiJobScreen.png)

</details>