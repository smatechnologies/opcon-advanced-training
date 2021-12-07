---
sidebar_label: 'Multi Instance Exercise 4'
hide_title: 'false'
---

## Exercise 4 - Overlapping Names Workaround

1. Open the **Schedule Master** with the **MY FIRST MULTI-INSTANCE SCHEDULE** selected and click the **Instance Definition** tab.
2. Update all **Instances** with a ```NAME=TIME-DEPARTMENT:```
    * ```NAME=10-ACCOUNTING```
    * ```NAME=20-ACCOUNTING```
    * ```NAME=10-MARKETING```
    * ```NAME=20-MARKETING```
    * ```NAME=10-FINANCE```
    * ```NAME=20-FINANCE```
3. Click **Save**.
4. Verify that each version of the **MY FIRST MULTI-INSTANCE SCHEDULE** is **Closed** for Today's date.
5. Build the Schedule and verify the results.  
    * You should have **6 Schedules** built - all with the **NAME** Schedule Instance Property.