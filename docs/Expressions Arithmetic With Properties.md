---
sidebar_label: 'Expressions Arithmetic With Properties'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Expressions - Arithmetic Using Properties


### Examples:

```[[Files Processed]] + 5```

By default, an OpCon Property Value is stored as a String

Convert the String to Integer using the **ToInt** Function

```
ToInt([[Files Processed]])
ToInt([[Files Processed]]) + 5
[[=ToInt([[Files Processed]]) + 5]]
```

Longer Example:

```[[=(ToInt([[Files Processed]]) + 5)/2]]```


The Token will be resolved to a value of ```3``` if ```[[Files Processed]] = 1```

Rounding Arithmetic : Always rounds down
       If ```[[Files Processed]] = 2```

```[[=(ToInt([[Files Processed]]) + 5)/2]] =3```

Resolves as ```((7)/2) = 3```