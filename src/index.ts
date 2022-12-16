import express from 'express'
import path from 'path'
import { imageResizingMethod } from './imageProcessing'

export const mainAppImageProcessing = express()

const theMainPort = 8000

mainAppImageProcessing.get(
  '/api/imagesResizing',
 async function (request: express.Request, response: express.Response): Promise<void> {
    // Declaring Variables which will get their values from the HTTP request
    const imageName = request.query.imageName as string
    const imageWidth = request.query.width as string
    const imageHeight = request.query.height as string

    const theImageLocation: string =
      path.resolve('./assets')+`/${imageName}.png`
    

    //  This condition to check if there is no image name sent in the URL as a query string
    if (!imageName) {
      response.send('Sorry this image is not found')
    }
    //  This condition to check if there is no image name sent in the URL as a query string
    else if (!parseInt(imageHeight) || !parseInt(imageWidth)) {
      response.send(
        'Something wring! You should enter the height of image eg: imageName=...&height=200&width=100'
      )
    } //Otherwise resize the image according to the width and height which sent
    else {
      //  invoking the function which reponsible for image resizing
     const newEditedImage: Promise<string> = imageResizingMethod(theImageLocation,imageName,imageWidth,imageHeight)
      // Rendering the new edited image in the html
      response.sendFile(await newEditedImage)
 
    }

    //  response.sendFile(path.resolve('../assets')+`/new_${imageName}_${imageWidth}_${imageHeight}.png`)
  }
)

mainAppImageProcessing.listen(theMainPort, () => {
  console.log(`This project is working on potrt which is: ${theMainPort}`)
})

//Just for testing
export const myTestFun = (num: number): number => {
  return num * num
}
