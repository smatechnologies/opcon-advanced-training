---
sidebar_label: 'Multi Instance Lab C'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Lab C

## Lab C

### Objective

To create use a Named Instances to build 6 unquie schedules and unquie jobs.

### Summary

Using **Named Istances**, create **Multi Instance Schedules** that will modify the jobs within them to match the following Patterns and Exceptions.

**Job Patterns and Exceptions**
  
* Southeast Warehouse
  * **LOCATION:** Atlanta
  * **ID:** ```4```
  * **PATH:** ```C:\Warehouses\Atlanta```
  * **Job Pattern:** ```*```  
  * **Exception:** Switch the **Primary Machine** to the **SMAAdvancedTraining** Machine.  
* Midwest Warehouse
  * **LOCATION:** Chicago
  * **ID:** ```21```
  * **PATH:** ```C:\Warehouses\Chicago```
  * **Job Pattern:** ```*```  
  * **Exception:** Update the **Job Start Offset** to ```01:00``` instead of ```00:00```.
* Texas Warehouse
  * **LOCATION:** Houston
  * **ID:** ```28```
  * **PATH:** ```C:\Warehouses\Houston```
  * **Job Pattern:** ```*```  
  * **Exception:** Update the **Job Start Offset** to ```01:00``` instead of ```00:00```.  
  * **Exception:** Switch the **Primary Machine** to the **SMAAdvancedTraining** Machine.
* Southwest Warehouse
  * **LOCATION:** LosAngeles
  * **ID:** ```31```
  * **PATH:** ```C:\Warehouses\LosAngeles```
  * **Job Pattern:** ```*```  
  * **Exception:** Update the **Job Start Offset** to ```03:00``` instead of ```00:00```.  
* Northeast Warehouse
  * **LOCATION:** NewYork
  * **ID:** ```11```
  * **PATH:** ```C:\Warehouses\NewYork``` 
  * **Job Pattern:** Match the Name given to the Job running the Timeout command.  
  * **Exception:** Change the **Job Build Status** to **To Be Skipped**.
* Northwest Warehouse
  * **LOCATION:** Seattle
  * **ID:** ```42```
  * **PATH:** ```C:\Warehouses\Seattle```
  * **Job Pattern:** ```*```  
  * **Exception:** Update the **Job Start Offset** to ```03:00``` instead of ```00:00```.  
  * **Exception:** Switch the **Primary Machine** to the **SMAAdvancedTraining** Machine.  

### Instructions

* Update the Multi-Instance Schedule, Congo Warehouse Reports, created in **Lab A** to a Named Instance Schedule
* Delete the current **Schedule Instance Properties** before changing the Schedule to use Named Properties. 
* Reapply the **Schedule Instance Properties** to the proper instance. 
* Use all the same **Schedule Instance Properties** and name the Instance with the warehouse location.
* Build the Schedule and verify the following for each Instance of the Schedule:
  * Schedule Names
  * Start Times
  * Primary Machines
  * Build Statuses
  * Batch Users


### Answer

<details>

![](../static/imgadvanced/MILabCSolution2.png)

![](../static/imgadvanced/MILabCSolution1.png)

</details>