# index1.html
Nest JS build on top of node js

http server alway use express JS

typescript + express very essential for us to build the backend

important thing about Nest JS ->Modules( more like a folder structure)

Nest JS teach us how to writing the code , and put each important part in each folder( very useful)

Middleware little bit exception

E filters a little bit

pipes not so much

Guard only when we need authoziation( depend on project need it or not)

GraphQL not gonna use on this project

CLI maybe use

Recipes : there's a CRUD generator it simple and original, Node JS doesn't have this doesn't provide

we can generate a lot of files "Nest-g- resource is gonna build everthing for us"

Database very important (need to use TYPEORM)

# index2.html
1.we learn to build E-commerce full stack website
    will use front-end Angular
                  back-end NestJS
                  Database postgressSQL
                  Hosting Digital ocean
      we have two version mobile-desktop page(PC)
2.task about project desgins, ideal, and the flow
    Figma design showcase :home page,product page,product detail page(PC)
    
                          :landing page,home page, product page, product detail page(mobile)
                          
    framework used        :front end-Angular is focused more on modular and the folder structures
    
                          :back end-NestJS is using typescript to make sure you codes everthing work correctly, also nestJS its a nodejs framework
                          
                          :digital ocean easy set up for database&hosting
                          
3.local development and environment setup
                          download nodejs+visual studio code
4.section 1 wrap up
                     talk about how we gonna build this full stack e-commerce website
                     
                     talk about why need to using each frameworks like angular,nestJS, everthing was built on top of nodejs
                     
                     talk about how we gonna do very simple local environment set up
                     
          explained:
                     talk about backend(nestjs) in order to build the entire project need to have "database and the backend"(build API SERVICE)
                     
# index3.html
6.talk about CSS HTML.JavaScript(important)learn basic visual 

        codedownload live server in extension
        
        learn to type basic code "h1,link,shift+1"( basic HTML Skeleton)
        
        co dau luon co duoi( head-head, body-body,html-html)
        
        learn created CSS file , CSS its the language we are going to describe the entrie web pagehow its gonna represent the color, font 
        size, bigger font,smaller font,display the text, the background color,....
        
        code link la noi ve duong dan link cua file CSS ":href="/index.css"
        
        JavaScript we just need the basics 
        
        script code
# index4.html
7. nestJS setup &postman

        learn to find terminal in your system
        
        install environment nestjs
        
        postman is a tool, its a software, when we develop backend, we need to fetch data from backend or
        
        when we develop a local, evironment for backend need to use software
        
 8. database environment setup for postgresSQL
        
        download postgresSQL
        
        PG admin.org its a visualized database management tool
9. Nodejs express and server practice

        learn how to use terminal
        
        notice regular server look like, and how to code
        
        npm init -y command for you to generate a file package.json
        
        npm i express command
        
        create new file server.js
        
        use code a too naming a new variable called 'express', "require some thing" the express is coming from the "node module"
        
        console log in the backend
        
        press control +C to get out of the terminal
        
        learn the second important thing app.get(),app.listen()
        
        learn how to send the HTML file back to browser inside your server.js
 # index5.html
 10. create nestJS project

        nest new (named anything you like)-test
        
        choose package npm
        
        notice "dependencies" " start " important
        
11.1 nestJS folder structure &how each file works
        
        module system :
        
        "async function" its a coding keyword
        
        "bootstrap()" it mean its to change the name
        
        "function" is how we gonna write  the codes
        
        "const  app"mean we gonna name a new variable
        
        "@nestjs/core" this is officaly package nest JS framework provied for us
        
        "nest factory" get it out from here and used right here that why we import from nestJS
        
        "app.module" we get it out from file.slash
        
        (app controller , app service, app module) coming from another file  "ts."
        
        notice is there line doesnt have nestjs then they are not from officaly package
        
        "export" is mandatory key word you can not change it
11.2 controller how is look like

        CRUD : (Create, Read, Update,Delete) important
        
        all the functionalities is coming out from CRUD
        
        nestJS website for more information
        
        "app controller.ts" "app service.ts" this two files are usually is the keep editing
        
        "app module.ts"this is how NestJS structure the files and how is look like
        
        we gonna have all kind of like  functionalities :"get" put" delete",...
        
        "readonly" is we cannot change it : can only read and private
# index6.html
12. Database set up

        typeorm its help us to manipulating the data and connect between our  backend and the database
        
        install three package npm install
        
        copy code  from nestJS and then import to app.module
        
        synchronize when hook it up this database to our backend it will update(delete everthing inside database and rechange everthing ) need to careful
        
        if you are in production you need to make sure you turn this "false"
        
        make sure postgresSQL(PG admin) run 
        
13. NestJS database visualization with LucidChart&NestJS "CRUD" generator

        using LucidChart to to visualize database table
        
        learn about database and how it will look like
        
        using CRUD generator it its going to generate alot of things "module ,controller, service,....."
        
        using nest g resource ":anyname"
        p/s if you using  "--dry-run" this command code will help you run it like a simulation and nothing will changes
        
        in this project we gonna use REST API
        
        CRUD :
        
        create its mean C
        
        find all find one its mean R(read)
        
        update its mean U
        
        remove its mean D(delete)
        
        entities folder
        
        DTO folder its called data transfer object that we going to describe what in kind of thing(data)
        
        Text ist alway String
        
        price, quantity alway using number