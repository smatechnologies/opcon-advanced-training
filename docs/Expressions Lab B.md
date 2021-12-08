---
sidebar_label: 'Expressions Lab B'
hide_title: 'false'
---

## Advanced Expressions - Lab B

Create a Schedule with a single Schedule Instance Property that has a value of ```0```. 

Create an SMA Self Service button that will update that Schedule Instance Property to a value of ```1```. 

Create a Job within that Schedule that can only run during the following Times:  

* Between **2:00 am** – **4:00 am**
* Between **6:30 am** – **10:00 am**
* Between **11:00 am** – **2:00 pm**
* Between **5:30 pm** – **8:00 pm**
* Between **11:00 pm** – **11:30 pm**

Make sure the Schedule Instance Property is set to ```1``` before the Job will run. Both the times and the SI dependency must be true.