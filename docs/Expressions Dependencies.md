---
sidebar_label: 'Expressions Dependencies'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Expression Dependencies

## Overview

* Expressions can be used in places where job dependencies can't be used effectivly.
* Expressions have to be a true statement in order for the dependency to be resolved.

## Usage

* Jobs can run in Multiple Time windows
* Preceeding Job(s) need to be in a specific status in order to run
* We need to count something and use that count to prevent a job from running

:::tip Examples

* Threshold Replacement using Schedule Instance Properties  
    * _Reduces the number of Global Features used in a Schedule_
* Multiple Time Windows in which Job can run

:::