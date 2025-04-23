---
sidebar_label: 'Expressions Expression Based Events'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Expressions - Expression Based Events

## Overview

* Expressions can be used to trigger Events defined on Jobs
* Expression must be **true** when a Job completes to trigger

## Usage

* Trigger a $JOB:CANCEL event if another jobs is in a Running state.
* Trigger a $NOTIFY:EMAIL if the job completes after 3 PM

:::tip Example 1

Set different Alerts based on Time

* Email **Shift 1** if the Job competes before **8:00 am**
* Email **Shift 2** if the Job completes between **8:00 am** and **4:00 pm**
* Email **Shift 3** if the Job completes between **4:00 pm** and **12:00 am (midnight)**

Expression on Events:
* ```ToInt([[$TIMEhh]]) > 08```
* ```ToInt([[$TIMEhh]]) > 08 && ToInt([[$TIMEhh]]) < 16```
* ```ToInt([[$TIMEhh]]) > 16```

![](../static/imgadvanced/Expression_Event_Email_SM.png)

:::

:::tip Example 2

Set different Parameters based on Month  

* Jan, Apr, Jul, Oct = **101**  
* Feb, May, Aug, Nov = **250**  
* Mar, Jun, Sep, Dec = **134**  

Expression on Events:
* ```ToInt([[$SCHEDULE DATEmm]]) == 01 || ToInt([[$SCHEDULE DATEmm]]) == 04 || ToInt([[$SCHEDULE DATEmm]]) == 07 || ToInt([[$SCHEDULE DATEmm]]) == 10```
* ```ToInt([[$SCHEDULE DATEmm]]) == 02 || ToInt([[$SCHEDULE DATEmm]]) == 05 || ToInt([[$SCHEDULE DATEmm]]) == 08 || ToInt([[$SCHEDULE DATEmm]]) == 11```
* ```ToInt([[$SCHEDULE DATEmm]]) == 03 || ToInt([[$SCHEDULE DATEmm]]) == 06 || ToInt([[$SCHEDULE DATEmm]]) == 09 || ToInt([[$SCHEDULE DATEmm]]) == 12```

![](../static/imgadvanced/expression_events_monthly_sm.png)

:::



## Enterprise Manager

<details>

#### Expression Based Events

If an Expression is true when a Job completes, an Event will trigger

#### Example:

Set different Alerts based on Time

* Email **Shift 1** if the Job competes before **8:00 am**  
* Email **Shift 2** if the Job completes between **8:00 am** and **4:00 pm**  
* Email **Shift 3** if the Job completes between **4:00 pm** and **12:00 am (midnight)**  

Set different Parameters based on Month  

* Jan, Apr, Jul, Oct = **101**  
* Feb, May, Aug, Nov = **250**  
* Mar, Jun, Sep, Dec = **134**  

#### Example 

Time Windows

![](../static/imgadvanced/EventTrigger.png)
![](../static/imgadvanced/TriggerDetails.png)
![](../static/imgadvanced/EventNotify.png)

#### Example:

Monthly Value Expressions 

![](../static/imgadvanced/ExpressionMonthly.png)

</details>