# Password-generator-project
In this project I was given skeleton code and requested to refactor it into a password generating applicaiton. With help from a tutor I was able to break it down into two major steps. First, create an array using prompts to determine what types of characters made it into the array. Second, make a for loop with a randomizing function inside of it that generates a letter per loop based upon the character pool I made in the previous step. Then I had to solve two bugs. The first bug was making sure that the password couldn't be less than 8 characters or more than 128, which I solved using additional prompts. The second bug was that if you clicked the generate password button twice, it would append the new password to the previous password. This problem I found out was because I called a variable globally instead of locally.

Here is a screenshot of the application.
![screenshot-of-project](/assets/project-screenshot.jpg)

Here is a link to the deployed application.
https://aahmad1123.github.io/Password-generator-project/
