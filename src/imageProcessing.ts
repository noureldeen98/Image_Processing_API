import sharp from 'sharp'
import path from 'path'
import { response } from 'express'

//  This function for resizing the images and will invoking in the main file 
export async function imageResizingMethod(
  theImageLocation: string,
  imageName: string,
  imageWidth: string,
  imageHeight: string
  
): Promise<string>{
   await sharp(theImageLocation)
    .resize(parseInt(imageWidth), parseInt(imageHeight))
    .toFile(
      './thumbNails'+`/new_${imageName}_${imageWidth}_${imageHeight}.png`)
  //   The new edited image
  const newEditedImage =
    path.resolve('./thumbNails')+`/new_${imageName}_${imageWidth}_${imageHeight}.png`

return newEditedImage
}