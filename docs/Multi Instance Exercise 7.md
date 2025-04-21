---
sidebar_label: 'Multi Instance Exercise 7'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 7

## Exercise 7: Multiple Multi Instance Jobs

### Objective

To create a multiple Multi Instanace Jobs

### Summary

Create a new scheudle called, **Multi Instance Job Limitation**, with two property sets containing a property called **TIME** with a unquie value in each set. Then create a job to call this property. Then have multiple version of this schedule viewable in the Process screen.

### Instructions

#### Create the Schedule

1. Create a Schedule named **Multi Instance Job Limitation**.

#### Create the Multi Instance Jobs

2. Create a **Windows Job** using the **Command:File Copy** Sub-type
  * **Source:** ```C:\Multi-Instance\IT\test.txt```
  * **Destination:** ```C:\Multi-Instance\IT\[[JI.CITY]].txt```
  * **Frequency:** Mon-Fri-N
  * **Job Instance Definition:**
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```
3. Create a **Windows Job** using the **Command:File Move** Sub-type
  * **Source:** ```C:\Multi-Instance\IT\[[JI.CITY]].txt```
  * **Destination:**  ```C:\Multi-Instance\IT\Archive\[[$SCHEDULE DATEyyyymmdd]]_[[JI.CITY]].txt```
  * **Frequency:** Mon-Fri-N
  * **Job Instance Definition:**
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```
4. Create a **Windows Job** using the **Command:File Delete** Sub-type
  * **File To Delete:** ```C:\Multi-Instance\IT\[[JI.CITY]].txt```
  * **Frequency:** Mon-Fri-N
  * **Job Instance Definition:**
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

#### Create Dependencies

5. Create Job Dependencies so that the 3 jobs run in the following order:
  * File Copy &rarr; File Move &rarr; File Delete

#### Build the Schedule

6.	Build the Schedule **On Hold**.
7.	The **PERT** screen should show something like the following:

![](../static/imgadvanced/Job_Limitation_PERT_SM.png)


## Enterprise Manager

<details>

1.	Create a Schedule named ****Multi Instance Job Limitation**.
2.	Create 3 Multi-Instance Jobs (First Job below)
    * **Name:** FILE COPY
    * **Job Type:** ```Windows```
    * **Job Sub-Type:** ```Command: File Copy```
    * **Primary Machine:** ```SMATraining```
    * **User ID:** ```SMATRAINING\SMAUSER```
    * **Source:**
```
C:\Multi-Instance\IT\test.txt
```
* **Destination:**
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
* **Frequency:** Mon-Fri-N
* **Job Instance Definition:**
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```
3.	(Second Job Below)
    * **Name:** FILE MOVE
    * **Job Type:** ```Windows```
    * **Job Sub-Type:** ```Command: File Move```
    * **Primary Machine:** ```SMATraining```
    * **User ID:** ```SMATRAINING\SMAUSER```
    * **Source:**  
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
**Destination:**  
```
C:\Multi-Instance\IT\Archive\[[$SCHEDULE DATEyyyymmdd]]_[[JI.CITY]].txt
```
* **Frequency:** Mon-Fri-N
* **Job Instance Definition:**
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

    **Job Dependency:** Requires the **FILE COPY** Job

4.	(Third Job Below)
    * **Name:** FILE DELETE
    * **Job Type:** ```Windows```
    * **Job Sub-Type:** ```Command: File Delete```
    * **Primary Machine:** ```SMATraining```
    * **User ID:** ```SMATRAINING\SMAUSER```
    * **File To Delete:**  
```
C:\Multi-Instance\IT\[[JI.CITY]].txt
```
* **Frequency:** Mon-Fri-N
* **Job Instance Definition:**
    * ```CITY=HOUSTON```
    * ```CITY=AUSTIN```
    * ```CITY=DALLAS```

* **Job Dependency:** Requires the **FILE MOVE** Job

5.	Build the Schedule **On Hold**.
6.	The **PERT** screen should show something like the following:

![](../static/imgadvanced/MultiJobScreen.png)

</details>