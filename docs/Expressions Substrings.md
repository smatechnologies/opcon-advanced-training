---
sidebar_label: 'Expressions Substrings'
hide_title: 'false'
---

## Property Expressions - Substrings

Allows character trimming from a Property String

### Example:

```[[SI.FILENAME]] = FileA.txt```

```[[SI.FILENAME]] = FileB.txt```

If a single letter within the File Name is desired:

```[[=SubStr([[SI.FILENAME]],4,1)]]```

#### Three parameters within this function:

* The original String to be trimmed 
* The number of characters to move from the left
* How many characters to collect *(if omitted, the full remaining String will be collected)*