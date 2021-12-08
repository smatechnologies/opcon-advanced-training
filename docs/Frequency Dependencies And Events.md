---
sidebar_label: 'Frequency Dependencies And Events'
hide_title: 'false'
---

## Frequency Dependencies and Events

* Each Dependency can be set to a specific Frequency:
    * Job Dependencies
    * Threshold Dependencies
    * Resource Dependencies
    * Expression Dependencies
    * Events

Example:  

* Job A runs every day of the month and requires Job 1 **when** Job 1 is built, but Job 1 only runs on the last day of the Month  
    * An After Dependency could also be used here, but the Requires Dependency tied to a Frequency is more accurate  

### Frequency Events

* The Frequency Related radio button must be selected before an Event is created
* The Frequency selected must be a Frequency used to build a Job for that day
    * If there are overlapping Frequencies, the top Frequency takes precedence

<a href="imgadvanced/FrequencyRelated.png" target="_blank"><img src="imgadvanced/FrequencyRelated.png" width="500"></img></a>   

###### (Click Image to Enlarge)

### Frequency Dependencies

* Job, Threshold, and Resource Dependencies have a Frequency drop-down menu to select the Frequency to which a Dependency is tied
* If no Frequency is selected, the Dependency is tied to all Frequencies for the Job

<a href="imgadvanced/AddFrequencyDependency.png" target="_blank"><img src="imgadvanced/AddFrequencyDependency.png" width="500"></img></a>   

* Frequency based Expression Dependencies have a separate activated text box if Frequency is selected

<a href="imgadvanced/FrequencyListBox.png" target="_blank"><img src="imgadvanced/FrequencyListBox.png" width="500"></img></a>   

###### (Click Images to Enlarge)