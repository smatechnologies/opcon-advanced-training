---
sidebar_label: 'Advanced Failure Criteria'
hide_title: 'false'
---

## Advanced Failure Criteria

### Job Output Parsing - Purpose

* Advanced Failure Criteria allows for customizable Exit Code Conditions
    * Failures are still based on Exit Code

* Job Output Parsing
    * Prompts OpCon to scan the **Job Output** upon completion and change an Exit Code to a specified **Exit Code** if the specified String is found anywhere in the **Job Output**  
    * Allows Jobs to scan third party log files for specified Strings

## Advanced Failure Criteria

<a href="imgadvanced/AdvancedFailureCriteria.png" target="_blank"><img src="imgadvanced/AdvancedFailureCriteria.png" width="500"></img></a>   

* Switch Results to **Finished OK**
* Switch Comparison Operator to **Equal To**
* Add a line using **OR** option
* Enter Exit Codes to be considered **Finished OK**

<a href="imgadvanced/NotEqualTo.png" target="_blank"><img src="imgadvanced/NotEqualTo.png" width="500"></img></a>   
<a href="imgadvanced/ExitCodes.png" target="_blank"><img src="imgadvanced/ExitCodes.png" width="500"></img></a>   

###### (Click Images to Enlarge)

### Advanced Failure Criteria - Events

* Events can be sent based on the Exit Code received

<a href="imgadvanced/EventTriggerExitDescription.png" target="_blank"><img src="imgadvanced/EventTriggerExitDescription.png" width="500"></img></a>   

* Each Operating System has rules for Exit Description Names
    * Unix - Use **Contains** unless the Full Exit Code is spelled out
    * Windows - Use the final number
        * ```100``` instead of ```000000000100```

<a href="imgadvanced/TriggerDetailsValue.png" target="_blank"><img src="imgadvanced/TriggerDetailsValue.png" width="500"></img></a>   

###### (Click Image to Enlarge)