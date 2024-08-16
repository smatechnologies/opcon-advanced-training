---
sidebar_label: 'Expressions Exercise 4'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 4 - Property Expressions: Substring Length

1.	Create a Multi-Instance Schedule named **Substring Length** with Schedule Instance Properties of:

```
FILENAME = AccountGaby.csv
FILENAME = AccountRaul.csv
FILENAME = AccountMike.csv
FILENAME = AccountPaulius.csv
FILENAME = AccountKelly.csv
FILENAME = AccountRyan.csv
FILENAME = AccountMatt.csv
FILENAME = AccountDavid.csv
```

2.	Create a Null Job that will send a Notification including the File Name and Length.
3.	Create a File Copy Job that will rename the file, keeping its root name but replacing the extension with ```xlsx```.

	The CSV files are located in ```C:\Accounting```

	The File Path of your Source should look like this: ```“C:\Accounting\[[SI.FILENAME]]”```


