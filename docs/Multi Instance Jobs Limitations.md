---
sidebar_label: 'Multi Instance Jobs Limitations'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Multi-Instance Jobs - Limitations

* Multiple Multi-Instance Jobs in a Dependency Chain all depend on **each** Instance
    * **Job 02_test01.txt** will wait on **Job 01_test02.txt** and **Job 01_test03.txt** when it only needed to wait on **Job 01_test01.txt**
    * Essentially, all **test01.txt** Jobs are mixed with **test02.txt** and **test03.txt** Jobs
* SubSchedules can be used in place of Multi-Instance Jobs to simplify this chain

### Enterprise Manager

<details>

* Multiple Multi-Instance Jobs in a Dependency Chain all depend on **each** Instance
    * **Job 02_test01.txt** will wait on **Job 01_test02.txt** and **Job 01_test03.txt** when it only needed to wait on **Job 01_test01.txt**
    * Essentially, all **test01.txt** Jobs are mixed with **test02.txt** and **test03.txt** Jobs
* SubSchedules can be used in place of Multi-Instance Jobs to simplify this chain

![](../static/imgadvanced/JobCrossDependencyChain.png)

</details>