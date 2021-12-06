# poker-practice
This app takes a txt file of 500 poker rounds, evaluates Player 1 and 2's hands, and declares a winner.

At the end, it will tally the final score. 

Currently, it scores 458 out of the 500 cases. The remaining cases are because there are ties that need to be decided by the highest value, which I have not yet implemented. 

## Installation

1. Install node.js if you haven't got it
2. Git clone to your machine 
3. Navigate to the root of the application, then run `node index` 


## General feedback:

* Too much reliance on if/else statements. There are other ways of dealing with conditionals.
* There is no input validation on your code.
* There is no unit testing 
* There is some code commenting but could be more

Find more in-depth feedback in the code itself. It will be in comments starting with `FEEDBACK:`