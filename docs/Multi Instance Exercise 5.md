---
sidebar_label: 'Multi Instance Exercise 5'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Multi Instance Exercise 5

## Exercise 5: Updating Multi Instance Schedule Instance Properties

### Objective

To **update the value** of a specific **Schedule Instance Property** using a **Property Set Event**.

### Summary

Change the Property Value for **TIME** from **10** to **99** in the Schedule referencing the Name Property value, **10-Accounting**, using the $PROPERTY:SET event and the fully qualified name of the Schedule Instance Property.

### Instructions

#### Creating a new Schedule

1. Open **Studio** and create a Schedule called **Update Multi Instance Property Values**.

#### Create the Null Job and Event

2. Create a **Null Job** called **10-ACCOUNTING**.
  * **Frequency:** Example-Mon-Sun-O
  * **Event**
    * **Send Event On:** Job Status
    * **Job Status:** Finished OK
    * **Event Template:** $PROPERTY:SET
      * **Property Name:** ```SI.TIME.[[$DATE]].My First Multi Instance Schedule_10-ACCOUNTING```
      * **Initial Value:** ```99```

#### Build the Schedule

3. Build the **Update Multi Instance Property Values** Schedule and allow it to run.

#### Validate the Value Changed

4. Open the **SAM Log**, you should see the **$PROPERTY:SET** Event change the **TIME** property from **10** to **99** within **My First Multi Instance Schedule_10-ACCOUNTING** Schedule. 

```
Receiving Event $PROPERTY:SET,SI.TIME..My First Multi Instance Schedule_10-Accounting,99.  Received from 4/14/2025:Update Multi Instance Property Values:10-Accounting (Job Status)
Processing Event $PROPERTY:SET,SI.TIME..My First Multi Instance Schedule_10-Accounting,99,smatraining\smauser.  Received from 4/14/2025:Update Multi Instance Property Values:10-Accounting (Job Status)
Property [SI.TIME..My First Multi Instance Schedule_10-Accounting] Changed to [99] by smatraining\smauser
```

5. Edit **My First Multi Instance Schedule_10-ACCOUNTING** Daily Schedule and verify the **TIME** Schedule Instance Property is now set to **99**.

:::note

You should see where the value for TIME has changed from 10 to 99

![](../static/imgadvanced/MIEx5Solution.png)

:::

## Enterprise Manager

<details>

1. Create a Schedule called **Update Multi Instance Property Values**.
2. Create a **Null Job** called **10-ACCOUNTING**.
* **FREQUENCY** = MON-FRI-N
* **EVENT** = ```$PROPERTY:SET,SI.TIME.[[$DATE]].My First Multi Instance Schedule_10-ACCOUNTING,99```
3. Build the **Update Multi Instance Property Values** Schedule and allow it to run.
4. In the ```SAM Log```, you should see the ```$PROPERTY:SET``` Event change the ```TIME``` property from ```10``` to ```99``` within **My First Multi Instance Schedule_10-ACCOUNTING** Schedule. 
5. Edit **My First Multi Instance Schedule_10-ACCOUNTING** Daily Schedule and verify the ```TIME``` Schedule Instance Property is now set to ```99```.

</details>