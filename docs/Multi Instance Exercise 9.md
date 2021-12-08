---
sidebar_label: 'Multi Instance Exercise 9'
hide_title: 'false'
---

## Exercise 9 - Create a 2nd Machine for the OpCon Server

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
29.	In the New Value text box enter **SMAAdvancedTraining**. 
30.	Click the OK button.
31.	Select the Job Pattern ```Upload*```
32.	Click the Add button under Exception Rules.
33.	Select Job Build Status from the Job Field drop-down.
34.	Select ```To Be Skipped``` from the New Value field.
35.	Click the OK button.
36.	Click the Save button.
37.	Open the Job Master with **MY FIRST NAMED INSTANCE** selected. 
38.	Create four Windows Jobs using the ```Genericp.exe```.
    * **Job Names and Run Order**:
        * Run Report
        * Transfer Report to Network
        * Upload Report to Vendor
        * Archive Report
    * Select **SMATraining** as the **Primary Machine**.  
    * **Command Line** for all three Jobs:   ```“[[SI.PATH]]\genericp.exe” –t [[SI.DURATION]]```
39.	Build the Schedule(s).
40.	Verify that both Instances are built.
41.	Verify that the **Advanced Training** Instance is running on the **SMAAdvancedTraining** Machine while the Basic Instance is running on the **SMATraining** Machine. 
42.	Verify that the Upload Job was set to be **Skipped**.