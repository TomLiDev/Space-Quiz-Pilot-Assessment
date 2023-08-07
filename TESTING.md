# Space Quiz - Testing

## Testing

Testing was conducted at several stages throughout the development using Google Chrome Developer tools and later W3C validators.

Early issues identified in meetings with my mentor were:

- Maintaining good comments throughout the code, particularly in Javascript to explain functions.
- Seperating Javascript functions into smaller functions to make them more manageable.
- Storing values so that they can be passed from one page to another.

Later issues on first deploying my website, reviewed with my mentor were:

- Having the leaderboard remain updated/changed after receiving values and not reverting back to original.
- Some styling issues where questions with larger answers would overflow the answers section.

## CONTENTS

- [Automated Testing](#automated-testing)
- [W3C Validator](#w3c-validator)
- [Lighthouse Testing](#lighthouse-testing)
- [Wave Testing](#wave-testing)
- [Manual Testing](#manual-testing)
- [First Time Visitors](#first-time-visitors)
- [Return Visitors](#return-visitor)
- [Full Testing](#full-testing)
- [Homepage](#homepage)
- [Rise Page](#rise-page)
- [Reign Page](#reign-page)
- [Legacy Page](#legacy-page)
- [Form Page](#form-page)
- [Thank you Page](#thankyou-page)
- [404 Error Page](#404-error-page)
- [Bugs](#bugs)
- [Solved Bugs](#solved-bugs)
- [Known Issues](#known-issues)

## Automated Testing

### W3C Validator

The W3C validator was used to validate all HTML pages and CSS in the style.css.

- [Screenshot of CSS W3C Validated](documentation/css-validated.PNG)
- [Screenshot of index page W3C Validated](documentation/index-validated.PNG)
- [Screenshot of rise page W3C Validated](documentation/rise-validated.PNG)
- [Screenshot of reign page W3C Validated](documentation/reign-validated.PNG)
- [Screenshot of legacy W3C Validated](documentation/legacy-validated.PNG)
- [Screenshot of form page W3C Validated](documentation/form-validated.PNG)
- [Screenshot of thank you page W3C Validated](documentation/thankyou-validated.PNG)
- [Screenshot of 404 error page W3C Validated](documentation/404-validated.PNG)

### Lighthouse Testing

Google chrome Lighthouse tester was used to assess SEO score, acccessibility, conformance to best practices and overall performance. Please use the links below to view scores for each page on desktop or mobile:

#### Homepage Desktop Lighthouse Scores

![Screenshot of homepage desktop lighthouse scores](documentation/index-lighthouse.PNG)

#### Homepage Mobile Lighthouse Scores

![Screenshot of homepage mobile lighthouse scores](documentation/index-lighthouse-mobile.PNG)

#### Rise Desktop Lighthouse Scores

![Screenshot of rise desktop lighthouse scores](documentation/rise-lighthouse.PNG)

#### Rise Mobile Lighthouse Scores

![Screenshot of rise mobile lighthouse scores](documentation/rise-lighthouse-mobile.PNG)

#### Reign Desktop Lighthouse Scores

![Screenshot of reign desktop lighthouse scores](documentation/reign-lighthouse.PNG)

#### Reign Mobile Lighthouse Scores

![Screenshot of reign mobile lighthouse scores](documentation/reign-lighthouse-mobile.PNG)

#### Legacy Desktop Lighthouse Scores

![Screenshot of legacy desktop lighthouse scores](documentation/legacy-lighthouse.PNG)

#### Legacy Mobile Lighthouse Scores

![Screenshot of legacy mobile lighthouse scores](documentation/legacy-lighthouse-mobile.PNG)

#### Form Desktop Lighthouse Scores

![Screenshot of form desktop lighthouse scores](documentation/form-lighthouse.PNG)

#### Form Mobile Lighthouse Scores

![Screenshot of form mobile lighthouse scores](documentation/form-lighthouse-mobile.PNG)

#### Thankyou page Desktop Lighthouse Scores

![Screenshot of thank you page desktop lighthouse scores](documentation/thankyou-lighthouse.PNG)

#### Thankyou page Mobile Lighthouse Scores

![Screenshot of thank you page desktop lighthouse scores](documentation/thankyou-lighthouse-mobile.PNG)

#### Thankyou page Desktop Lighthouse Score with refresh removed

![Screenshot of thank you page desktop lighthouse scores after the refresh had been removed](documentation/thankyou-lighthouse-norefresh-desktop.PNG)

#### Thankyou page Mobile Lighthouse Score with refresh removed

![Screenshot of thank you page mobile lighthouse scores after the refresh had been removed](documentation/thankyou-lighthouse-norefresh-mobile.PNG)

#### 404 Error Page Desktop Lighthouse Scores

![Screenshot of 404 page desktop lighthouse scores](documentation/404-lighthouse.PNG)

#### 404 Error Page Mobile Lighthouse Scores

![Screenshot of 404 page mobile lighthouse scores](documentation/404-lighthouse-mobile.PNG)

#### Findings and Actions

Overall I am very pleased with the Lighthouse scores for my pages. Some of the first pages had lower scores on performance, this is due to there being more jpegs in these pages before I started using webp formats. I did explore swapping these, particularly on the background on the homepage, but whilst changing the images was relatively easy, recreating the styling for each image would simply be too time consuming with the project deadline.

The thankyou page also had a lower accessibilty score than the other pages, which are consistently very high. This was due to the automatic refresh on the page, which could damage the experience of that page for a user who was accessing through a screen reader or similar software. I wanted to keep this auto refresh in as I thought it was a nice feature to bring the user back to the home page, however I increased the time this would happen from 10 to 30 seconds. Although this did not improve the accessibility score, as the meta attribute was still present, it would in practice give a user more time to tab through the text before the screen was refreshed. However following further accessibility testing (see WAVE section below) this automatic refresh was removed altogether.
The Lighthouse scores for the thankyou page including the refresh, and those without show a clear improvement in accessibility when the page does not have the refresh.

In the future I would look to replace all the images with webp format images as this would address most of the performance issues which impact the scores.

### WAVE Testing

Each page was assessed using the WAVE accessibility tool. Every page passed without any errors, please use the links below to view the scores for each page:

- [Homepage WAVE Test](documentation/index-wave.PNG)
- [Rise page WAVE Test](documentation/rise-wave.PNG)
- [Reign page WAVE Test](documentation/reign-wave.PNG)
- [Legacy page WAVE Test](documentation/legacy-wave.PNG)
- [Form page WAVE Test](documentation/form-wave.PNG)
- [Thankyou page WAVE Test with automatic refresh](documentation/thankyou-wave-error.PNG)
- [Thankyou page with refresh removed](documentation/thankyou-wave-fixed.PNG)
- [404 page WAVE Test](documentation/404-wave.PNG)

During this testing the auto-refresh on the thank you page was declared as an error. Because of this, and the impact on accessibility score also seen in Lighthouse testing, I decided to remove the automatic refresh. The page includes a clickable link back the homepage anyway, so the requirement for a user to continue using the site is still met. Whilst this is slightly more seamless with the automatic redirect, with the impact on accessibility and user experience, I felt removing the automatic refresh was the best approach.

## Manual Testing

### Testing User Stories

#### First Time Visitors

| Aim                                                 | How does the site achieve this?                                                                                                                                                                                                   |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Find out how to play the game                       | The how to play option, accessible from the home page, gives clear instruction on how to play the game                                                                                                                            |
| Start the quiz easily                               | The quiz can be started very easily and quickly from the option on the home screen, or immediatly from the the instructions page to save navigating back to the home page                                                         |
| Know which questions I got right and wrong          | Each question highlights the correct answer in green when an answer is clicked on. If the anser that has been clicked is incorrect this is highlighted in red                                                                     |
| Know final score and how I compare to other players | Final score is returned to the player at the end of the quiz with the option to see if that score has been enough to make the leaderboard with a message to confirm whether or not the player has made the leaderboard on viewing |

#### Return Visitor

| Aim                                                    | How does the site achieve this?                                                                                                                                         |
| :----------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quickly understand if my score is still in leaderboard | Every page has the option to navigate to the leaderboard in the nav bar at the top, players can go to view their previous scores at any time without doing another quiz |
| Start a new quiz                                       | A new quiz can be started from the home screen, or directly from the leaderboard, to save having to go to the home page                                                 |

## Full Testing

Full testing of the website was performed on a Dell optiplex desktop on 25 inch Toshiba and Soundwave monitors, Dell Lattitude 5510 14 inch screen laptop, iPad 8th generation, Samsung Galaxy S10, iPhone 14 pro.

Google chrome developer tools was also used to text at a range of different pixel sizes.

Testing was conducted using Google Chrome, MS Edge and Safari.

### Homepage

| Feature/Function            | Expected Outcome                                                                                                    | Method of Test    | Result                                          | Pass/Fail |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------- | :---------------------------------------------- | :-------- |
| NAVBAR                      |                                                                                                                     |                   |                                                 |
| Oda Nobunaga Link           | Return/refresh home page on click                                                                                   | Clicked link      | Returned to home                                | Pass      |
| Oda Nobunaga Hover          | Underline appears under text.                                                                                       | Hovered over link | Underline appeared                              | Pass      |
| RISE Link                   | Return/refresh to Rise page on click                                                                                | Clicked link      | Returned to Rise page                           | Pass      |
| RISE Hover                  | Underline appears under text.                                                                                       | Hovered over link | Underline appeared                              | Pass      |
| REIGN Link                  | Return/refresh to Reign page on click                                                                               | Clicked link      | Returned to Reign page                          | Pass      |
| REIGN Hover                 | Underline appears under text.                                                                                       | Hovered over link | Underline appeared                              | Pass      |
| LEGACY Link                 | Return/refresh to Legacy page on click                                                                              | Clicked link      | Returned to Legacy page                         | Pass      |
| LEGACY Hover                | Underline appears under text.                                                                                       | Hovered over link | Underline appeared                              | Pass      |
| FOOTER                      |                                                                                                                     |                   |                                                 |
| Facebook Icon Link          | Opens Facebook in seperate browser on click                                                                         | Clicked icon      | Opened Facebook in seperate tab                 | Pass      |
| Instagram Icon Link         | Opens Instagram in seperate browser on click                                                                        | Clicked icon      | Opened Instagram in seperate tab                | Pass      |
| Twitter Icon Link           | Opens Twitter in seperate browser on click                                                                          | Clicked icon      | Opened Twitter in seperate tab                  | Pass      |
| Linkedin Icon Link          | Opens Linkedin in seperate browser on click                                                                         | Clicked icon      | Opened Linkedin in seperate tab                 | Pass      |
| HOMEPAGE                    |                                                                                                                     |                   |                                                 |
| Rise Character Link         | When clicked user will be redirected to Rise page                                                                   | Clicked link      | Redirected to Rise page                         | Pass      |
| Rise Character Link Hover   | When hovering over Rise page link a black border will be displayed around the character and date immediatly below   | Hover over link   | Black border appeared around character and date | Pass      |
| Reign Character Link        | When clicked user will be redirected to Reign page                                                                  | Clicked link      | Redirected to Reign page                        | Pass      |
| Reign Character Link Hover  | When hovering over Reign page link a black border will be displayed around the character and date immediatly below  | Hover over link   | Black border appeared around character and date | Pass      |
| Legacy Character Link       | When clicked user will be redirected to Legacy page                                                                 | Clicked link      | Redirected to Legacy page                       | Pass      |
| Legacy Character Link Hover | When hovering over Legacy page link a black border will be displayed around the character and date immediatly below | Hover over link   | Black border appeared around character and date | Pass      |
| FORM LINK                   |                                                                                                                     |                   |                                                 |           |
| Sign Up Link                | When clicked the sign up link will redirect the user to the sign up form                                            | clicked link      | redirected to form                              | Pass      |
| Sign Up Link Hover          | When hovering over sign up link the text will be underlined                                                         | Hover over link   | Underline appeared                              | Pass      |

### Rise Page

| Feature/Function    | Expected Outcome                                                         | Method of Test    | Result                           | Pass/Fail |
| :------------------ | :----------------------------------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR              |                                                                          |                   |                                  |
| Oda Nobunaga Link   | Return/refresh home page on click                                        | Clicked link      | Returned to home                 | Pass      |
| Oda Nobunaga Hover  | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| RISE Link           | Return/refresh to Rise page on click                                     | Clicked link      | Returned to Rise page            | Pass      |
| RISE Hover          | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| REIGN Link          | Return/refresh to Reign page on click                                    | Clicked link      | Returned to Reign page           | Pass      |
| REIGN Hover         | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| LEGACY Link         | Return/refresh to Legacy page on click                                   | Clicked link      | Returned to Legacy page          | Pass      |
| LEGACY Hover        | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| FOOTER              |                                                                          |                   |                                  |
| Facebook Icon Link  | Opens Facebook in seperate browser on click                              | Clicked icon      | Opened Facebook in seperate tab  | Pass      |
| Instagram Icon Link | Opens Instagram in seperate browser on click                             | Clicked icon      | Opened Instagram in seperate tab | Pass      |
| Twitter Icon Link   | Opens Twitter in seperate browser on click                               | Clicked icon      | Opened Twitter in seperate tab   | Pass      |
| Linkedin Icon Link  | Opens Linkedin in seperate browser on click                              | Clicked icon      | Opened Linkedin in seperate tab  | Pass      |
| FORM LINK           |                                                                          |                   |                                  |           |
| Sign Up Link        | When clicked the sign up link will redirect the user to the sign up form | clicked link      | redirected to form               | Pass      |
| Sign Up Link Hover  | When hovering over sign up link the text will be underlined              | Hover over link   | Underline appeared               | Pass      |

### Reign Page

| Feature/Function    | Expected Outcome                                                         | Method of Test      | Result                           | Pass/Fail |
| :------------------ | :----------------------------------------------------------------------- | :------------------ | :------------------------------- | :-------- |
| NAVBAR              |                                                                          |                     |                                  |
| Oda Nobunaga Link   | Return/refresh home page on click                                        | Clicked link        | Returned to home                 | Pass      |
| Oda Nobunaga Hover  | Underline appears under text.                                            | Hovered over link   | Underline appeared               | Pass      |
| RISE Link           | Return/refresh to Rise page on click                                     | Clicked link        | Returned to Rise page            | Pass      |
| RISE Hover          | Underline appears under text.                                            | Hovered over link   | Underline appeared               | Pass      |
| REIGN Link          | Return/refresh to Reign page on click                                    | Clicked link        | Returned to Reign page           | Pass      |
| REIGN Hover         | Underline appears under text.                                            | Hovered over link   | Underline appeared               | Pass      |
| LEGACY Link         | Return/refresh to Legacy page on click                                   | Clicked link        | Returned to Legacy page          | Pass      |
| LEGACY Hover        | Underline appears under text.                                            | Hovered over link   | Underline appeared               | Pass      |
| FOOTER              |                                                                          |                     |                                  |
| Facebook Icon Link  | Opens Facebook in seperate browser on click                              | Clicked icon        | Opened Facebook in seperate tab  | Pass      |
| Instagram Icon Link | Opens Instagram in seperate browser on click                             | Clicked icon        | Opened Instagram in seperate tab | Pass      |
| Twitter Icon Link   | Opens Twitter in seperate browser on click                               | Clicked icon        | Opened Twitter in seperate tab   | Pass      |
| Linkedin Icon Link  | Opens Linkedin in seperate browser on click                              | Clicked icon        | Opened Linkedin in seperate tab  | Pass      |
| FORM LINK           |                                                                          |                     |                                  |           |
| Sign Up Link        | When clicked the sign up link will redirect the user to the sign up form | clicked link        | redirected to form               | Pass      |
| Sign Up Link Hover  | When hovering over sign up link the text will be underlined              | Hover over link     | Underline appeared               | Pass      |
| VIDEO               |
| Video play function | When clicked the video will play with audio                              | clicked play button | video started with audio         | Pass      |

### Legacy Page

| Feature/Function    | Expected Outcome                                                         | Method of Test    | Result                           | Pass/Fail |
| :------------------ | :----------------------------------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR              |                                                                          |                   |                                  |
| Oda Nobunaga Link   | Return/refresh home page on click                                        | Clicked link      | Returned to home                 | Pass      |
| Oda Nobunaga Hover  | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| RISE Link           | Return/refresh to Rise page on click                                     | Clicked link      | Returned to Rise page            | Pass      |
| RISE Hover          | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| REIGN Link          | Return/refresh to Reign page on click                                    | Clicked link      | Returned to Reign page           | Pass      |
| REIGN Hover         | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| LEGACY Link         | Return/refresh to Legacy page on click                                   | Clicked link      | Returned to Legacy page          | Pass      |
| LEGACY Hover        | Underline appears under text.                                            | Hovered over link | Underline appeared               | Pass      |
| FOOTER              |                                                                          |                   |                                  |
| Facebook Icon Link  | Opens Facebook in seperate browser on click                              | Clicked icon      | Opened Facebook in seperate tab  | Pass      |
| Instagram Icon Link | Opens Instagram in seperate browser on click                             | Clicked icon      | Opened Instagram in seperate tab | Pass      |
| Twitter Icon Link   | Opens Twitter in seperate browser on click                               | Clicked icon      | Opened Twitter in seperate tab   | Pass      |
| Linkedin Icon Link  | Opens Linkedin in seperate browser on click                              | Clicked icon      | Opened Linkedin in seperate tab  | Pass      |
| FORM LINK           |                                                                          |                   |                                  |           |
| Sign Up Link        | When clicked the sign up link will redirect the user to the sign up form | clicked link      | redirected to form               | Pass      |
| Sign Up Link Hover  | When hovering over sign up link the text will be underlined              | Hover over link   | Underline appeared               | Pass      |

### Form Page

| Feature/Function      | Expected Outcome                                                                             | Method of Test                               | Result                                                  | Pass/Fail |
| :-------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------- | :------------------------------------------------------ | :-------- |
| NAVBAR                |                                                                                              |                                              |                                                         |
| Oda Nobunaga Link     | Return/refresh home page on click                                                            | Clicked link                                 | Returned to home                                        | Pass      |
| Oda Nobunaga Hover    | Underline appears under text.                                                                | Hovered over link                            | Underline appeared                                      | Pass      |
| RISE Link             | Return/refresh to Rise page on click                                                         | Clicked link                                 | Returned to Rise page                                   | Pass      |
| RISE Hover            | Underline appears under text.                                                                | Hovered over link                            | Underline appeared                                      | Pass      |
| REIGN Link            | Return/refresh to Reign page on click                                                        | Clicked link                                 | Returned to Reign page                                  | Pass      |
| REIGN Hover           | Underline appears under text.                                                                | Hovered over link                            | Underline appeared                                      | Pass      |
| LEGACY Link           | Return/refresh to Legacy page on click                                                       | Clicked link                                 | Returned to Legacy page                                 | Pass      |
| LEGACY Hover          | Underline appears under text.                                                                | Hovered over link                            | Underline appeared                                      | Pass      |
| FOOTER                |                                                                                              |                                              |                                                         |
| Facebook Icon Link    | Opens Facebook in seperate browser on click                                                  | Clicked icon                                 | Opened Facebook in seperate tab                         | Pass      |
| Instagram Icon Link   | Opens Instagram in seperate browser on click                                                 | Clicked icon                                 | Opened Instagram in seperate tab                        | Pass      |
| Twitter Icon Link     | Opens Twitter in seperate browser on click                                                   | Clicked icon                                 | Opened Twitter in seperate tab                          | Pass      |
| Linkedin Icon Link    | Opens Linkedin in seperate browser on click                                                  | Clicked icon                                 | Opened Linkedin in seperate tab                         | Pass      |
| FORM ELEMENTS         |
| First Name suggestion | When clicked, suggests options for names from previous forms                                 | Clicked field                                | Suggestions appeared                                    | Pass      |
| First Name Validation | If not filled out, form will not allow submission                                            | Clicked submit form without first name       | Form didn't submit, prompted to fill out relevant field | Pass      |
| Last Name suggestion  | When clicked, suggests options for names from previous forms                                 | Clicked field                                | Suggestions appeared                                    | Pass      |
| Last Name Validation  | If not filled out, form will not allow submission                                            | Clicked submit form without last name        | Form didn't submit, prompted to fill out relevant field | Pass      |
| Interest checkbox(es) | When clicked, checkbox will appear with a tick inside it                                     | Clicked checkboxes                           | Checkboxes displayed with tick inside                   | Pass      |
| Email suggestion      | When clicked, suggests options for emails from previous forms                                | Clicked field                                | Suggestions appeared                                    | Pass      |
| Email Validation      | If not filled out, form will not allow submission                                            | Clicked submit form without email filled out | Form didn't submit, prompted to fill out email field    | Pass      |
| Submit                | When clicked, if required fields are filled out, redirects user to thankyou page             | Clicked with fields completed                | Redirected to thankyou page                             | Pass      |
| Submit Hover          | When hovering mouse over submit button text will appear underlined with border around button | Hovered mouse over submit button             | Text appeared underlined, border appeared around button | Pass      |

### Thankyou Page

| Feature/Function          | Expected Outcome                                             | Method of Test    | Result                           | Pass/Fail |
| :------------------------ | :----------------------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR                    |                                                              |                   |                                  |
| Oda Nobunaga Link         | Return/refresh home page on click                            | Clicked link      | Returned to home                 | Pass      |
| Oda Nobunaga Hover        | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| RISE Link                 | Return/refresh to Rise page on click                         | Clicked link      | Returned to Rise page            | Pass      |
| RISE Hover                | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| REIGN Link                | Return/refresh to Reign page on click                        | Clicked link      | Returned to Reign page           | Pass      |
| REIGN Hover               | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| LEGACY Link               | Return/refresh to Legacy page on click                       | Clicked link      | Returned to Legacy page          | Pass      |
| LEGACY Hover              | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| FOOTER                    |                                                              |                   |                                  |
| Facebook Icon Link        | Opens Facebook in seperate browser on click                  | Clicked icon      | Opened Facebook in seperate tab  | Pass      |
| Instagram Icon Link       | Opens Instagram in seperate browser on click                 | Clicked icon      | Opened Instagram in seperate tab | Pass      |
| Twitter Icon Link         | Opens Twitter in seperate browser on click                   | Clicked icon      | Opened Twitter in seperate tab   | Pass      |
| Linkedin Icon Link        | Opens Linkedin in seperate browser on click                  | Clicked icon      | Opened Linkedin in seperate tab  | Pass      |
| THANKYOU LINK TO HOMEPAGE |
| Link to homepage          | When clicked redirects user to homepage                      | Clicked link      | Redirected to homepage           | Pass      |
| Hover on homepage link    | When hovering over text should be underlined with black line | Hovered over link | Black underline appeared         | Pass      |

### 404 Error Page

| Feature/Function       | Expected Outcome                                             | Method of Test    | Result                           | Pass/Fail |
| :--------------------- | :----------------------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR                 |                                                              |                   |                                  |
| Oda Nobunaga Link      | Return/refresh home page on click                            | Clicked link      | Returned to home                 | Pass      |
| Oda Nobunaga Hover     | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| RISE Link              | Return/refresh to Rise page on click                         | Clicked link      | Returned to Rise page            | Pass      |
| RISE Hover             | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| REIGN Link             | Return/refresh to Reign page on click                        | Clicked link      | Returned to Reign page           | Pass      |
| REIGN Hover            | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| LEGACY Link            | Return/refresh to Legacy page on click                       | Clicked link      | Returned to Legacy page          | Pass      |
| LEGACY Hover           | Underline appears under text.                                | Hovered over link | Underline appeared               | Pass      |
| FOOTER                 |                                                              |                   |                                  |
| Facebook Icon Link     | Opens Facebook in seperate browser on click                  | Clicked icon      | Opened Facebook in seperate tab  | Pass      |
| Instagram Icon Link    | Opens Instagram in seperate browser on click                 | Clicked icon      | Opened Instagram in seperate tab | Pass      |
| Twitter Icon Link      | Opens Twitter in seperate browser on click                   | Clicked icon      | Opened Twitter in seperate tab   | Pass      |
| Linkedin Icon Link     | Opens Linkedin in seperate browser on click                  | Clicked icon      | Opened Linkedin in seperate tab  | Pass      |
| LINK TO HOMEPAGE       |
| Link to homepage       | When clicked redirects user to homepage                      | Clicked link      | Redirected to homepage           | Pass      |
| Hover on homepage link | When hovering over text should be underlined with black line | Hovered over link | Black underline appeared         | Pass      |

## Bugs

### Solved Bugs

1. Passing Variables from Page to Page - Finding a reliable method to pass a variable value from one page to another took considerable time. Initially I explored using a 'hidden' HTML element somewhere on the page to store the values which could then be retrieved, but this was clunky and not a good solution. Eventually using the session storage proved the best solution as this allowed values such as username and final score to be passed across the pages, but would not be stored permanently as with local storage. It took time to get this to work as intended as it wasn't clear for some time that with session.storage, the variable must be retrieved and declared for each page/function that needs to use it.

2. Question Selection - A method of getting questions from the question bank to display to the user was a challenge. I wanted this order of questions to be different each time so the quiz stayed interesting. Initially I explored using a random number generating function, then using this number to select a question object from the question bank, put this question into an array, then have this array populate the questions and answers fields as the user selected answers. This method could have probably been made to work, but would have had the issue of making sure the same question was not selected twice. On discussing it with my mentor, he suggested the Fisher-Yates shuffle algorithm. After investigating, this was a neater solution as it created a completely randomised selection of questions from the existing question bank, which meant a simple i++ loop could be used to cycle through the questions. As long as the shuffle function was run at the beginning of each quiz the order of questions would be different and there was no chance the same question could be asked twice.

3. Highlighting on Correct/Incorrect Answer - I wanted to introduce some visual colour highlighting to the user to make the quiz more visually exciting and give a clear indication on which questions they have answered correclty and which they have not.

4. Answer one question multiple times - For the correct/incorrect styling described above, I wanted the user to have a short period of time to view their answer and whether or not this was correct before the quiz loaded the next question. To do this I simple introduced a short timer from the point on an answer being clicked, until the next question is loaded. This worked well for the styling, a simple 2 second delay worked well to view the styling. However it did introduce the possibility that a user could click multiple answers for the same question, creating a large score from one question. This also has the knock on effect that if a user clicked the correct answer say 4 times, they would get a score of 40 for only answering one question correctly, but also then the quiz would immedialty load through the next 4 questions in quick succession, essentially breaking the quiz. The simple solution would be to remove the delay and have the next question load immediatly when an answer was clicked, but this would make any correct/incorrect answer styling impossible. My mentor suggested a simple solution of disabling the buttons, which I was unaware existed. Having this come into effect when the answer was clicked, and then set back to enabled when the next question was loaded, solved the issue and allowed me to keep the correct/incorrect styling.

5. Leaderboard Ranking - Creating the leaderboard was challening, in particular having a new score and username enter the leaderboard in the correct row and move the other scores accordingly. After trying many different options I eventually found a solution on a stack overflow page which showed how to compare and sort objects in an array by the values of a particular property in that array. This allowed me to create an array from the scores already in the leaderboard, pop the lowest score off this array, enter the new score, sort the array so that the new score was placed in its corresponding rank. Then these values can be fed back into the leaderboard to create a new, updated leaderboard with the users name and score in the correct rank.

### Known Issues

1. The home icon in the nav bar underlines the world icon as well as the text of home. This is a minor aesthetic bug and has no real impact on the game or user experience. Given time I would have seperated the icon from the rest of the anchor tag, which wraps around the text and icon. I didn't do this because seperating them out would have created 3 items on the nav bar, which due to the styling would have appeared spread across the nav bar which wouldn't look very good. Given more time I would have explored seperating these and introducing style rules which kept them in relative place through different device screen sizes, but given the minor nature of the issue and time pressures this wasn't possible.

2. Map on Rise Page
