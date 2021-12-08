---
sidebar_label: 'Multi Instance Exercise 6'
hide_title: 'false'
---

## Exercise 6 - Multi Instance Job

1.	Create a Schedule named MULTI-INSTANCE JOBS.
2.	Create an OpCon **Resource** called OpConLogs with a **Max Value** of ```1```.
3.	Create a Multi-Instance Job:
* **Name**: COPY LOGS
* **Job Type**: ```Windows```
* **Job Sub-Type**: ```Command: File Copy```
* **Primary Machine**: ```SMATraining```
* **User ID**: ```SMATRAINING\SMAUSER```
* **Source**:
```C:\ProgramData\OpConxps\SAM\Log\[[JI.FILENAME]]```

* Create a Machine Instance Property for the Path:  
```[[MI.OpConLogPath]]\[[JI.FILENAME]]```
* **Destination**:  
```C:\Multi-Instance\IT\OpConLogs\[[$SCHEDULE DATEyyyymmdd]][[$TIMEhhmmss]]_[[JI.FILENAME]]```
 * Create a Machine Instance Property for the path.  
* Verify the ```$SCHEDULE DATE``` and ```$TIME``` system properties exist.
* **Frequency**: Mon-Fri-N
* **Instance Definitions**: (create these the same as with Schedule Instance Properties)

```FILENAME=Critical.log```

```FILENAME=SAM.log```

```FILENAME=SMANetcom.log```

```FILENAME=SMANetcomTrace.log```

```FILENAME=SMANotifyHandler.log```

```FILENAME=SMAOpConRestApi.log```

```FILENAME=SMAStartTimeCalculator.log```

```FILENAME=SMARequestRouter.log```

* **Resource Dependency**: **Requires All** of the OpConLogs Resource
4.	Build the Schedule for today’s date and verify the results.
* There should be **8 copies** of this Job but only **one** should run at a time.
5.	The logs should be copied to the destination directory with the current date and time stamp appended to the front of the file name:

```C:\Multi-Instance\IT\OpConLogs\```  

* NOTE: Some Jobs will likely fail with an error code 4. This is because we are copying active file and xcopy compares the source and destination files at the end of the copy.