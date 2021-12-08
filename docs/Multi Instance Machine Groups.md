---
sidebar_label: 'Multi Instance Machine Groups'
hide_title: 'false'
---

## Machine Groups

* Machine Groups allow Jobs to call a group of Machines instead of a specific Machine
    * A Job can run on the Least Tasked Machine
        * The Least Tasked Machine is identified based on the number of OpCon Jobs running on that Machine
* A Job can run on each Machine
    * This will spawn a copy of a Job for each Machine in a Group
    * The name of the Job will be: ```JobName_MachineName```
* A Job can act as Multi-Instance by default
* The user can quickly reassign which Machine a Job will run on

### Machine Groups - Creation

* Created under **Administration** section of Navigation Panel
* Assign Machines within the same Machine Type to a Group

<a href="imgadvanced/MachineGroupCreate.png" target="_blank"><img src="imgadvanced/MachineGroupCreate.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### Machine Groups - Job Master

<a href="imgadvanced/MachineGroupJobMaster.png" target="_blank"><img src="imgadvanced/MachineGroupJobMaster.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### Machine Groups - Run on Each Machine

* This option is Multi-Instance by default
* An Instance of a Job will be created for each Machine within a Machine Group
    * Naming Scheme:
        *  ```JobName_MachineName```
        *  ```Job01_Win01```

<a href="imgadvanced/MachineGroups.png" target="_blank"><img src="imgadvanced/MachineGroups.png" width="500"></img></a>   

###### (Click Image to Enlarge)