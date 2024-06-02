# **Personal Portfolio**

#### https://www.youtube.com/watch?v=WqQB5rB1rRo

#### This is a personal portfolio website that I intend to use when job hunting.  On this site I will host different projects that I will create over the years. 

There are two pages: an index page and a contact me page.  The index page has a description of myself and the contact me page has contact information.  I had two major struggles in the creation of this website.  First, I struggled with getting the border right.  Second I struggled with getting the logos to achieve the desired color when moused over.

Issue one:
I wanted to include a border that was effectively a top left corner and a bottom right corner with the remaining corners being transparent.  I figured out how to do this by using the background-image property in css.  I then set that property to be a gradient fading from a teal color to transparency.  This gives it the illusion that there is just a corner when in reality it's a full box with only the top left corner visibile.  However, this property cannot go from color to transparency and back to color so that I could also have a bottom right corner.  After many hours of brainstorming I came up with the idea of simply creating a second identical border, but have this one fade from bottom right to top left.  Then I set it's z-index to a different value than the first border.  This creates the two corners I wanted.  

Issue two:
I wanted the clickable icons on my page to be white and then turn teal when moused over.  I have some experience in photoshop so I used it to create the logos that you see on my pages.  They are png files.  Originally, I thought I could just apply an "on hover" css styling to change their color.  However, I learned that the color property cannot be applied to images; only filters can be applied to images.  My workaround for this was to create a second set of png logs identical to the first, but have their color be the desired teal instead of white.  Then I positioned these logos on top of the white versions.  Next, I set the white versions to be opaque when not moused over and transparent when moused over.  Lastly, I set the teal versions to be transparent when not moused over and opaque when moused over.  This creates the illusions that the button lights up when moused over when in reality it's two separate images with their transparency being toggled.

Unfortunately, I had some struggles after the creation of my project with getting it properly hosted.  I came into cs50 with 0 computer science or programming experience.  I had never worked with github, website hosting, or anything of the like.  I struggled to figure out how to upload this project to github and when I did finally get it uploaded the formatting was wrong and the links do not work. On my local machine everything is perfect including the formatting and the links.  I spent hours troubleshooting and watched many tutorials to try to solve this problem.  In spite of that I could not get the github version to be equivalent to my local machine's version.  I have no idea what I did wrong on the github side, but one day I will figure it out.

In spite of these issues I am very happy with how the website turned out and I am very grateful to CS50 for this course!
