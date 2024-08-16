---
sidebar_label: 'Multi Instance Hurdles In Updating SI Property'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Hurdles in Updating SI Properties

* Periods throw off fully-qualified Schedule Instance Property Name
    * Periods in Schedule Name
    * Periods in SI Property Name

##### Example (Schedule Name):

* Schedule Name: **Training.Schedule_10**
* SI Property Name: ```TIME```

```
$PROPERTY:SET,SI.TIME.[[$DATE]]."Training.Schedule_10",20
```

##### Example (SI Property Name):

* Schedule Name: **Training_Schedule_10**
* SI Property Name: ```TIME.HHMMSS```

```
$PROPERTY:SET,SI."TIME.HHMMSS".[[$DATE]].Training_Schedule_10,20
```

---

### Periods in SI or Schedule Name


* Issues with Operating System removing quotes
* Remember - Parameters with Periods are quoted

```
$PROPERTY:SET,SI.TIME[[$DATE]]."Training.Schedule_10",20
```

* If the Property Name is passed to the program from the Command Line, the Operating System could remove quotes
    * Parameter is accurately passed to the program, but the program does not accurately pass the Event to ```MSGIN``` 


```
[[Path]]\SMAParseFile.exe -d "[[path2file]]\example.txt" -r [[path2rule]]\rule.txt -p "Token=SI.TIME.[[$DATE]].\"Training.Schedule_10\""
```
