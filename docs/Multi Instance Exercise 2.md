---
sidebar_label: 'Multi Instance Exercise 2'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 2

## Exercise 2: Multiple Properties

### Objective

To have **multiple properties** per **Property Set**.

### Summary

Modify the Property Sets created in Exercise 1 to have multiple properties in each set and update the jobs to reflect the use of the additional property.

### Instructions

#### Edit the Property Sets

1. Open Studio, locate **My First Multi Instance Schedule** and click **Edit**.
2. While in **Admin Mode**, expand the **Instance Definition** Section.
3. Expand the **TIME=10** property set and click the **(+)** button.
4. In the **Name** field, enter ```PATH``` 
5. In the **Value** field, enter ```C:\Multi-Instance\Accounting```
6. Clicking the **Checkmark to Save**
7. Expand the **TIME=20** property set and click the **(+)** button 
8. In the **Name** field, enter ```PATH``` 
9. In the **Value** field, enter ```C:\Multi-Instance\Accounting```
10. Clicking the **Checkmark to Save**
11. Click **Save**.

#### Update the Jobs

12. Update the **Command Lines** for all 3 Jobs replacing ```C:\Multi-Instance\Accounting``` with ```[[SI.PATH]]```

#### Clear the Daily

13. Verify that each version of the **My First Multi Instance Schedule** is **Completed** for Today's date.
14. Delete the schedules from the Process screen using the trash can in either the **Day Selection** or **Schedule Selection** menu.

#### Build the Schedules

15. Rebuild the Schedule, utilizing the **Next** button when requesting the build.

:::note

 Within the Build process, verify that there are two Schedule Instance Properties Sets for this Schedule defined:

![](../static/imgadvanced/MIEx2Solution.png)

:::

16. Verify the results of the build.



## Enterprise Manager

<details>

1. Open the **Schedule Master** with the **My First Multi Instance Schedule** selected and click the **Instance Definition** tab.
2. Click on the ```TIME=10``` Property in the **Instance** grid at the bottom of the screen.
3. In **Define Property Values**, update ```TIME=10``` to ```TIME=10;Path=C:\Multi-Instance\Accounting```
4. Click the **Update** button.
5. Change ```TIME=20``` to ```TIME=20;PATH=C:\Multi-Instance\Accounting```
6. Update the **Command Lines** for all 3 Jobs replacing ```C:\Multi-Instance\Accounting``` with ```[[SI.PATH]]```
7. Verify that each version of the **My First Multi Instance Schedule** is **Closed** for Today's date.
8. Delete the Schedules from one of the Operations Views.
9. Rebuild the Schedule and verify the results.

:::note Note
The same 2 Schedules should be built, but in the **Daily Schedule Maintenance** there are two **SI Properties**
:::

10. From any of the Operations Screens, right-click the Schedule and select **Maintenance > Edit Daily Schedule**.
11. Click on the Instance Definitions tab.
12. Verify that there are two Schedule Instance Properties for this Schedule defined on two different lines:
    * ```TIME=10```
    * ```PATH=C:\Multi-Instance\Accounting```

</details>