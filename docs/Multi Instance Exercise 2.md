---
sidebar_label: 'Multi Instance Exercise 2'
hide_title: 'false'
---

## Exercise 2 - Multiple Properties

1. Open the **Schedule Master** with the **MY FIRST MULTI-INSTANCE SCHEDULE** selected and click the **Instance Definition** tab.
2. Click on the ```TIME=10``` Property in the **Instance** grid at the bottom of the screen.
3. In **Define Property Values**, update ```TIME=10``` to ```TIME=10;Path=C:\Multi-Instance\Accounting```
4. Click the **Update** button.
5. Change ```TIME=20``` to ```TIME=20;Path=C:\Multi-Instance\Accounting```
6. Update the **Command Lines** for all 3 Jobs replacing ```C:\Multi-Instance\Accounting``` with ```[[SI.PATH]]```
7. Verify that each version of the **MY FIRST MULTI-INSTANCE SCHEDULE** is **Closed** for Today's date.
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