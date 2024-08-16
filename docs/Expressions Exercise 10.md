---
sidebar_label: 'Expressions Exercise 10'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 10 - Self-Service

1.	Create an **OpCon Self Service Button** that will be ```Disabled/Enabled``` based on an Expression being ```true``` with the following parameters:

	* The Button is disabled if the current Time is before ```8 am```.
	* The Button is disabled if the current Time is after ```5 pm```.
	* The Button is disabled after it is submitted. 
		* An expression with a Global Property equaling ```1```.
	* All Buttons are tied to a Global Property. 
		* When this Global Property equals ```1```, all buttons are disabled.