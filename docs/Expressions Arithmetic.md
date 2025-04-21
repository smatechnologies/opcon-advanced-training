---
sidebar_label: 'Expressions Arithmetic'
hide_title: 'false'
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

# Property Expressions - Arithmetic Operators

## Overview

Operator Expressions allow the use of basic/intermediate arithmetic to alter the values of Properties.

## Syntax

There are a total of 15 but the following are some of the more popular Operators:

* Addition ( + )
* Subtraction ( - )
* Multiplication ( * )
* Division ( / )
* And ( && )
* Or ( || )
* Equal To ( == )

## Usage

* By default, OpCon Property Values are stored as Strings
* Using the ToInt Expression to convert numeric properties to an integer so that you can use them in equations to
  * Add two values together to get a grand total
  * Increment Property: ```+1``` every time a Job runs successfully


:::tip Example 1

* Place the equation in parenthesis ```=ToInt( ... )```
  * ```=ToInt([[1+5]])```
* The equation will be resolved to a value of ```6```

:::

:::tip Example 2

* You can also do more complicated equations like
  * ```=ToInt([[(1+5)/2]])```
* The solution would be resolved by the order of operations: PEMDAS
  * Parenthesis
  * Exponents
  * Multiplication/Division
  * Addition/Subtraction
* The equation would be resolved to a value of ```3```

:::

:::tip Example 3

* Start a token with an equal sign to specify that an Expression is used
  * ```=ToInt([[<Property Name>]])``` where ```<Property Name>``` resolves to a numeric value
* Convert the String to Integer
  * ```=ToInt([[Files Processed]])```
* So to increment the value of **Files Processes** by 5, it would look like
  * ```[[Files Processed]] + 5```

:::

:::tip  Example 4

* We can also use Properties more complicated equations
  * ```[[=(ToInt([[Files Processed]]) + 5)/2)]]```
    * If ```[[Files Processed]] = 1```
    * Then it would resolve as ```[[=ToInt(1+5)/2]]```
  * The Property will be resolved to a value of ```3``` 
* If we need to round the value it will ALWAYS rounds down
  * If ```[[Files Processed]] = 2```
  * Then it would resolve as ```[[=(ToInt(2 + 5)/2)]]```
  * When solved, the answer would be 3
  
:::