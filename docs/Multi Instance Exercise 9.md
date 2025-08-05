---
sidebar_label: 'Multi Instance Exercise 9'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 9

## Exercise 9: Named Instances

### Objective

To utilize **Named Instances** to have **2 schedules built** with different command lines.

### Summary

Create a multi-instance schedule, **My First Named Instance**, with three machines in it. Create a Windows job called **Machine Groups** that will build an instance of the job to run on each machine in the group.

### Instructions

#### Define a New Machine

1. Open the **Agents** screen from the **Library**.
2. Click the **Add** button.
  * In the **Name** field, enter ``SMAAdvancedTraining``.
  * In the **Machine Type** dropdown, select ```Windows```.
  * Click **Save**
  * In the **General Settings** section:
    * Enter the ```IP Address``` you are using to Remote Desktop to this training server.
    * Change the Socket Number to ```4100```.
  * In the **Communication Settings** section.
    * Change the **JORS Port Number** to ```4110```
  * Click the **Save** button.
3. Close **Operations**.

#### Create the Schedule

4. Create a new Schedule called **MY FIRST NAMED INSTANCE**. 
  * Check the **Multi-Instance** checkbox
  * Click the **Save** button.
5. Enter **Admin Mode**

#### Create the Named Instances

6. Expand the **Instance Definition** tab.
  * Click the **Named Instance** radio button.
  * Click the small green **+** button.
  * Enter **Advanced Training** as the new Instance Name.
  * Click the **check mark** to save the instance name.
  * Repeat the last 3 steps to create a **Basic Training** Instance.

#### Define the Schedule Instance Properties

7. In the **Selected Named Instance** dropdown, select **Advanced Training**
  * Click the large green **+** to add a **Property**.
  * In the **Name** field, enter **DURATION**
  * In the **Value** field, enter ```15```
  * Click the **check mark** to save.
  * Click the large green **+** to add a **Property**.
  * In the **Name** field, enter **PATH**
  * In the **Value** field, enter ```C:\Program Files\OpConxps\MSLSAM\1```
  * Click the **check mark** to save.
8. In the **Selected Named Instance** dropdown, select **Basic Training**
  * Click the large green **+** to add a **Property**.
  * In the **Name** field, enter **DURATION**
  * In the **Value** field, enter ```10```
  * Click the **check mark** to save.
  * Click the large green **+** to add a **Property**.
  * In the **Name** field, enter **PATH**
  * In the **Value** field, enter ```C:\Program Files\OpConxps\MSLSAM```
  * Click the **check mark** to save.

#### Define the Exceptions

9. Select the **Advanced Training** Instance. 
10. Select the **Exceptions** tab.
11. Click the **(+)** to the right of the the Job Pattern dropdown.
  * In the **Job Pattern** field, enter ```*```
  * Click the **check mark** to save.
12. Under **Job Exceptions**
  * Click the **+** button
  * In the **Job Exception** dropdown, select **Primary Machine**
  * In the **To Replace** field, enter ```SMATraining```.
  * In the **Replace With** field, enter ```SMAAdvancedTraining```.
  * Click the **Check mark** to save.
13. Click the **(+)** to the right of the the Job Pattern dropdown.
  * In the **Job Pattern** field, enter ```Upload*```
  * Click the **check mark** to save.
14. Under **Job Exceptions**, 
  * Click the **+** button
  * In the **Job Exception** dropdown, select **Job Build Status**
  * In the **Replace With** dropdown, select **To Be Skipped**.
  * Click the **Check mark** to save.
15. Click **Save**

#### Create the Jobs

16. Create 4 Windows Jobs using the ```Genericp.exe```
  * **Job Names and Run Order:**
    * Run Report
    * Transfer Report to Network
    * Upload Report to Vendor
    * Archive Report
  * Select **SMATraining** as the **Primary Machine**.  
  * **Command Line** for all 4 Jobs:   ```"[[SI.PATH]]\genericp.exe" -t [[SI.DURATION]]```

#### Build the Schedule

17. Build the Schedule.
18. Verify that both Instances are built.


:::note

* Verify that the **Advanced Training** Instance is running on the **SMAAdvancedTraining** Machine while the **Basic Instance** is running on the **SMATraining** Machine. 
* Verify that the **Upload Job** in the **Advanced Training Instance**  was set to be **Skipped**.

![](../static/imgadvanced/MIEx9Solution.png))

:::



## Enterprise Manager

<details>

1.	Open the Machines screen from the Administration section of the Navigation Panel.
2.	Click the Add button.
3.	Enter **SMAAdvancedTraining** in the Name text box.
4.	Select ```Windows``` as the Machine Type.
5.	Change the Socket Number to ```4100```.
6.	Enter the ```IP Address``` you are using to Remote Desktop to this training server.
7.	Click the Save button.
8.	Click the OpCon **Advanced Settings** Panel link.
9.	Click the Communication Settings tab.
10.	Select **JORS Port Number** in the table.
11.	Enter a value of ```4110```.
12.	Click the Update button.
13.	Click the Save button
14.	Create a new Schedule called **MY FIRST NAMED INSTANCE**. 
15.	Mark the Multi-Instance checkbox in the Schedule Properties frame.
16.	Click the **Instance Definition** tab.
17.	Click the **Named Instance** radio button.
18.	Click the Add button in the Instances field on the left side of the screen.
19.	Click the Add button on the Select Instance popup window.
20.	Enter **Advanced Training** in the Instance Name.
21.	Click the OK button.
22.	Click the OK button.
23.	Repeat this creating a **Basic Training Instance**.
24.	Select the **Advanced Training** Instance in the **Instance** box on the left side of the screen.
25.	Create a Property for DURATION.
    * Enter **DURATION** in the **Property Name** text box under Instance Details.
    * Enter ```15``` in the **Property Value** text box.
    * Click the Add button to the right of Property Value.
26.	Create a Property for **PATH**.
    * Enter **PATH** in the Property Name text box under Instance Details.
    * Enter ```C:\Program Files\OpConxps\MSLSAM\1``` in the Property Value text box.  
    * Click the Add button to the right of **Property Value**.
27.	Click the Save button.
28.	Do the same for the **Basic Class** Instance with two differences
    * Use ```10``` instead of ```15``` for **DURATION**.
    * Remove the ```“\1”``` at the end of the PATH.
29. Click the Save button.
30. Select the **Advanced Training** Instance. 
31. Click the Add button under Exception Rules.
31. Enter the Job Pattern as ```*```.    
30.	Replace **Primary Machine** ```SMATraining```. In the New Value text box enter ```SMAAdvancedTraining```. 
31.	Click the OK button.
32.	Enter the Job Pattern ```Upload*```
33.	Click the Add button under Exception Rules.
34.	Select Job Build Status from the Job Field drop-down.
35.	Select ```To Be Skipped``` from the New Value field.
36.	Click the OK button.
37.	Click the Save button.
38.	Open the Job Master with **MY FIRST NAMED INSTANCE** selected. 
39.	Create four Windows Jobs using the ```Genericp.exe```.
    * **Job Names and Run Order:**
        * Run Report
        * Transfer Report to Network
        * Upload Report to Vendor
        * Archive Report
    * Select **SMATraining** as the **Primary Machine**.  
    * **Command Line** for all three Jobs:   ```"[[SI.PATH]]\genericp.exe" –t [[SI.DURATION]]```
40.	Build the Schedule(s).
41.	Verify that both Instances are built.
42.	Verify that the **Advanced Training** Instance is running on the **SMAAdvancedTraining** Machine while the Basic Instance is running on the **SMATraining** Machine. 
43.	Verify that the Upload Job was set to be **Skipped**.

</details>