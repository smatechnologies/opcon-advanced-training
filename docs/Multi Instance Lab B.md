---
sidebar_label: 'Multi Instance Lab B'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Lab B

## Lab B

### Objective

To create use a Multi Instance Job that will trigger 12 jobs to be built and have some limitations

### Summary

Congo Online Retail Inc. needs to run a 3-step processes, called **Congo Warehouse Batch Reports**, that runs a batch job and generates reports for all major United States warehouses. Employees need to be notified for that each city's report is available. The only differences between each of the warehouses are the **Warehouse ID** and **LOCATION** to drop the report.

A list of the major United States warehouses along with their ID and report path is listed below:

* Southeast Warehouse
  * **LOCATION:** Atlanta
  * **ID:** ```4```
  * **PATH:** ```C:\Warehouses\Atlanta```
* Midwest Warehouse
  * **LOCATION:** Chicago
  * **ID:** ```21```
  * **PATH:** ```C:\Warehouses\Chicago```
* Texas Warehouse
  * **LOCATION:** Houston
  * **ID:** ```28```
  * **PATH:** ```C:\Warehouses\Houston```
* Southwest Warehouse
  * **LOCATION:** LosAngeles
  * **ID:** ```31```
  * **PATH:** ```C:\Warehouses\LosAngeles```
* Northeast Warehouse
  * **LOCATION:** NewYork
  * **ID:** ```11```
  * **PATH:** ```C:\Warehouses\NewYork```
* Northwest Warehouse
  * **LOCATION:** Seattle
  * **ID:** ```42```
  * **PATH:** ```C:\Warehouses\Seattle```

### Instructions

* Create a scheudle called **Congo Warehouse Batch Reports**
* Create three Jobs in the Schedule:
  * Job 1: **Nightly Batch**
    * Create a nightly batch Job closing out the business day for all of Congo Online Retail.
      * Use the same ```Timeout /t 15```
  * Job 2: **ES WarehouseReport**
    * Create a follow-up report for each of the major U.S. warehouses containing the individual warehouses’ production.  
      * This is a Multi-Instance Job.  
      * Use the same Embedded Scripts, **WarehouseReport**, job from the previous Lab.
      * Use the arguments listed above, ```[[JI.ID]] [[JI.PATH]] [[$TIMEhhmm]]```
  * Job 3: **NULL Email**
    * Create a Null Job that will trigger an email for each city notifying ```smauser@congo.local``` that the report for that city is completed.


### Answer

<details>

![](../static/imgadvanced/MILabBSolution.png)

</details>