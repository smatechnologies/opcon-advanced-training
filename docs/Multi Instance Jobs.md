---
sidebar_label: 'Multi Instance Jobs'
hide_title: 'false'
---

## Multi-Instance Jobs

* Multi-Instance Jobs allow a single Job template to spawn multiple copies of itself using different sets of properties

###### Example (Purpose):

* Ten Jobs are the same other than few small changes on the Command Line
    * Use one Job to build all ten
* **Allow Multi-Instance** check box must be marked to allow a Multi-Instance Job 
    * Container Jobs are Multi-Instance by default

<a href="imgadvanced/AllowMultiInstanceJob.png" target="_blank"><img src="imgadvanced/AllowMultiInstanceJob.png" width="500"></img></a>   

###### (Click Image to Enlarge)

---

### Multi-Instance Jobs - Instance Definition


* Create Job Instance Definitions using the Instance Definition tab within Job Master
* Similar rules apply to Multi-Instance Schedules and Jobs
    * Use a semicolon (;) to separate Job Instance Properties

```FileName=test01.txt;Path=C:\tmp```

* A Job will be named using the value of the first Instance Property defined in a String
* Name Scheme Example:  

```JobName_JI-Value```

```JobName_test.txt```

* Duplicates will have a **$####**

```JobName_test-1.txt$0004```

<a href="imgadvanced/JobInstanceDefinition.png" target="_blank"><img src="imgadvanced/JobInstanceDefinition.png" width="300"></img></a>   

###### (Click Image to Enlarge)