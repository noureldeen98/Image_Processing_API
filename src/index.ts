import express from 'express'
import path from 'path'
import { imageResizingMethod } from './imageProcessing'

export const mainAppImageProcessing = express()

const theMainPort = 8000

mainAppImageProcessing.get(
  '/api/imagesResizing',
  async function (
    request: express.Request,
    response: express.Response
  ): Promise<void> {
    // Declaring Variables which will get their values from the HTTP request
    const imageName = request.query.imageName as string
    const imageWidth = request.query.width as string
    const imageHeight = request.query.height as string

    const theImageLocation: string =
      path.resolve('./assets') + `/${imageName}.png`

    //  This condition to check if there is no image name sent in the URL as a query string
    if (!imageName) {
      response.send('Sorry this image is not found')
    }
    // Check if the width and height is NAN
    else if (isNaN(parseInt(imageHeight))) {
      response.send('The image height should be a number ')
    } else if (isNaN(parseInt(imageWidth))) {
      response.send('The image width should be a number ')
    }
    // Check if the width and height more than 0
    else if (parseInt(imageHeight) <= 0 || parseInt(imageWidth) <= 0) {
      response.send('The width and height must be more than 0 ')
    }
    //  This condition to check if there is no image name sent in the URL as a query string
    else if (!parseInt(imageHeight)) {
      response.send(
        'Something wrong! You should enter the height of image as number value eg: imageName=...&height=200'
      )
    } else if (!parseInt(imageWidth)) {
      response.send(
        'Something wrong! You should enter the width of image as number value eg: imageName=...&width=200'
      )
    }

    //Otherwise resize the image according to the width and height which sent
    else {
      //  invoking the function which reponsible for image resizing

      //   checkingTheImagesExistance(theImageLocation,imageName,imageWidth,imageHeight);
      console.log('before function')

      const newEditedImage = await imageResizingMethod(
        theImageLocation,
        imageName,
        imageWidth,
        imageHeight
      )
      console.log(newEditedImage)

      // Rendering the new edited image in the html
      response.sendFile(newEditedImage)
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
