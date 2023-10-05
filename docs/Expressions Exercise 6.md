---
sidebar_label: 'Expressions Exercise 6'
hide_title: 'false'
---

### Exercise 6 - Property Expressions: Property in a Property Name

1.	Create a Multi-Instance Schedule named **Property In Property Name** with two different Schedule Instance Properties

```ENV=PROD```

```ENV=DEV```

2.	Create 6 different Global Properties

	*	```[[PROD-LOAD]]``` = ```5```
	*	```[[PROD-POST]]``` = ```30```
	*	```[[PROD-RETURNS]]``` = ```15```
	*	```[[DEV-LOAD]]``` = ```3```
	*	```[[DEV-POST]]``` = ```18```
	*	```[[DEV-RETURNS]]``` = ```9```

3.	Create 3 Jobs in the Schedule, each using the Timeout command. One for the Load, one for the Post, and one for the Returns.

#### Example:
```
	Timeout /t [[PROD-LOAD]]
```

4.	Use an Expression Property for the Time interval using the ```[[SI.ENV]]``` for the environment prefix.