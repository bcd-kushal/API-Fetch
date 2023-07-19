<h1>PostUncle</h1>
> A simple take on the **PostMan** API testing software

### How To Run -------------------------
1. Download/zip the folder

2. Install the following dependencies:

     a.  `npm i -D snowpack`: ESBuild bundler
   
     b.  `npm i pretty-bytes`: Convert to size units
   
     c.  `npm i axios`: fetch() equivalent
   
3. Run: `npm start`

### Some points addressed ---------
1. the `Dockerfile` exists because I was testing if I could dockerize this application (successfully failed)
2. the `./unused_scripts` folder contains unused functions (theme changer, use of `@codemirror`) which I never integrated at the end because of a few minor bugs I couldnt fix myself 
