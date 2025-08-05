---
sidebar_label: 'Multi Instance Exercise 3'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 3

## Exercise 3: Duplicate Names

### Objective

To see how **non-unique property values** can create **Schedules with unique names** created by the system.

### Summary

Modify the Property Sets created in Exercise 1 to have properties with non-unique fist values to produce schedules with $#### at the end of the name.

### Instructions

#### Adding New Property Sets

1. Open Studio, locate **My First Multi Instance Schedule** and click **Edit**.
2. While in **Admin Mode**, expand the **Instance Definition** Section.
3. Click **Add New Property Set**
4. In the **Name** field, enter ```TIME``` 
5. In the **Value** field, enter ```10```
6. Clicking the **Checkmark to Save**
7. Expand the new set and click the **+** to add a second property to the set.
8. In the **Name** field, enter ```PATH``` 
9. In the **Value** field, enter ```C:\Multi-Instance\Finance```
10. Clicking the **Checkmark to Save**
11. Click **Add New Property Set**
12. In the **Name** field, enter ```TIME``` 
13. In the **Value** field, enter ```20```
14. Clicking the **Checkmark to Save**
15. Expand the new set and click the **+** to add a second property to the set.
16. In the **Name** field, enter ```PATH``` 
17. In the **Value** field, enter ```C:\Multi-Instance\Finance```
18. Clicking the **Checkmark to Save**
19. Click **Add New Property Set**
20. In the **Name** field, enter ```TIME``` 
21. In the **Value** field, enter ```10```
22. Clicking the **Checkmark to Save**
23. Expand the new set and click the **+** to add a second property to the set.
24. In the **Name** field, enter ```PATH``` 
25. In the **Value** field, enter ```C:\Multi-Instance\Marketing```
26. Clicking the **Checkmark to Save**
27. Click **Add New Property Set**
28. In the **Name** field, enter ```TIME``` 
29. In the **Value** field, enter ```20```
30. Clicking the **Checkmark to Save**
31. Expand the new set and click the **+** to add a second property to the set.
32. In the **Name** field, enter ```PATH``` 
33. In the **Value** field, enter ```C:\Multi-Instance\Marketing```
34. Clicking the **Checkmark to Save**
35. Click **Save**.

#### Build Out the Schedule
36. Verify that each version of the **My First Multi Instance Schedule** is **Completed** for today's date.
37. Delete the schedules in the Process screen.
38. Build the **Schedule** 
39. Verify the results.

:::note

You should have **6 Schedules** built (4 with **$000#** in the name)

![](../static/imgadvanced/MIEx3Solution.png)

:::


## Enterprise Manager

<details>

1. Open the **Master Schedule** with **My First Multi Instance Schedule** selected and click the Instance Definition tab.
2. Create Instances of the ```TIME=10``` and ```TIME=20``` Properties with the following paths:
    * ```C:\Multi-Instance\Accounting``` (already created)
    * ```C:\Multi-Instance\Finance```
    * ```C:\Multi-Instance\Marketing```
3. Click the **Save** button.
4. Verify that each version of the **My First Multi Instance Schedule** is **Closed** for Today's date (_do not delete them_).
5. Build the **Schedule** and verify the results.

:::note Note 
You should have **6 Schedules** built (4 with **$000#** in the name)
:::

</details>