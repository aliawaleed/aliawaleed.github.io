# ASSIGNMENT #1: 30MFF WEBSITE

## Project Name

Our Morning Routine

## Project Description

For this project, we were given 30 minutes to create, record and edit a film that would be presented in the same class. This project was done remotely, and since we were a group of 3, we decided to film each part of the video separately in a way where we would all add our input. What we decided to do, with our limited time and space, seeing that I at least was in quarantine while doing it, was that we made a quick step-by-step film of our common morning routine. We started off by having an alarm ring and one of us switch it off all the way to setting up zoom and joining a class. In between, there were a bunch of random actions, the ones I did and filmed were: opening the curtains, brushing my teeth, and getting my quarantine breakfast. 

The film was then taken and embedded in a webpage that I created to house and debut the 30 Minute Film Festival (30MFF). This website is unlike any typical quick website where it somehow seems to look similar like a blog. It is made to be minimalistic and straightforward in a user-friendly way where everything can be accessible on the same page at once, without the need to redirect to other pages. 

## Process

I started off by creating a wireframe for the website on Adobe Xd, and I made sure that it is in the format that I wanted. I made it in a way where as soon as you load the page, you can see the video in the background with a gradient overlay that has the title on top. The user then scrolls down and the "Film", "About" and "Cast" sections appear in a way that is clickable. Once clicked, the corresponding section then appears on the screen and the others disappear. The "About" section displays basically provides a description of the film, the "Cast" section shows an image of us 3, and the "Film" section is also straightfoward, it just displays the film. 

After that, I went ahead and and used Atom to write the code for the website. In the html file, I divided the content into 4 main sections, the first being the main title (30MFF) and then a bigger div container that had the other 3 sections. Them being: the film, the about, and the cast. These were made and done as the description stated earlier in the wireframe. I placed each section in a different div under a class and ID specific to it to be later adjusted in the CSS and JavaScript files. 

After completing each section in the HTML file, I would go ahead and make it look the way I want it to in the CSS file. I had to search for a lot of aspects in order to maintain the positions of elements, especially because I needed some of the text to stay in place and others not. I also adjusted the links in a way that their size would increase when hovered over and kept the color as it was after the link was visited. The z-index was also constantly adjusted to make sure that what I want to have displayed on top always would be. In the JavaScript file, I started the display for the content of the about and cast section as none and changed when they would appear using the getElementbyId() function and choosing what would show and what wouldn't on click (of the headlines).  

## Reflection/Evaluation

