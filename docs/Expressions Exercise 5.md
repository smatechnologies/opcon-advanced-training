---
sidebar_label: 'Expressions Exercise 5'
hide_title: 'false'
---

### Exercise 5 - Property Expressions: Property in Property Value

1.	Create the following folder:  ```C:\PropertyInProperty\yyyy-mm-dd\Example```  
* ```yyyy-mm-dd``` needs to be the current date in that format.

2.	Create four Global Properties
	* ```[[SERVER-DRIVE]]``` = ```C:```
	* ```[[SLASH]]``` = ```\```
	* ```[[$SCHEDULE DATEyyyy-mm-dd]]``` = ```yyyy-mm-dd```
	* ```[[PROPERTYPATH]]``` = the expression required to combine the three Properties above with the rest of the desired path.

3.	Create a Schedule named **Property In Property Value**
	* Create a Job that copies a file into the directory using the Global Property for the full destination path.
