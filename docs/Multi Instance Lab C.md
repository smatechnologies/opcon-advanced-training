---
sidebar_label: 'Multi Instance Lab C'
hide_title: 'false'
---

### LAB C

Update the Multi-Instance Schedule used in **LAB 1A** to use Named Instances. 

Delete the current **Schedule Instance Property** before you can update the Schedule to use Named Properties. 

Reapply the **Schedule Instance Properties** to the proper instance. 
Use all the same **Schedule Instance Properties** and name the Instance with the warehouse location.

Job Patterns and Exceptions:
  
* **Atlanta**  
    * **Job Pattern**: ```*```  
     * **Exception**: Switch the Primary Machine to the SMAAdvancedTraining Machine.  

* **New York**  
    * **Job Pattern**: Match the Name given to the Job running the Timeout command.  
    * **Exception**: Change the Job Build Status to “To Be Skipped”.

* **Chicago**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```01:00``` instead of ```00:00```.

* **Houston**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```01:00``` instead of ```00:00```.  
    * **Exception**: Switch the Primary Machine to the SMAAdvancedTraining Machine.

* **Los Angeles**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```03:00``` instead of ```00:00```.  
    * **Exception**: Update the Windows User ID from SMATRAINING\SMAUSER to Use Service Account.

* **Seattle**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```03:00``` instead of ```00:00```.  
    * **Exception**: Switch the Primary Machine to the SMAAdvancedTraining Machine.  

Build the Schedule and verify all Schedule Names, Start Times, Primary Machines, Build Statuses, and Batch Users for each Instance of the Schedule.


### Enterprise Manager

<details>

Update the Multi-Instance Schedule used in **LAB 1A** to use Named Instances. 

Delete the current **Schedule Instance Property** before you can update the Schedule to use Named Properties. 

Reapply the **Schedule Instance Properties** to the proper instance. 
Use all the same **Schedule Instance Properties** and name the Instance with the warehouse location.

Job Patterns and Exceptions:
  
* **Atlanta**  
    * **Job Pattern**: ```*```  
     * **Exception**: Switch the Primary Machine to the SMAAdvancedTraining Machine.  

* **New York**  
    * **Job Pattern**: Match the Name given to the Job running the Timeout command.  
    * **Exception**: Change the Job Build Status to “To Be Skipped”.

* **Chicago**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```01:00``` instead of ```00:00```.

* **Houston**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```01:00``` instead of ```00:00```.  
    * **Exception**: Switch the Primary Machine to the SMAAdvancedTraining Machine.

* **Los Angeles**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```03:00``` instead of ```00:00```.  
    * **Exception**: Update the Windows User ID from SMATRAINING\SMAUSER to Use Service Account.

* **Seattle**  
    * **Job Pattern**: ```*```  
    * **Exception**: Update the Job Start Offset to ```03:00``` instead of ```00:00```.  
    * **Exception**: Switch the Primary Machine to the SMAAdvancedTraining Machine.  

Build the Schedule and verify all Schedule Names, Start Times, Primary Machines, Build Statuses, and Batch Users for each Instance of the Schedule.

</details>