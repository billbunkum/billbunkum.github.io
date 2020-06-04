# Online Portfolio

## Present Day
+ I have returned! to update this portfoliio.
  1. As it's my *portfolio* I suppose it's *important*. In my defense, I was either working remotely for various clients or for a proprietary project and have *not* been able to post any of the code.
  2. I am focusing my efforts currently on a *mobile* project which uses a most interesting language, Flutter.
  3. In the meantime, I am re-vamping my Github portfolio – it's honestly embarrassing to look at, I admit, but that is what happens when you *improve*! So, I suppose it's a good thing that I'm embarrassed?
  4. Expect more changes in the next few months...

## Past Work
+ I am learning and creating these projects currently...
    1. ReactJS
        1. Tutorial projects
    2. AngularJS 5
        1. ClickRage application (deployed on Bitbucket)

## Bootcamp
+ A profile page for the projects I accomplished during the 12-week Awesome Inc. U. Bootcamp which ran from September 2016 to November 2016.

+ During the Monday thru Friday, 8am-5pm course, all told, I achieved over 500 hours of coding experience just from the Full-stack Web Development Bootcamp. 

+ Please, find a comprehensive list of the coursework material [here]({{ site.projects-list }}{% post_url /2016-10-18-projectsList.html %}).
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

## List of web links
+ github: https://github.com/billbunkum
+ stackoverflow: http://stackoverflow.com/users/6580955/billbunkum
+ linkedin: http://www.linkedin.com/in/billbunkum 
+ twitter: https://twitter.com/billbunkum 
+ blog: http://billbunkum.blogspot.com 

## Libraries
1. Jekyll
    + jekyll site w/ outbound links
    + deployed on GitHub Pages @ https://billbunkum.github.io
    + $jekyll serve
    + url localhost:4000

2. Compass
    + Use compass to organize CSS/SCSS files

3. SCSS 
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