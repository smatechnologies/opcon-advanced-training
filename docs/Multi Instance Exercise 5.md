---
sidebar_label: 'Multi Instance Exercise 5'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 5 - Update a Schedule Instance Property through an Event

1. Create a Schedule called **UPDATE MULTI-INSTANCE PROPERTY VALUES**.
2. Create a **Null Job** called **10-ACCOUNTING**.
* **FREQUENCY** = MON-FRI-N
* **EVENT** = ```$PROPERTY:SET,SI.TIME.[[$DATE]].MY FIRST MULTI-INSTANCE SCHEDULE_10-ACCOUNTING,99```
3. Build the **UPDATE MULTI-INSTANCE PROPERTY VALUES** Schedule and allow it to run.
4. In the ```SAM Log```, you should see the ```$PROPERTY:SET``` Event change the ```TIME``` property from ```10``` to ```99``` within **MY FIRST MULTI-INSTANCE SCHEDULE_10-ACCOUNTING** Schedule. 
5. Edit **MY FIRST MULTI-INSTANCE SCHEDULE_10-ACCOUNTING** Daily Schedule and verify the ```TIME``` Schedule Instance Property is now set to ```99```.


### Enterprise Manager

<details>

1. Create a Schedule called **UPDATE MULTI-INSTANCE PROPERTY VALUES**.
2. Create a **Null Job** called **10-ACCOUNTING**.
* **FREQUENCY** = MON-FRI-N
* **EVENT** = ```$PROPERTY:SET,SI.TIME.[[$DATE]].MY FIRST MULTI-INSTANCE SCHEDULE_10-ACCOUNTING,99```
3. Build the **UPDATE MULTI-INSTANCE PROPERTY VALUES** Schedule and allow it to run.
4. In the ```SAM Log```, you should see the ```$PROPERTY:SET``` Event change the ```TIME``` property from ```10``` to ```99``` within **MY FIRST MULTI-INSTANCE SCHEDULE_10-ACCOUNTING** Schedule. 
5. Edit **MY FIRST MULTI-INSTANCE SCHEDULE_10-ACCOUNTING** Daily Schedule and verify the ```TIME``` Schedule Instance Property is now set to ```99```.

</details>