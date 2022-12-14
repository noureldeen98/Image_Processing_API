import express from 'express'
import path from 'path'
import sharp from 'sharp'

export const mainAppImageProcessing = express()

const theMainPort = 8000

mainAppImageProcessing.get('/api/imagesResizing', function (request, response) {
  const imageName = request.query.imageName as string 
  const imageWidth = request.query.width as string
  const imageHeight = request.query.height as string

  const theImageLocation = path.resolve('../assets') + `/${imageName}.png`
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
    sharp(theImageLocation)
      .resize(parseInt(imageWidth), parseInt(imageHeight))
      .toFile(
        '../assets/new_' + `${imageName}_${imageWidth}_${imageHeight}.png`,
        (err, info) => {
          console.log(info.size)
        }
      )
  }

// response.send(`new_${imageName}_${imageWidth}_${imageHeight}.png`)

//   The new edited image
const newEditedImage =  path.resolve('../assets') +
`/new_${imageName}_${imageWidth}_${imageHeight}.png` 

// Rendering the new edited image in the html
  response.sendFile(newEditedImage )

  // response.sendFile(theImageLocation)
})

mainAppImageProcessing.listen(theMainPort, () => {
  console.log(`This project is working on potrt which is: ${theMainPort}`)
})

export const myTestFun = (num: number): number => {
  return num * num
}