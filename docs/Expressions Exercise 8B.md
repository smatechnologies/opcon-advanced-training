---
sidebar_label: 'Expressions Exercise 8B'
hide_title: 'false'
---

## Exercise 8B - Expression Events: Multiple Time Windows

1.	Create a Schedule named **Expression Events**.
2.	Create a Job with Expression Events that will update a Property differently depending on what the current Time.

	* If between ```22:00``` and ```06:00```, Update the Global Property to ```“Shift 1”```.
	* If between ```06:00``` and ```14:00```, Update the Global Property to ```“Shift 2”```.
	* If between ```14:00``` and ```22:00```, Update the Global Property to ```“Shift 3”```.

3.	Build the Schedule and verify that the Global Property was updated to the proper Shift number.