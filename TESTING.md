# Space Quiz - Testing

## Testing

Testing was conducted at several stages throughout the development using Google Chrome Developer tools and later W3C validators.

Early issues identified in meetings with my mentor were:

- Maintaining good comments throughout the code, particularly in Javascript to explain functions.
- Seperating Javascript functions into smaller functions to make them more manageable.
- Storing values so that they can be passed from one page to another.

Later issues on first deploying my website, reviewed with my mentor were:

- Having the leaderboard remain updated/changed after receiving values and not reverting back to original.
- Some styling issues where questions with larger answers would overflow the answers section container.

## CONTENTS

- [Automated Testing](#automated-testing)
- [W3C Validator](#w3c-validator)
- [Lighthouse Testing](#lighthouse-testing)
- [Wave Testing](#wave-testing)
- [Manual Testing](#manual-testing)
- [First Time Visitors](#first-time-visitors)
- [Return Visitors](#return-visitor)
- [History/Samurai Enthusiast](#historysamurai-enthusiast)
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

| Aim                                               | How does the site achieve this?                                                                                                                 |
| :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| Find out more about Oda Nobunaga                  | Each page has tailored content on Nobunaga for different parts of his life.                                                                     |
| Are they key facts presented clearly?             | Dates and key events are highlighted as titles/sub titles with specific styling to make them stand out and aid navigation.                      |
| Use information for research                      | Text and images can be copied and used freely, links to other sites such as youtube for the video provide other avenues for continued research. |
| Mechanism to remind user to return and learn more | Every page has a call to action for the user to sign up to the newsletter to keep engaged/learning more in the future.                          |

#### Return Visitor

| Aim                                                                                | How does the site achieve this?                                                                                                                                                                                                                                                                                                                                                        |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quickly navigate to specific content on Nobunaga without going through enitre site | Every page has a consistent display of a nav bar in the top right to allow users to quickly navigate to a particular time period of interest. Within these, pages are clearly structured and styled to seperate relevant text/images relating to specific time periods. Dates/time are highlighted with a particular styling rule to make them particularly obvious to aid navigation. |
| Mechanism to learn more/keep me updated on particular subject                      | Every page has a call to action to sign up to the website newsletter, within this there is the option to select particular areas of interest.                                                                                                                                                                                                                                          |

#### History/Samurai Enthusiast

| Aim                                                         | How does the site achieve this?                                                                                                                                                                                                        |
| :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigate quickly and easily to military and similar content | Within each page images are used to signpost which sections hold text content on military units/battles/castles/tactics etc. This allows a user to quickly visually identify which elements are likely to be of most interest to them. |
| Stay informed on specific military aspects                  | Every story content page has a call to action to prompt the user to sign up to the newsletter, within this there is the option to select these specific topics and stay updated.                                                       |

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

1. Navbar elements - The navbar elements were challenging to keep centered, particularly in creating the vertical display of items for smaller device screens. My mentor suggested using Flexbox instead of floats/padding and this provided a much simpler way to switch the row into a column at a particular pixel screen size. Some final fine tuning in removing padding at smaller screen sizes keeps the items centered.

2. Hover on Characters - Creating the pseudo class for hovering over the character links was challenging and presented a series of styling issues. Firstly creating a page layout which would display all 3 characters in even sections, then later to create a container which would wrap around the character image, and the date below it. Then the hover class against the container needed to be as circular as possible, without cutting off/overlapping other aspects. Re-coding this section as flexbox helped with this but it took a great of time with Chrome developer tools to identify styling which would display the character links in the desired way on larger and smaller screens. Eventually I deciced to have the characters take a vertical column display at a relatively large screen size which helped resolve the issue.

3. Scaling image size for smaller screens - Finding styling which resized images at smaller mobile-size screens suitably took time, many of the images would extend beyond the rest of the page width, causing a horizontal scroll bar to be displayed. After trying many combinations of padding/margin, I found styling of height: auto with width 100% (or vice versa), in combination with the image being displayed below its corresponding text, was on of the simplest and effective ways to scale images to screen size without impacting aspect ratio.

4. Legacy text and image sections - Whist not strictly a bug, the Betrayal, and in particular the Histroy and Legacy sections on the Legacy page, held a relatively small amount of text compared to the images. This left a lot of blank space below these text sections, which looked a bit odd. Vertically centering the text relative to the image with the align-items flex attribute meant that the text aligned more nicely to the image, but cut off the remaining background area which wasn't occupied by text, giving a mismatch between the top and bottom of the image and the text box. After experimenting with various possible solutions, I opted for a relatively simple padding-top rule for these sections where there is relativley little text compared to the size of the image, this keeps the text aligned better with the image without damaging the consistency of the overall display and navigation.

5. 'Oneliner' - The Story of Japans First Great Unifier - Originally the homepage was just the hero background image below the header, however I felt this was stark and something was needed to break up the image and give an idea on what the website was about. To introduce and position the 'oneliner' section I had to add position attributes to the background to make the oneliner absolute. This introduced issues for responsiveness, however the alternative was to try and float the text, which was difficult over different screen sizes. So although the oneliner required quite a lot of styling for one small aspect of the site, due to its absolute position, I felt this was the most efficient route and am pleased with the end result.

### Known Issues

1. On the homepage, the image for the legacy character, being actually 2 characters not 1, and a larger image just overlaps the black circle which is shown on hover for this link. This is a minor aethestic issue and has no a minor aspect on experince, the alternative to fix this would have meant having a larger circle and link for the legacy character, which would have been inconsistent and caused issues with the structure and styling.

2. Map on Rise Page - This map has proven challenging to get displaying correclty on different screen sizes. To include the entire map on a desktop size screen requires the background-size to be set very small, less than 50%, which looks bad very quickly on any screens smaller than 'full' monitor size. Therefore the background-size increases as a percentage as screen size gets smaller, which keeps the map a good size on the screen itself whilst also loosely maintaining a focus for the map to show the centre, in which Nobunagas territory is surrounded by enemies, which is the whole point of the graphic. However, with the zoom effect, at certain screen sizes parts of the map are cut off at certain points of the zoom. For the most part this isn't too problematic as the key centre of the map with surrounded Nobunaga is always shown, but it is visually distracting at certain screen sizes. I considered removing the zoom all together, but I felt even with some of the text being cut at certain screen sizes, the zoom effect was still good, and helped convey the point of being surrounded, so I kept it in.
   I did explore the possibilty of triggering this zoom effect on scroll, so that the zoom was only triggered when it actually came into view, but this doesn't seem possible without the use of Javascript. The other option was to have the effect triggered on hover, but this could lead to the zoom restarting multiple times if the user was flicking their mouse across the screen which would be very distracting.