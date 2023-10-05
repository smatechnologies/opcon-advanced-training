---
sidebar_label: 'Multi Instance Exercise 1'
hide_title: 'false'
---


### Exercise 1 - Create a Multi-Instance Schedule

1. Create a new Schedule called **MY FIRST MULTI-INSTANCE SCHEDULE**.
2. Mark the **Multi-Instance** checkbox in the **Schedule Settings** frame.
3. Click Save.
4. Unlock the Schedule to edit details. 
5. Expand the **Instance Definitions** tab.
6. With **Properties** selected, click the **Add New Property Set** button to add a New Instance Property.
7. Enter ```TIME``` as the **Name**. Enter ```10``` as the **Value**.
8. Click the checkmark to save.
11. Click **Add New Property Set** to add a second Instance Property.
12. Enter ```TIME``` as the New Named Instance.
12. Enter ```TIME``` as the **Name**. Enter ```20``` as the **Value**.
13. Click the checkmark to save. 
14. Click the Schedule **Save** button.

15. Create 3 Jobs within the Schedule with the following attributes:
* **Command Line**: ```"C:\Multi-Instance\Accounting\Sleep.cmd" [[SI.TIME]]```
* **Frequency**:  
    MON-FRI-N  
* Create a **Job Dependency** Chain setting the Jobs to run one at a time.
16. Build your Schedule and check the results. The two Schedules below should be built:
    * **MY FIRST MULTI-INSTANCE SCHEDULE_10**
    * **MY FIRST MULTI-INSTANCE SCHEDULE_20**


### Enterprise Manager

<details>

1. Create a new Schedule called **MY FIRST MULTI-INSTANCE SCHEDULE**.
2. Mark the **Multi-Instance** checkbox in the **Schedule Properties** frame.
3. Click the **Instance Definitions** tab.
4. Click in the **Define Property Values** textbox.
5. Type ```TIME=10``` and click **Add**.
6. Update ```TIME=10``` to ```TIME=20``` and click **Add**. 
* This will create a 2nd Instance Definition for the Property ```TIME```.
7. Click the **Save** button on the Schedule Master toolbar.
8. Move to the Job Master and create 3 Jobs with the following attributes:
* **Command Line**: ```"C:\Multi-Instance\Accounting\Sleep.cmd" [[SI.TIME]]```
* **Frequency**:  
    MON-FRI-N  
* Create a **Job Dependency** Chain setting the Jobs to run one at a time.
9. Build your Schedule and check the results. The two Schedules below should be built:
    * **MY FIRST MULTI-INSTANCE SCHEDULE_10**
    * **MY FIRST MULTI-INSTANCE SCHEDULE_20**

</details>