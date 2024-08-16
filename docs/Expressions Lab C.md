---
sidebar_label: 'Expressions Lab C'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Advanced Expressions - LAB C

Create three Schedules (```Shift 1```, ```Shift 2```, and ```Shift 3```).  

Make the Schedule Start Times:

```Shift 1```: ```00:00```

```Shift 2```: ```08:00```

```Shift 3```: ```16:00```

Create a **Null Job** in each of the three Schedules with an **Expression Dependency** of a **Schedule Instance Property** equaling ```1```.   

* Make sure the Property is set to ```0```.

Create two Events in the ```Shift 1``` Null Job:  

* ```JOB:CANCEL``` cancelling itself when ```[[$TIMEhh]]``` equals ```08```.
* ```JOB:ADD``` adding the Null Job in ```Shift 2``` when $TIMEhh equals ```08```.

Do the same thing in ```Shift 2``` when ```[[$TIMEhh]]``` equals ```16```.

Do the same thing in ```Shift 3``` when ```[[$TIMEhhmm]]``` equals ```2359```, except change the ```$JOB:ADD``` to a Notify Event alerting the End User that this Job did not run today.