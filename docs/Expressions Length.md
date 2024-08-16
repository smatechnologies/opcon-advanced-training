---
sidebar_label: 'Expressions Length'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

## Property Expressions - Length

Allows the collection of the full length of a specified Property

### Usage:

* Multiple files arrive sporadically throughout day
* Move a file while changing the file extension but keeping the rest of the File Name same
* Combine Length Expression, Arithmetic Expression, and SubString to automatically keep the full Name but change extension

```
[[SI.FILENAME]] = Test.txt

[[=Length([[SI.FILENAME]])]] = 8

[[=(Length([[SI.FILENAME]])-4)]] = 4

[[=SubStr([[SI.FILENAME]],0,Length([[SI.FILENAME]])-4)]] = Test
```

An Expression followed by ```.xlsx``` will change the extension of the file while keeping the first part of the Name

*Most SMA File Monitors also have a way to pass the Root of a File Name while dropping the extension*