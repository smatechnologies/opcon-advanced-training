---
sidebar_label: 'Advanced Date Calculation'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Advanced Date Calculation

### System Date Offsets

#### Global Property Recap

* Two types of Global Properties:
    * User Defined Properties
        * Values are hard-coded and only change if manually changed through Events
* System Global Properties
    * Name starts with dollar symbol ($)
    * The value is pulled from OpCon
    * The formats of many System Global Properties can be modified

* Typical Date Format Options:
    * ```d``` = Day of month (single digit if under 10)
    * ```dd``` = 2-digit day of the month (with preceding 0 if value is under 10)
    * ```ddd``` = 3-character abbreviation day of week (Mon for Monday)
    * ```dddd``` = Day of week spelled out
    * ```yyyy``` = 4-digit year
    * ```yy``` = Last 2 digits of year
    * ```mm``` = 2-digit date (01 for January)
    * ```mmm``` = 3-character abbreviation of month (Jan for January)
    * ```mmmm``` = Full month spelled out
    * ```y``` = Julian Date with leading zeros suppressed
    * ```j``` = Julian Date with leading zeros

* System Properties can be offset in 4 ways

* **Subtract** or **Add Day(s)** from/to current date  
```[[$SCHEDULE DATEmmddyy(-1d)]]```
* **Subtract** or **Add Month(s)** from/to current date  
```[[$SCHEDULE DATEmmddyy(+1m)]]```
* **Subtract or **Add Working Days** from/to current date  
```[[$SCHEDULE DATEmmddyy(+1wd)]]```
* **Move to next** or **previous End of Month**  
```[[$SCHEDULE DATEmmddyy(+1eom)]]```