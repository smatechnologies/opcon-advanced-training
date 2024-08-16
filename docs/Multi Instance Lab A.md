---
sidebar_label: 'Multi Instance Lab A'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### LAB A

Congo Online Retail Inc. needs to run the exact same processes at all major United States warehouses every night at 8 pm.

The only differences in the processes between each of the warehouses are the Warehouse ID and Location to drop the report.

The Schedule needs to have the city the warehouse is located within the Schedule Name.

A list of the major United States warehouses along with their ID and report path is listed below:

* Southeast Warehouse:
    * **Location**: Atlanta
    * **ID**: ```4```
    * **PATH**: ```C:\Warehouses\Atlanta```

* Northeast Warehouse:
    * Location: NewYork
    * ID: ```11```
    * PATH: ```C:\Warehouses\NewYork```

* Midwest Warehouse:
    * Location: Chicago
    * ID: ```21```
    * PATH: ```C:\Warehouses\Chicago```

* Texas Warehouse:
    * Location: Houston
    * ID: ```28```
    * PATH: ```C:\Warehouses\Houston```
 
* Southwest Warehouse:
    * Location: LosAngeles
    * ID: ```31```
    * PATH: ```C:\Warehouses\LosAngeles```
	
* Northwest Warehouse
    * Location: Seattle
    * ID: ```42```
    * PATH: ```C:\Warehouses\Seattle```

Create an Embedded script using the Command Shell type with the following text:

```
rem %1 is the warehouse ID used for this job.
rem %2 is the location the report needs to be placed in.
rem %3 is the time of day the report was run in hhmm format.

Echo "All information is posted for warehouse %1.">%2\WarehouseReportFor%1_%3.txt

```

Name the Script WarehouseReport. Create three Jobs in the Schedule:

* 1.	**Command Line**:  
    ```Timeout /t [[SI.ID]]```
* 2.	**Embedded Script**:  
    ```[[SI.ID]] [[SI.PATH]] [[$TIMEhhmm]]```  
* 3.	**Null Job**:  
    Send an email as ```smauser@congo.local``` once this Job has 
completed stating that the Schedule has completed for the specific City warehouse.

:::info NOTE

Be sure that the Global property ```[[$TIMEhhmm]]``` exists. If it does not, create it before building the job.

:::

### Enterprise Manager

<details>

Congo Online Retail Inc. needs to run the exact same processes at all major United States warehouses every night at 8 pm.

The only differences in the processes between each of the warehouses are the Warehouse ID and Location to drop the report.

The Schedule needs to have the city the warehouse is located within the Schedule Name.

A list of the major United States warehouses along with their ID and report path is listed below:

* Southeast Warehouse:
    * **Location**: Atlanta
    * **ID**: ```4```
    * **PATH**: ```C:\Warehouses\Atlanta```

* Northeast Warehouse:
    * Location: NewYork
    * ID: ```11```
    * PATH: ```C:\Warehouses\NewYork```

* Midwest Warehouse:
    * Location: Chicago
    * ID: ```21```
    * PATH: ```C:\Warehouses\Chicago```

* Texas Warehouse:
    * Location: Houston
    * ID: ```28```
    * PATH: ```C:\Warehouses\Houston```
 
* Southwest Warehouse:
    * Location: LosAngeles
    * ID: ```31```
    * PATH: ```C:\Warehouses\LosAngeles```
	
* Northwest Warehouse
    * Location: Seattle
    * ID: ```42```
    * PATH: ```C:\Warehouses\Seattle```

Create an Embedded script using the Command Shell type with the following text:

<a href="imgadvanced/WarehouseReportScript.png" target="_blank"><img src="imgadvanced/WarehouseReportScript.png" width="300"></img></a>   

Name the Script WarehouseReport. Create three Jobs in the Schedule:

* 1.	**Command Line**:  
    ```Timeout /t [[SI.ID]]```
* 2.	**Embedded Script**:  
    ```[[SI.ID]] [[SI.PATH]] [[$TIMEhhmm]]```  
* 3.	**Null Job**:  
    Send an email as ```smauser@congo.local``` once this Job has 
completed stating that the Schedule has completed for the specific City warehouse.

:::info NOTE

Be sure that the Global property ```[[$TIMEhhmm]]``` exists. If it does not, create it before building the job.

:::

</details>