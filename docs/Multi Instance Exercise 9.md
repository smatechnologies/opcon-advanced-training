---
sidebar_label: 'Multi Instance Exercise 9'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 9 - Create a 2nd Machine for the OpCon Server

1.	Open the **Agents** screen from the **Library**.
2.	Click the Add button.
3.	Enter **SMAAdvancedTraining** in the Name text box.
4.	Select ```Windows``` as the Machine Type.
5.	Change the Socket Number to ```4100```.
6.	Enter the ```IP Address``` you are using to Remote Desktop to this training server.
7.	Click the Save button.
8.	Expand the Communication Settings tab.
9.	Select **JORS Port Number** in the table.
10.	Enter a value of ```4110```.
11.	Click the Save button.
12.	Create a new Schedule called **MY FIRST NAMED INSTANCE**. 
13.	Mark the Multi-Instance checkbox in the Schedule Properties frame.
    * Click the Save button.
14.	Expand the **Instance Definition** tab.
15.	Click the **Named Instance** radio button.
16.	Click the **(+)** button in the Instances field to add a new Named Instance.
17.	Enter **Advanced Training** as the new Instance Name.
18.	Click the **check mark** to add the instance.
19.	Repeat this creating a **Basic Training Instance**.
20.	Select the **Advanced Training** Instance in the **Selected Named Instance** by typing the name.
21.	Create a Property for DURATION.
    * Enter **DURATION** in the **Property Name** text box under Instance Details.
    * Enter ```15``` in the **Value** text box.
    * Click the **check mark** to the right of the **Value** box.
22.	Create a Property for **PATH**.
    * Enter **PATH** in the Property Name text box under Instance Details.
    * Enter ```C:\Program Files\OpConxps\MSLSAM\1``` in the Property Value text box.  
    * Click the **check mark** to the right of the **Value** box.
23.	Click the **Save** button.
24.	Do the same for the **Basic Class** Instance with two differences
    * Use ```10``` instead of ` ``15``` for **DURATION**.
    * Remove the ```“\1”``` at the end of the PATH.
25. Click the **Save** button.    
26.	Select the **Advanced Training** Instance. 
27.	Select the **Exceptions** tab.
27. Add **(+)** the Job Pattern ```*```.  and click the **check mark** to save.
29. Click the Add button under Exception Rules.
29. Select **Primary Machine** from the Job Exception Field drop-down.
29. In the **To Replace** box type ```SMATraining```.
29. In the **Replace With** box type ```SMAAdvancedTraining```.
28.	Add **(+)** the Job Pattern ```Upload*``` and click the **check mark** to save.
29.	Click the Add button under Exception Rules.
30.	Select **Job Build Status** from the Job Exception Field drop-down.
31.	Select ```To Be Skipped``` from the **Replace With** field.
32.	Click the **check mark** button to add.
33.	Click the Save button.
34.	Open the Master Jobs with **MY FIRST NAMED INSTANCE** selected. 
35.	Create four Windows Jobs using the ```Genericp.exe``````.
    * **Job Names and Run Order**:
        * Run Report
        * Transfer Report to Network
        * Upload Report to Vendor
        * Archive Report
    * Select **SMATraining** as the **Primary Machine**.  
    * **Command Line** for all three Jobs:   ```"[[SI.PATH]]\genericp.exe" -t [[SI.DURATION]]```
36.	Build the Schedule(s).
37.	Verify that both Instances are built.
38.	Verify that the **Advanced Training** Instance is running on the **SMAAdvancedTraining** Machine while the Basic Instance is running on the **SMATraining** Machine. 
39.	Verify that the Upload Job was set to be **Skipped**.

### Enterprise Manager

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
    * **Job Names and Run Order**:
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