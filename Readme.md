<h1>PostUncle</h1>
==> A simple take on the _PostMan_ API testing software
==> An application that displays API request vitals and data (like PostMan)


___________________________________________________________________
![PostUncle](https://github.com/bcd-kushal/PostUncle/assets/96081625/4f668d4f-5d03-4c99-ad3e-e50faa2b1051)


- add json objects to the `Queries` tab and `Headers` tab as needed to make a respective https call
- create json field to POST/PUT/PATCH/DELETE to an API endpoint 

### How To Run -------------------------
1. Download/zip the folder

2. Install the following dependencies after `npm init -y`:

     a.  `npm i -D snowpack`: ESBuild bundler
   
     b.  `npm i pretty-bytes`: Convert to size units
   
     c.  `npm i axios`: fetch() equivalent
   
3. Run: `npm start`




![PostUncle demonstration](https://github.com/bcd-kushal/PostUncle/assets/96081625/8a790b96-594f-49c3-998a-a9afc3604edb)


   _____________________________________________________________________
   
### Some points addressed ---------
1. the `Dockerfile` exists because I was testing if I could dockerize this application (successfully failed)
2. the `./unused_scripts` folder contains unused functions (theme changer, use of `@codemirror`) which I never integrated at the end because of a few minor bugs I couldnt fix myself 
