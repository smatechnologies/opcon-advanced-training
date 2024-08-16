---
sidebar_label: 'Expressions Property in Property Name'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Property in Property Name

Expressions also provide the ability to place a Property within the Name of another Property

#### Example:

Environment (such as Prod or Dev) as the prefix for all Global Properties used 

Updating one Schedule Instance Property would update all Global Properties referenced by a Schedule

```[[SI.NAME]]```

* Prod
* Dev

```[[OI.[[=[[SI.NAME]]+"-TIME"]]]]```

* PROD-TIME
* DEV-TIME

```OI``` is used to specify an OpCon Instance instead of a Schedule, Job, or Machine Instance