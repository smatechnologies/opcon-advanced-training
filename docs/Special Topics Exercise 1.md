---
sidebar_label: 'Special Topics Exercise 1'
hide_title: 'false'
---

## Exercise 1 - Advance Failure Criteria

1.	Create a Schedule named **ADVANCED FAILURE**.
2.	Create a Job that runs ```genericp.exe``` every day.
* ```C:\Program Files\OpConxps\MSLSAM\genericp.exe –t 5 –e 500```
3.	Create a Null Job that has a Job Dependency on the genericp.exe Job and runs every day.
4.	Set the ```genericp.exe``` Job to Finish OK if it completes with a ```0``` or ```500```.
5.	Create an Exit Code-based event for the ```genericp.exe``` Job to Skip the Null Job if it exits with a ```500```.
6.	Build the Schedule and verify that the 1st Job exited with a ```500``` but was listed as Finished OK.
7.	Verify that the 2nd Job was skipped.