# Beep-Boop

#### _Beep-Boop Application, 6/14/2019_

#### By _**Holden Clark**_

## Description

_A website which takes a user input number and returns a range of numbers or values depending on the ruleset described in the specs section below._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns range of numbers starting at 0 up until and including the user's number** | 3 | 0, 1, 2, 3 |
| **Returns "Beep!" for the number 1** | 1 | Beep! |
| **Returns "Boop!" for the number 2** | 2 | Boop! |
| **Returns "I'm sorry, Dave. I'm afraid I can't do that." for the number 3** | 3 | I'm sorry, Dave. I'm afraid I can't do that. |
| **Returns "Beep!" for any number containing the digit 1** | 11 | Beep! |
| **Returns "Boop!" for any number containing the digit 2** | 22 | Boop! |
| **Returns "I'm sorry, Dave. I'm afraid I can't do that." for any number containing the digit 3** | 33 | I'm sorry, Dave. I'm afraid I can't do that. |
| **Follows all above rules while returning range of numbers from 0 up to and including user's number. If a rule is further down in the above list, it takes precedence over the rules coming before it in the case of a conflict** | 5 | 0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5 |

## Setup/Installation Requirements

* _Clone this repository_
* _Open "index.html" in your web browser of choice_
* _Enter a number value then press the "BEEP" button_

## Known Bugs

* No known bugs at this time.

## Support and contact details

_If you have any questions, ideas, concerns, or would like to contribute in some way, feel free to e-mail me at HoldenJ_C@yahoo.com_

## Technologies Used

_HTML,_
_CSS,_
_Bootstrap,_
_JavaScript,_
_jQuery,_
_Atom,_
_GitHub,_
_GitBash,_
_Google Chrome_

### License

Copyright (c) 2019 **_Holden Clark_**

This website is licensed under the MIT license.

[Link to this project's gh-pages on GitHub](https://holdenjc.github.io/beep-boop/)
