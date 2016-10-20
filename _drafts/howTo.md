---
layout: post
title: how to
---
###Head to the profile pages
[Bill Bunkum Profile](https://billbunkum.github.io/ "Bill Bunkum main")
[Kelly Wright Profile](http://www.kellyinnovation.com/ "Kelly Wright main")

#How to...set it all up

## Flask

###1. set up git repo/file structure
    `$ mkdir <project name>
    $ pushd <project name> 
    $ git init`

    + create a new repo in GitHub; clone the *url* or *ssh link*
    `$ git remote add origin <cloned url>`
    // make first add/commit/push
    $ git add .
    $ git commit -m "initial commit"
    $ git push origin master`

###2. set up virtual environment


###3. requirements.txt
    `pip install flask`
    `pip install -p python3.5`


###4. run.py
    `from app import app

    app.run(debug=True)`

###5. running/debugging a Flask project

1. `$ python run.py`
