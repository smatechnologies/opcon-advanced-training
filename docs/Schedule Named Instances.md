---
sidebar_label: 'Schedule Named Instances'
hide_title: 'false'
---

## Schedule Named Instances

* Cross-Schedule Dependecies
* Exceptions in each Instance of Multi-Instance Schedule
    * Different Machine
    * Different Start Time (or other Time setting)
    * Different Batch User
    * Different Job Build Status
    * Allows exceptions to be built for most parameters in a Schedule

* A Schedule must be marked as **Multi-Instance** for a Named Instance feature to be enabled

<a href="imgadvanced/ScheduleNamedInstance.png" target="_blank"><img src="imgadvanced/ScheduleNamedInstance.png" width="500"></img></a>   

###### (Click Image to Enlarge)

---

### Schedule Named Instances - Create Named Instances

* Select the **Named Instance** radio button on the **Instance Definition** tab

* Create or Select the Instance Name in the Instance Definition menu on the left
    * Instance Names are saved and can be resused, but Properties and Exceptions are not saved with the Instance Name
* Create all Schedule Instance Properties
    * Separate by fields instead of storing in a String separated by semicolons

<a href="imgadvanced/NamedInstanceProperties.png" target="_blank"><img src="imgadvanced/NamedInstanceProperties.png" width="500"></img></a>   

### Schedule Named Instances - Create Patterns

##### Instance Details Exceptions

* Job Patterns:
    * Identify which Jobs will be modified by Exception(s)
    * Wildcards are supported
    * Multiple Patterns can be applied to a single Schedule
        * Patterns are listed alphabetically
        * Patterns are appled top to bottom with subsequent Patterns overriding preceding Patterns

* Exception Rules:
    * Define replacements which will take place
    * Each Pattern can have several Exception Rules
    * Options vary depending on the selected field
    * Exceptions are applied from top to bottom with subsequent Exceptions overriding preceding Exceptions

---

### Schedule Named Instances - Exception Rules

* The **Exception Rules** screen varied depending on which Job Field is selected
* **Job Field** - Field to be altered
* Remaining Fields vary
* Drop Down Menus allow selection of replacement Option
* Text Fields allow entry of replacement value
    * Tokens are valid

##### Example:

* **Schedule Name** is defined as: 
    * **ScheduleName_InstanceName**
* Notice the **Machines** used in each Schedule Instance
* **Delete Files** Job is skipped in the **Development Instance**

<a href="imgadvanced/ScheduleNameExample.png" target="_blank"><img src="imgadvanced/ScheduleNameExample.png" width="500"></img></a>   