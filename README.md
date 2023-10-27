# Mr. Roger's Neighborhood

#### By Brianca Knight

#### A interface for Mr. Roger's Neighborhood's code translation. 

## Technologies Used

* HTML
* JavaScript
* CSS

## Description

This simple browser aplication translates Mr. Roger's Neighborhood's secret code for the user. Simply enter a number more than 0 and the results will be displayed! 

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html

## Known Bugs

* None.

## License

MIT

Copyright (c) 2023 Brianca Knight

## Tests

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace number '1' with 'Beep'"
Code: beepBoop(1)
Expected Output: [0, "Beep"]

Test: "It should replace number '2' with 'Boop'"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace number '3' with 'Won't you be my neighbor?'"
Code: beepBoop(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

Test: "It should turn the inputted number into a string."
Code: beepBoop(1)
Expected Output: ['0', 'Beep!']

Test: "It should replace any number containing a '1'  with 'Beep!'"
Code: beepBoop(10)
Expected Output: ['0', 'Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep!']

Test: "It should replace any number containing a '3'  with 'Won't you be my neighbor?', regardless if the number contains a '1'"
Code: beepBoop(13)
Expected Output: ['0', 'Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Beep!', 'Won't you be my neighbor?']

Test: "It should replace any number containing a '2' with 'Boop!', unless the number contains a '3' and regardless if the number contains a '1'"
Code: beepBoop(13)
Expected Output: ['0', 'Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

