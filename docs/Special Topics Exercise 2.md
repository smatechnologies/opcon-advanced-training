---
sidebar_label: 'Special Topics Exercise 2'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

### Exercise 2 - Job Output Parsing

1.	Create a DOS script with the following Text:

```
echo “This is an example of Job Output Parsing finding an Error and in the Job Output and place the Job in a Failed status.”
```
2.	Create a Schedule named **OUTPUT PARSING**. 
3.	Create a Job to run this ```.bat``` script.
4.	In the Job Output Parsing tab, add the following rules:
```
Search Operator = Contains
String to Search = Error
Exit Code = 901
```
```
Search Operator = Contains
String to Search = Failed
Exit Code = 900
```
5.	Give the Job a Frequency matching today’s date.
6.	Built the Job and check the results.