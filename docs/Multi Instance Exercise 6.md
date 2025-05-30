---
sidebar_label: 'Multi Instance Exercise 6'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 6

## Exercise 6: Create a Multi-Instance Job

### Objective

To create a Multi Instance Job

### Summary

Create a multi instance job called, **Copy Logs**, with eight property sets containing a property called **FILENAME** with a unquie value in each set. Then have multiple version of this job be built during the build of the Schedule. then validate that the files were copied with a new name consisting of the date, time, and original file name.

z cx### Instructions

#### Create Resource

1. Create a **Resource** called ```OpConLogs``` with a **Max Value** of ```1```.

#### Create Managed System Properties

2. Create a new version of $SCHEDULE DATE
  * **NAME:** $SCHEDULE DATEyyyymmdd
  * **Value:** yyyymmdd
3. Create a new version of $TIME
  * **NAME:** $TIMEhhmm
  * **Value:** hhmm

#### Create the Schedule and Resource

4. Create a Schedule named **Multi Instance Jobs**.
5. Add an Instance Definition with the **Name**, ```OpConLogPath```, with a **Value** of ```C:\ProgramData\OpConxps\SAM\Log```.
6. Add a second Property with the **Name**, ```DestinationLogPath```, with a **Value** of ```C:\Multi-Instance\IT\OpConLogs```.

#### Create the Multi Instance Job

7. Create a Windows job with the **Allow Multi-Instance** checkbox **checked** with the following parameters:
* **Name:** ```Copy SubType OpCon Logs```
* **Job Type:** ```Windows```
* **Job Sub-Type:** ```Command: File Copy```
* **Primary Machine:** ```SMATraining```
* **User ID:** ```SMATRAINING\SMAUSER```
* **Source:** ```C:\ProgramData\OpConxps\SAM\Log\[[JI.FILENAME]]```
  * Use the Schedule Instance Property for the Path: ```[[SI.OpConLogPath]]\[[JI.FILENAME]]```
* **Destination:** ```C:\Multi-Instance\IT\OpConLogs\[[$SCHEDULE DATEyyyymmdd]]_[[$TIMEhhmm]]_[[JI.FILENAME]]```
  * Use the Schedule Instance Property for the Path: ```[[SI.DestinationLogPath]]\[[$SCHEDULE DATEyyyymmdd]]_[[$TIMEhhmm]]_[[JI.FILENAME]]``` 
* **Frequency:** Example-Mon-Sun-O
* **Instance Definitions:** (each its own Property Set for a total of 8)
  * ```FILENAME=Critical.log```
  * ```FILENAME=SAM.log```
  * ```FILENAME=SMANetcom.log```
  * ```FILENAME=SMANetcomTrace.log```
  * ```FILENAME=SMANotifyHandler.log```
  * ```FILENAME=SMAOpConRestApi.log```
  * ```FILENAME=SMAStartTimeCalculator.log```
  * ```FILENAME=SMARequestRouter.log```
* **Resource Dependency** to the **OpConLogs** Resource with a **Value** of ```1```.

#### Build the Schedule

8. Build the Schedule for today’s date and verify the results.
* There should be **8 copies** of this Job but only **one** should run at a time.
9. The logs should be copied to the destination directory with the current date and time stamp appended to the front of the file name: ```C:\Multi-Instance\IT\OpConLogs\```  

:::note

Some Jobs will likely fail with an error code 4. This is because we are copying active file and xcopy compares the source and destination files at the end of the copy.

![](../static/imgadvanced/MIEx6Solution.png)

:::


## Enterprise Manager

<details>

1.	Create a Schedule named MULTI-INSTANCE JOBS.
2.	Create an OpCon **Resource** called OpConLogs with a **Max Value** of ```1```.
3.	Create a Multi-Instance Job:
* **Name:** COPY LOGS
* **Job Type:** ```Windows```
* **Job Sub-Type:** ```Command: File Copy```
* **Primary Machine:** ```SMATraining```
* **User ID:** ```SMATRAINING\SMAUSER```
* **Source:**
```C:\ProgramData\OpConxps\SAM\Log\[[JI.FILENAME]]```
* Create a Machine Instance Property for the Path:  
```[[MI.OpConLogPath]]\[[JI.FILENAME]]```

* **Destination:**  
```C:\Multi-Instance\IT\OpConLogs\[[$SCHEDULE DATEyyyymmdd]][[$TIMEhhmmss]]_[[JI.FILENAME]]```
* Create a Machine Instance Property for the Path:
```[[MI.DestinationLogPath]]\[[$SCHEDULE DATEyyyymmdd]][[$TIMEhhmmss]]_[[JI.FILENAME]]``` 

* Verify the ```$SCHEDULE DATE``` and ```$TIME``` system properties exist.
* **Frequency:** Mon-Fri-N
* **Instance Definitions:** (create these the same as with Schedule Instance Properties). Create a new **Property Set** for each Instance.

```FILENAME=Critical.log```

```FILENAME=SAM.log```

```FILENAME=SMANetcom.log```

```FILENAME=SMANetcomTrace.log```

```FILENAME=SMANotifyHandler.log```

```FILENAME=SMAOpConRestApi.log```

```FILENAME=SMAStartTimeCalculator.log```

```FILENAME=SMARequestRouter.log```

* **Resource Dependency:** **Requires All** of the OpConLogs Resource
4.	Build the Schedule for today’s date and verify the results.
* There should be **8 copies** of this Job but only **one** should run at a time.
5.	The logs should be copied to the destination directory with the current date and time stamp appended to the front of the file name:

```C:\Multi-Instance\IT\OpConLogs\```  

:::info NOTE

Some Jobs will likely fail with an error code 4. This is because we are copying active file and xcopy compares the source and destination files at the end of the copy.

:::

</details>