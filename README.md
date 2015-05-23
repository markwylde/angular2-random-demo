# angular2-random-demo
A random sample angular2 application that generates random information to test

Information
-----------
This really is just me playing about with Angular2. I've dabbled in it before but this is a bit different as Angular2 now has a binary release that you can access at:

    <script src="https://code.angularjs.org/2.0.0-alpha.22/angular2.dev.js"></script>
    
By using `chancejs` it generates a few new rows into a table with random names, which you can then delete by clicking the red button on the right.

Install and Run
---------------
As I've just been playing around, the folder structure, conventions, and style isn't great so just play around until you get it to work. If you make sure you have typescript, node and bower installed just clone the repo into an existing web server documents folder then navigate in your browser.

If you want to edit anything make sure you run the following:

    npm install
    bower install
    tsc -w
    
The last line will watch for typescript changes, so make sure any time you edit the typescript file you either run a compile manually or have that command running in the background.
    
Screenshot
----------
![Screenshot](http://i.imgur.com/v6RYw3U.png)
