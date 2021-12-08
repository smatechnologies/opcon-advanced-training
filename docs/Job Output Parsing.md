---
sidebar_label: 'Job Output Parsing'
hide_title: 'false'
---

## Job Output Parsing

<a href="imgadvanced/JobOutputParsingMainScreen.png" target="_blank"><img src="imgadvanced/JobOutputParsingMainScreen.png" width="500"></img></a>   

###### (Click Image to Enlarge)

---

### Job Output Parsing Components

* Search Operator
    * Contains
    * Does Not Contain
* String to Search
* Exit Code
* Custom Application Log
    * WS_FTP Pro

<a href="imgadvanced/Contains.png" target="_blank"><img src="imgadvanced/Contains.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### Job Output Parsing Results 

* Both **Error** and **Failed** can be found in the Job Output but only one Exit Code can be passed
* Job Output Parsing Order
    * Top String's Exit Code
    * 2nd String's Exit Code
    * Etc.
    * Actual Job Output if no Error Messages were found

<a href="imgadvanced/ParsingResults.png" target="_blank"><img src="imgadvanced/ParsingResults.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### Job Output Parsing - Custom Application Log

* Some Applications do not write to the Job Output and instead write to their own Logs
* The **Custom Application Log** field can tell OpCon which Log File to read when scanning for error messages

<a href="imgadvanced/CustomLog.png" target="_blank"><img src="imgadvanced/CustomLog.png" width="500"></img></a>   

###### (Click Image to Enlarge)