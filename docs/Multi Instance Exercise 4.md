---
sidebar_label: 'Multi Instance Exercise 4'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 4

## Exercise 4: Overlapping Name

### Objective

To give each **Property Set** a **unique first value**.

### Summary

Modify the Property Sets created in Exercise 1 to have a unique first value in each set by renaming the existing property and appending a department to the value, Accounting, Finance, or Marketing. Then adding the **TIME** property back as the last property in the set.

### Instructions

#### Edit the Property Sets

1. Open Studio, locate **My First Multi Instance Schedule** and click **Edit**.
2. While in **Admin Mode**, expand the **Instance Definition** Section.
3. Expand the first Property Set
4. Click the **Pencil** to edit the **TIME** Property
5. Change the **Name** from **TIME** to ```NAME```
6. Change the **Value** from **10** to ```10-ACCOUNTING```
7. Click the **Checkmark to save**
8. Click the **+** to add the **TIME** property and its value of **10** back to the set making sure to save it.
9. Repeat sets 3 - 8 to modify the 5 remaining **Property Sets** to reflect unique first values of:
  * ```NAME=20-ACCOUNTING```
  * ```NAME=10-MARKETING```   
  * ```NAME=20-MARKETING```
  * ```NAME=10-FINANCE```
  * ```NAME=20-FINANCE```
10. Click **Save**.

#### Build the Schedules

11. Verify that each version of the **My First Multi Instance Schedule** is **Completed** for Today's date.
12. Build the Schedule and verify the results.  

:::note

You should have **6 Schedules** built - all with the **NAME** Schedule Instance Property appended to the end of the schedule name.

![](../static/imgadvanced/SM_NameProp.png)

:::


## Enterprise Manager

<details>

1. Open the **Schedule Master** with the **My First Multi Instance Schedule** selected and click the **Instance Definition** tab.
2. Update all **Instances** with a ```NAME=TIME-DEPARTMENT:```
  * ```NAME=10-ACCOUNTING```
  * ```NAME=20-ACCOUNTING```
  * ```NAME=10-MARKETING```
  * ```NAME=20-MARKETING```
  * ```NAME=10-FINANCE```
  * ```NAME=20-FINANCE```
3. Click **Save**.
4. Verify that each version of the **My First Multi Instance Schedule** is **Closed** for Today's date.
5. Build the Schedule and verify the results.  
  * You should have **6 Schedules** built - all with the **NAME** Schedule Instance Property.

</details>