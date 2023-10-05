---
sidebar_label: 'Expressions Exercise 7'
hide_title: 'false'
---

### Exercise 7 - Expression Dependency: Threshold Replacement

1.	Create a Schedule named **Threshold Replacement** with two Schedule Instance Properties *(not Multi-Instance)*.

```MANUAL=0```

```AUTO=0```

2.	Create 3 Null Jobs.

*	The first will be placed ```On Hold```
*	The second will have an Expression Dependency for the ```Manual``` Schedule Instance Property equaling ```1```.
*	The third will have an Expression Dependency for the ```Auto``` Schedule Instance Property equaling ```1```.

3.	Give the first Job a ```$PROPERTY:SET``` Event updating the fully qualified Schedule Instance Property value of ```Auto``` from ```0``` to ```1```.
4.	Build the Schedule.
5.	Verify that none of the Jobs run by themselves.
6.	Edit the Daily Schedule, updating the ```Manual``` Schedule Instance Property from ```0``` to ```1```. 
7.	Verify that the 2nd Job ran once the Property was updated to meet the Expression Dependency.
8.	Release the Job that was built ```On Hold```. 
9.	The 3rd Job should run shortly after the held Job was released.