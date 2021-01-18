# passwordgenerator_week3 

For this [password generator project](https://britaniwalley.github.io/passwordgenerator_week3/.), I went into the code that was provided to see if there was any functionality already available. My first course of action was to make a list of necessary variables to make the website function properly which I did by assessing the HTML provided for naming conventions and then searching W3Schools. 

After I found the proper variables, I started working out the functions. I decided that a writePassword and generatePassword function would both be required to achieve the right outcome of the code. Next, I put the if/else statements into the writePassword function to make sure that when prompted for password criteria, I could click through the options and my choices would be logged. After checking that these were working, I created the generatePassword function. 

Inside the generatePassword function, I made sure all the criteria chosen by the user was being used in the password. To do this, I created a formula that included the array of the chosen characters. After this array was called, it was randomized to the length chosen by the user - the length of specific characters chosen ( ie: uppercase, lowercase, numbers, special characters). Once this was done, the password is generated and displayed in the secure password box. 


![image](https://user-images.githubusercontent.com/74206593/104860812-346bbe80-58ea-11eb-9448-53ce8db55f45.png)
