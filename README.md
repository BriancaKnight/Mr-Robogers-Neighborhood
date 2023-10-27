Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace number "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0, "Beep"]

Test: "It should replace number "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace number "3" with "Won't you be my neighbor?"
Code: beepBoop(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

Test: "It should turn the inputted number into a string."
Code: beepBoop(1)
Expected Output: ['0', 'Beep!']

Test: "It should replace any number containing a "1"  with "Beep!"
Code: beepBoop(10)
Expected Output: ['0', 'Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep!']