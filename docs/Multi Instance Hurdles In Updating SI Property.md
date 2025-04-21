---
sidebar_label: 'Multi Instance Hurdles In Updating SI Property'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Hurdles in Updating SI Properties

* Periods have been known to throw off fully-qualified Instance Property Names
  * Periods in Schedule Names
  * Periods in SI Property Names
* Parameters that have periods **MUST** be wrapped in quotes


:::tip Example of a Schedule Name

* Schedule Name: **Training.Schedule_10**
* SI Property Name: **TIME**
* Fully-Qualified Name: SI.TIME.[[$DATE]].**"Training.Schedule_10"**

:::

:::tip Example SI Property Name

* Schedule Name: **Training_Schedule_10**
* SI Property Name: **TIME.HHMMSS**
* Fully-Qualified Name: SI.**"TIME.HHMMSS"**.[[$DATE]].Training_Schedule_10

:::

### Quotes and Operating Systems

* **Remember - Parameters with Periods are quoted**
* External scripts and utilities can experience issues with Operating Systems removing quotes when they are needed
* If the Property Name is passed to the program from the Command Line, the Operating System could remove quotes
    * Parameter is accurately passed to the program, but the program does not accurately pass the Event to ```MSGIN``` 
* In cases like this the quotes need to be commented out using a backslash, \

:::tip Example

In this command line we are calling SMAParse to supply the value found to the Schedule Instance Property **TIME** in a Schedule called **Training.Schedule_10**. 

**Good Command Line wtih the quotes commented out:**
* SMAParseFile.exe -d "[[path2file]]\example.txt" -r [[path2rule]]\rule.txt -p "Token=SI.TIME.[[$DATE]].**\"Training.Schedule_10\"**"
* **Event Submitted:** $PROPERTY:SET,SI.TIME.[[$DATE]].**"Training.Schedule_10"**,####

If we were to leave out the backslashes in the command line for the -p parameter, the event would **NOT** be processes because the Schedule Name wouldn't be found due to the period.

**Bad Command Line wtih the quotes NOT  commented out:**
* SMAParseFile.exe -d "[[path2file]]\example.txt" -r [[path2rule]]\rule.txt -p "Token=SI.TIME.[[$DATE]].**"Training.Schedule_10"**"
* **Event Submitted:** $PROPERTY:SET,SI.TIME.[[$DATE]].**Training.Schedule_10**,####

:::
