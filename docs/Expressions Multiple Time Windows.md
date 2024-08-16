---
sidebar_label: 'Expressions Multiple Time Windows'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Multiple Time Windows

Property Expressions allow Multiple Time Windows by using OR and/or AND functions to combine Expressions
* Utilizes 24-hour clock time

#### Examples:

Between **1:00 am** and **9:00 am**

```TIME > 01 && TIME < 09```

Between **1:00 am** and **9:00 am** or between **2:00 pm** and **5:00 pm**

```(TIME > 01 && TIME < 09) || (TIME > 14 && TIME < 17) ```

#### Example:

Allows a Job to run between **02:00 am** and **10:00 am** OR **6:00 pm** and **8:00 pm**

```
(02 < ToInt([[$TIMEhhmm]]) && ToInt([[$TIMEhhmm]]) < 10) || (18 < ToInt([[$TIMEhhmm]]) && ToInt([[$TIMEhhmm]]) < 20)
```

![](../static/imgadvanced/expressions_timehh_sm.png)

![](../static/imgadvanced/expression_dependency_sm.png)

### Enterprise Manager

<details>

#### Multiple Time Windows

Property Expressions allow Multiple Time Windows by using OR and/or AND functions to combine Expressions
* Utilizes 24-hour clock time

#### Examples:

Between **1:00 am** and **9:00 am**

```TIME > 01 && TIME < 09```

Between **1:00 am** and **9:00 am** or between **2:00 pm** and **5:00 pm**

```(TIME > 01 && TIME < 09) || (TIME > 14 && TIME < 17) ```

#### Example:

Allows a Job to run between **02:00 am** and **10:00 am** OR **6:00 pm** and **8:00 pm**

```
(02 < ToInt([[$TIMEhhmm]]) && ToInt([[$TIMEhhmm]]) < 10) || (18 < ToInt([[$TIMEhhmm]]) && ToInt([[$TIMEhhmm]]) < 20)
```

![](../static/imgadvanced/GlobalTime.png)
![](../static/imgadvanced/TimeDependency.png)

</details>