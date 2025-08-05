---
sidebar_label: 'Advanced Date Calculation'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Advanced Date Calculation

## Global Property Recap

* Two types of Global Properties:
  * User Defined Properties
    * Values are hard-coded and only change if manually changed through Events or manual manipulation
* Managed System Global Properties
  * Name starts with dollar symbol ($)
  * The value is pulled from OpCon
  * The formats of 7 System Global Properties can be modified

## User-Defined Date and Time Format Characters

* Typical Date Format Options:
  * ```d``` = Day of month (single digit if under 10)
  * ```dd``` = 2-digit day of the month (with preceding 0 if value is under 10)
  * ```ddd``` = 3-character abbreviation day of week (Mon for Monday)
  * ```dddd``` = Day of week spelled out
  * ```mm``` = 2-digit date (01 for January)
  * ```mmm``` = 3-character abbreviation of month (Jan for January)
  * ```mmmm``` = Full month spelled out
  * ```yyyy``` = 4-digit year
  * ```yy``` = Last 2 digits of year
  * ```j``` = Julian Date with leading zeros
  * ```y``` = Julian Date with leading zeros suppressed
  * ```hh``` = 2-digit Hour
  * ```nn``` = 2-digit Minutes
    * can use ```mm``` if preceded by ```hh```

## Property Offsets

* System Properties can be offset in 4 ways
  * **Add** or **Subtract Day(s)** from/to current date  
    * ```[[$SCHEDULE DATEmmddyy(-1d)]]```
  * **Add** or **Subtract Month(s)** from/to current date  
    * ```[[$SCHEDULE DATEmmddyy(+1m)]]```
  * **Add** or **Subtract Working Days** from/to current date  
    * ```[[$SCHEDULE DATEmmddyy(+1wd)]]```
  * **Move to Current End of Month** or **Previous End of Month**  
    * ```[[$SCHEDULE DATEmmddyy(+1eom)]]```