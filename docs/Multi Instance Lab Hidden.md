---
sidebar_label: 'Multi Instance Lab C HIDDEN'
hide_title: 'false'
---

## Lab C

There are several Jobs within Congo Online Retail’s morning process that require the number of bytes of a specific report. 

There is a different report for each U. S. Warehouse. 

To avoid creating many unnecessary **Global Properties**, Congo Online Retail wants to use **Job Instance Properties** to store the file size.

Create a **Multi-Instance Job** with an **Instance** for the same 6 warehouses used in the previous two labs.

The file sizes we are collecting are:

```
C:\Warehouses\Atlanta_Report.txt
C:\Warehouses\Chicago_Report.txt
C:\Warehouses\Houston_Report.txt
C:\Warehouses\LosAngeles_Report.txt
C:\Warehouses\NewYork_Report.txt
C:\Warehouses\Seattle_Report.txt
```

Create the following ```Embedded Script``` using the ```Command Shell Type```. 
This script will collect the file size and dump a ```$PROPERTY:ADD``` Event into ```MSGIN``` containing the value.

<a href="imgadvanced/1CScript.png" target="_blank"><img src="imgadvanced/1CScript.png" width="500"></img></a>  

###### (Click Image to Enlarge)

At the end of the Schedule setup a **Notification** passing the Warehouse ID, City, and File Size collected.