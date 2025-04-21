---
sidebar_label: 'Multi Instance Lab A'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Lab A

## Lab A

### Objective

To create a Multi Instance Schedule that will trigger 6 individual scheduls to be built.

### Summary

Congo Online Retail Inc. needs to run the exact same processes at all major United States warehouses every night at 8 pm. The only differences in the processes between each of the warehouses are the Warehouse ID and LOCATION to drop the report. The Schedule, **Congo Warehouse Report**, needs to have the city the warehouse is located within the Schedule Name.

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

* Create an Embedded script called, **WarehouseReport**, using the **Command Shell type** with the following text:

```
rem %1 is the warehouse ID used for this job.
rem %2 is the LOCATION the report needs to be placed in.
rem %3 is the time of day the report was run in hhmm format.

Echo "All information is posted for warehouse %1." > %2\WarehouseReportFor%1_%3.txt
```

* Create three Jobs in the Schedule:
  * Job 1 **Command Line:** ```Timeout /t [[SI.ID]]```
  * Job 2 **Embedded Script Arguments:** ```[[SI.ID]] [[SI.PATH]] [[$TIMEhhmm]]```  
  * Job 3 **Null Job:** Trigger an email via an event to ```smauser@congo.local``` once this Job has completed stating that the Schedule has completed for the specific City warehouse.

:::info NOTE

Be sure that the Global property ```[[$TIMEhhmm]]``` exists. If it does not, create it before building the job.

:::

### Answer

<details>

![](../static/imgadvanced/MILabASolution.png)

</details>