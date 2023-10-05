---
sidebar_label: 'Expressions Exercise 8A'
hide_title: 'false'
---

### Exercise 8A - Expression Dependency: Multiple Time Windows

1.	Create a Global Property call ```[[FAKETIME]]``` with a value of ```0```.
2.	Create a Schedule named MULTIPLE TIME WINDOWS that contains a Job with three Time windows.

	* Use the ```[[FAKETIME]]``` Global Property that will allow us to manually update the Time.
	* Between ```2``` and ```5``` am
	* Between ```11``` am and ```2``` pm
	* Between ```5``` and ```8``` pm

3.	Build the Schedule. 
4.	Verify that the Job did not run.
5.	Update the Property to ```03```.
6.	Verify that the Job ran.
7.	Update the Property to ```07```.
8.	Restart the Job. 
9.	Verify that the Job is waiting.
10.	Update the Property to ```12```. 
11.	Verify that the Job ran again.
12.	Update the Property to ```15```. 
13.	Restart the Job, and make sure it is waiting.
14.	Update the Property to ```18``` and make sure the Job ran.
15.	Update the Property to ```22```. 
16.	Restart the Job and make sure that it is not running.

	* In the real world, a ```Latest Start Time``` would be used.