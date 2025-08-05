---
sidebar_label: 'Multi Instance Exercise 1'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 1

## Exercise 1: Create a Multi-Instance Schedule

### Objective

To create a **Multi Instance Schedule**

### Summary

Create a multi instance schedule called, **My First Multi Instance Schedule**, with two property sets containing a property called **TIME** with a unique value in each set. Then create a job to call this property. Then have multiple version of this schedule viewable in the Process screen.

### Instructions

#### Create the Multi Instance Schedule

1. Create a new Schedule called **My First Multi Instance Schedule**.
2. In the **Schedule Settings** frame, check the **Multi-Instance** checkbox.
3. Click **Save**.

#### Define the Property Sets

4. Enter **Admin Mode**. 
5. Expand the **Instance Definitions** section.
6. Verify **Properties** is selected then click the **Add New Property Set** button.
7. In the **Name** field, enter ```TIME```
8. In the **Value** field, enter ```10```
9. Click the **Checkmark to Save**.
10. Click **Add New Property Set** to add a second Instance Property Set.
11. In the **Name** field, enter ```TIME```
12. In the **Value** field, enter ```20```
13. Click the **Checkmark to Save**.
14. Click the Schedule **Save** button.

#### Define the Jobs

15. Create **3 Windows Jobs** within this schedule with the following attributes:
  * **Command Line:** ```"C:\Multi-Instance\Accounting\Sleep.cmd" [[SI.TIME]]```
  * **Frequency:** Example-Mon-Sun-O
  * Use **Dependencies** so the Jobs to run one at a time.
16. Build your Schedule and check the results. 
  * The two Schedules below should be built:
    * **My First Multi Instance Schedule_10**
    * **My First Multi Instance Schedule_20**

:::note

You should see the two schedules and their corresponding jobs.

![](../static/imgadvanced/MIEx1Solution.png)

:::

## Enterprise Manager

<details>

1. Create a new Schedule called **My First Multi Instance Schedule**.
2. Mark the **Multi-Instance** checkbox in the **Schedule Properties** frame.
3. Click the **Instance Definitions** tab.
4. Click in the **Define Property Values** textbox.
5. Type ```TIME=10``` and click **Add**.
6. Update ```TIME=10``` to ```TIME=20``` and click **Add**. 
* This will create a 2nd Instance Definition for the Property ```TIME```.
7. Click the **Save** button on the Schedule Master toolbar.
8. Move to the Job Master and create 3 Jobs with the following attributes:
* **Command Line:** ```"C:\Multi-Instance\Accounting\Sleep.cmd" [[SI.TIME]]```
* **Frequency:**  
    MON-FRI-N  
* Create a **Job Dependency** Chain setting the Jobs to run one at a time.
9. Build your Schedule and check the results. The two Schedules below should be built:
    * **My First Multi Instance Schedule_10**
    * **My First Multi Instance Schedule_20**

</details>