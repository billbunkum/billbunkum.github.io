# Bill Bunkum's online portfolio
+ The focus of this site is to showcase several projects which I completed during my bootcamp; we engaged in three kinds of projects:
    1. Solo projects
        1. Final Projects
            * We formulated the idea and coded the project on our own
            * Our lead instructor gave us help using Gulp & Webpack
        2. Guided
            * We were given definitive parameters and deadlines on what to create
            * Problem-solving would take the form of online searches, helping out cohort members and talking through (rubber-ducking) problems with teachers.
    2. Pair-programming
        * Random pairs were selected and we were given a task(s) to complete within a certain amount of time (usually 1-3 days)
        * We focused on a Git, Trello, Slack work-flow and a Scrum methodology
        * Groups would present projects to the class upon completion followed up by a brief critique
    3. Guided coding
        * Our lead instructor would walk us through a new technology or tool
        * We would match what he did asking questions as we went
        * We would attempt to extend/mutate the results

## CONSTRUCTION! Beware.
+ Bear in mind, I am hot off the heels of our Bootcamp final project and am now re-vamping this site with all the fancy tools I learned over the past 3 months!

# billbunkum.github.io
+ A profile page for the projects I accomplished during the 12-week Awesome Inc. U. Bootcamp which ran from September 2016 to November 2016.

+ During the Monday thru Friday, 8am-5pm course, I was introduced to a variety of current, web development practices, methodologies, languages and frameworks. All told, I achieved over 500 hours of coding experience just from the Bootcamp. 

+ Please, find a comprehensive list of the coursework material [here]({{ site.projects-list }}{% post_url /2016-10-18-projectsList.html %}).

## Thoughts about DESIGN
+ currently in developer-blog

## Thoughts about DEVELOPMENT
+ currently in developer-blog


## List of web links
+ github: https://github.com/billbunkum
+ stackoverflow: http://stackoverflow.com/users/6580955/billbunkum
+ linkedin: http://www.linkedin.com/in/billbunkum 
+ twitter: https://twitter.com/billbunkum 
+ blog: http://billbunkum.blogspot.com 

### Local stuff
* jekyll site w/ outbound links
* deployed on GitHub Pages @ https://billbunkum.github.io
+ $jekyll serve
+ url localhost:4000

### Compass
+ Use compass to organize CSS/SCSS files

#### SCSS 
+ Using this structure as a boiler plate 'reference' while I learn the ropes of SCSS & Compass
+ Referencing: [johnWLong](http://thesassway.com/beginner/how-to-structure-a-sass-project)

***
    stylesheets/
    |
    |-- modules/              # Common modules
    |   |-- _all.scss         # Include to get all modules
    |   |-- _utility.scss     # Module name
    |   |-- _colors.scss      # Etc...
    |   ...
    |
    |-- partials/             # Partials
    |   |-- _base.sass        # imports for all mixins + global project variables
    |   |-- _buttons.scss     # buttons
    |   |-- _figures.scss     # figures
    |   |-- _grids.scss       # grids
    |   |-- _typography.scss  # typography
    |   |-- _reset.scss       # reset
    |   ...
    |
    |-- vendor/               # CSS or Sass from other projects
    |   |-- _colorpicker.scss
    |   |-- _jquery.ui.core.scss
    |   ...
    |
    -- main.scss            # primary Sass file
***

+ Granted, I'm not currently using much 3rd party CSS or weird `mixin` declarations, so there's no need for `vendor/` or `modules/`.
+ I have `sass/` which includes all the .scss files & their dirs pre-compiled by Compass. Compass then sends these over to `stylesheets/` and builds the hierarchy.
+ My current structure (which has been compiled) includes:

***
    stylesheets/
    |
    |-- partials/
    |   |-- _base.scss
    |   |-- _header.scss
    |   |-- _buttons.scss
    |   |-- _typography.scss
    |   |-- _footer.scss
    |
    |-- importer.scss         # primary Sass file
***

+ SCSS commands I'm playing w/ are found [here in the Sass-guide](http://sass-lang.com/guide).
    1. @extends
    2. @mixin
    3. Nesting (a SCSS technique)

### Still coding!