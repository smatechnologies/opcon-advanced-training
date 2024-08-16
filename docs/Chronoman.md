---
sidebar_label: 'Chronoman'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Chronoman

* A Command Line driven utility which does Advanced Date Calculations and saves the value in a User Defined Global Property
    * The Utility uses an ODBC Connection established in the MSLSAM folder to account for Working Days
    * The Script file specifies the logic behind the date calculation
    * Chronoman provides many Command Line switches or script directives 

* Best Practice is to include the Chronoman Job in the Schedule using those date calculations and Job Dependencies

### Chronoman Script File

* All directives are fully documented
* Best Practice is to keep the Script file simple, with most parameters being placed on the Command Line

#### Example: Next Business Date

```
SET_FORMAT_String mmddyy  
d,1  
FIND_WORKING_DAY_FORWARD
```

#### Example: Day Before the Next Business Date

```
SET_FORMAT_String mmddyy  
d,1  
FIND_WORKING_DAY_FORWARD  
d, -1
```

#### Example: Two Business Days from Now

```
SET_FORMAT_String mmddyy  
d,1  
FIND_WORKING_DAY_FORWARD  
d,1  
FIND_WORKING_DAY_FORWARD
```

#### Example: Last Working Day of Previous Month

```
SET_FORMAT_String mmddyy  
m,-1  
FIND_MONTH_END  
FIND_WORKING_DAY_BACKWARD
```

#### Example: 20 Working Days from 15th of Month

```
SET_FORMAT_String mmddyy  
FIND_MONTH_BEGIN  
d,15  
wd, 20
```

#### Example: 1st Working Day before 15th-B

```
SET_FORMAT_String mmddyy  
FIND_MONTH_BEGIN  
d,15  
FIND_WORKING_DAY_BACKWARD  
d,-1  
FIND_WORKING_DAY_FORWARD
```

---

### Chronoman Command Line

``` 
"[[SMAOpConPath]]\MSLSAM\Chronoman.exe"  
=c[[SMAOpConPath]]\Scripts\Chronoman\LastWorkingDayofMonth.txt  
=tDATE_EOM_WD  
=s[[$SCHEDULE NAME]]  
=b[[$SCHEDULE DATE]]
```

<a href="imgadvanced/ChronomanCL.png" target="_blank"><img src="imgadvanced/ChronomanCL.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### Chronoman and Annual Plan Calendars

* Chronoman, combined with the ```$Calendar:ADD``` Event and an **Annual Plan** Frequency, can help resolve issues that cannot be solved with Frequencies alone

#### Examples:

* A Payroll Proofing process must be run the day before Payroll runs 
    * Payroll runs on the last working day of the month and the 15th of the month, or the previous working day if the 15th falls on a non-working day
    * OpCon can calculate the working day before the 15th or the EOM but cannot account for the 15th or the EOM falling on a non-working day
* A Promotion must run for 20 business days starting on the 15th of the month 
    * A Job needs to run at the end of the promotion to turn it off
    * Not all months have the same number of days or non-working days in them 
    * OpCon’s frequencies will not be able to identify which day in the following month the promotion ends

### Annual and Negative Plan Calendars:

* Annual Plan Calendar will be used by a Frequency to determine when a Job will run
* Negative Plan Calendars will be used by a Schedule or a Frequency to determine when Job will not run

<a href="imgadvanced/AnnualPlan.png" target="_blank"><img src="imgadvanced/AnnualPlan.png" width="500"></img></a>   

###### (Click Image to Enlarge)