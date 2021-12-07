---
sidebar_label: 'Multi Instance Exercise 1'
hide_title: 'false'
---

## Exercise 1 - Create a Multi-Instance Schedule

1. Create a new Schedule called **MY FIRST MULTI-INSTANCE SCHEDULE**.
2. Mark the **Multi-Instance** checkbox in the **Schedule Properties** frame.
3. Click the **Instance Definitions** tab.
4. Click in the **Define Property Values** textbox.
5. Type ```TIME=10``` and click **Add**.
6. Update ```TIME=10``` to ```TIME=20``` and click **Add**. 
* This will create a 2nd Instance Definition for the Property ```TIME```.
7. Click the **Save** button on the Schedule Master toolbar.
8. Move to the Job Master and create 3 Jobs with the following attributes:
* **Command Line**: ```"C:\Multi_Instance\Accounting\Sleep.cmd" [[SI.TIME]]```
* **Frequency**:  
    MON-FRI-N  
* Create a **Job Dependency** Chain setting the Jobs to run one at a time.
9. Build your Schedule and check the results. The two Schedules below should be built:
    * **MY FIRST MULTI-INSTANCE SCHEDULE_10**
    * **MY FIRST MULTI-INSTANCE SCHEDULE_20**