# webAPI-quiz
The challenge was to create a multiple choice coding quiz with a timer on the side that is activated after you start the quiz. There was no beginner code for this challenge meaning that the HTML, CSS and Javascript was all from scratch. After the multiple choice questions have finished the scores needed to be saved, stored and shown to the users. The main focus of this task was the use of Javascript and the functionality of the quiz. 

Javascript:
1. For the questions, a variable was created at the start and the questions with the options of answers and the correct answer was laid out. A total of five questions were used for this quiz. 
2. At first the timer has a variable at the start of the code. The timer was created by adding a function element. The timer has an alert element added to allow the user to see when the time has ran out. Additionally, if the user does not get the correct answer then -5 seconds will be deducted from the orignal time. 
3. A for loop element was used in this code for the multiple choice questions to enable the quiz to run. A "if" statement was added to the for loop if the user had chosen a correct and incorrect option from the questions that were set earlier on in the code. Within the if statement, an element was added to enable the user to know if they had selected an incorrect or a correct answer. Additionally, sounds were used to make the quiz more interactive for the user. 
4. A seperate HTML link was added for the high scores. To enable the user to save their high scores, and the option to put their name down. Additionally the function of local storage was used for the users to save their high scores and compare. 

Please refer to a picture of the code quiz below:
![Screenshot of quiz](/assets/codingquizpic.png)

Please refer to the link down below:
https://33hollie33.github.io/webAPI-quiz/
