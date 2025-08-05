---
sidebar_label: 'Expressions Exercise 11'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions Exercise 11
 
## Exercise 11: Self Service 
 
### Objective

To disable a button with a time window expression.

### Summary

To disable a button called **Button 1** when it is before **8 AM** or after **5 PM**, if the button is clicked by an end user, or if the Global Property called **SSB ALL** is set to **1**.

### Instructions

#### Create the Properties

1. Create a Global Property called ```SSB Button1``` with a value of ```0```.
2. Create a Global Property called ```SSB All``` with a value of ```0```.

#### Create the Button

3. Create a Self Service Button with the following specs:
  * **Name:** Button 1
  * **Disable Rule:** ```ToInt([[$TIMEhh]]) < 08 || ToInt([[$TIMEhh]]) > 17 || ToInt([[SSB Button1]]) == 1 || ToInt([[SSB All]]) == 1```
  * **Event:** $PROPERTY:SET
	* **Property Name:** SSB Button1
	* **Value:** 1
  * Toggle on **Submit Events as OCADM**

#### Manipulate the Button

4. Verify that the button is **NOT** disabled.
5. Click the button.
6. Verify that the button **IS** disabled.
7. Reset the value of the **SSB Button1** property to ```0```
8. Verify that the button is **NOT** disabled.
9. Set the value of the **SSB ALL** property to ```1```
10. Verify that the button **IS** disabled.