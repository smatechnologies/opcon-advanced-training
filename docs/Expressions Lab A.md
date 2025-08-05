---
sidebar_label: 'Expressions Lab A'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Advanced Expressions - Lab A

A file named **PropertyExpression_MMM_A_HHMM.txt** needs to be collected and renamed the first 26 days of each month. 

* ```MMM``` is the abbreviated month (in caps) when the file was generated.
* ```A``` is the letter A through Z specifying which day of the month this file was created.
* ```HHMM``` is the ```Time``` in ```hhmm``` the file was created.

Create an on-demand **“Move Job”** that will archive the file. 

The following must occur as part of the archive:

* Change the case of the month from all upper case to all lower case.
* Send an email containing only the Letter of the file name using the SubString function.
* Update the Time stamp to exactly 2 hours after we archive the file.
	* _Not the source Time, but the Time the Archive Job is run._

:::note Note
You will have to create the file, source, and destination folders
:::