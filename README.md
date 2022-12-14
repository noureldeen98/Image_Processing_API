ProjectName: Image processing API
Project Description: It is a simple project which resizing the images according to some styles like image's width and height which will sent in the URL as a query string 
                     then if the request successeded the re-edited image will be saved in a folder name thumbNails while the main images will be found in assets folder. 
                     Based on node.js and using express framework
publisher:Nour-Eldeen Nasser Morad Elkatan.

How to install and run?
   Kindly, open the CMD then run the following command lines.
    first: npm i 
    second: npm run test //This for to run the suits and build the main file which is index.js and will be found in build folder.
    third:cd build
    forth: node index.js

How to Use the Project?
   After running open your browser and write this URL http://localhost:8000/api/imagesResizing it will work with you.
   This is an example for the full URL having the query-string: http://localhost:8000/api/imagesResizing?imageName=udacityLogo&height=100&width=200
