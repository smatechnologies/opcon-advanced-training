---
sidebar_label: 'Multi Instance Exercise 8'
hide_title: 'false'
---

### Exercise 8 - Machine Groups

1.	In **Agents**, copy the SMATraining Machine twice. 
* Name the Machines **SMATraining2** and **SMATraining3**.  

:::caution Note
Since we do not have a matching LSAM installed for these Machines, you will never be able to successfully Start Communication.
:::

2.	In the Machine Groups screen, create a group called **ADVANCED TRAINING**.
3.	Select **Windows** for the Machine Type.
4.	Assign the **SMATraining Machine** as well as the two copies you made.
5.	Create a Schedule called **MACHINE GROUPS**.
6.	Create a Job with the following settings:
* **Job Name**: SLEEP
* **Machine Group**: Advanced Training
    * With **Run On Each Machine** Selected
* **Command Line**:  
```“C:\Multi-Instance\Accounting\Sleep.cmd” 15```
* **Frequency**: Create one to run every day
7.	Create a 2nd Job with the following settings:
* **Job Name**: FINAL SLEEP
* **Primary Machine**: ```SMATraining```
* **Command Line**:  
```“C:\Multi-Instance\Accounting\Sleep.cmd” 15```
* **Frequency**: Create one to run every day
* **Dependency**: Requires Dependency on the SLEEP Job
8.	Build the Schedule.
9.	Check the **PERT** View. 
* The **SLEEP** Jobs should be spawned into three Jobs named **SLEEP_MACHINENAME**.

![](../static/imgadvanced/Machine_Groups_Pert_Adv_SM.png)


### Enterprise Manager

<details>

1.	In **Machines**, copy the SMATraining Machine twice. 
* Name the Machines **SMATraining2** and **SMATraining3**.  

:::caution Note
Since we do not have a matching LSAM installed for these Machines, you will never be able to successfully Start Communication.
:::

2.	In the Machine Groups screen, create a group called **ADVANCED TRAINING**.
3.	Select **Windows** for the Machine Type.
4.	Assign the **SMATraining Machine** as well as the two copies you made.
5.	Create a Schedule called **MACHINE GROUPS**.
6.	Create a Job with the following settings:
* **Job Name**: SLEEP
* **Machine Group**: Advanced Training
    * With **Run On Each Machine** Selected
* **Command Line**:  
```“C:\Multi-Instance\Accounting\Sleep.cmd” 15```
* **Frequency**: Create one to run every day
7.	Create a 2nd Job with the following settings:
* **Job Name**: FINAL SLEEP
* **Primary Machine**: ```SMATraining```
* **Command Line**:  
```“C:\Multi-Instance\Accounting\Sleep.cmd” 15```
* **Frequency**: Create one to run every day
* **Dependency**: Requires Dependency on the SLEEP Job
8.	Build the Schedule.
9.	Check the **PERT** View. 
* The **SLEEP** Jobs should be spawned into three Jobs named **SLEEP_MACHINENAME**.

![](../static/imgadvanced/MachineSleep.png)

</details>