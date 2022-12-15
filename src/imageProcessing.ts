import sharp from 'sharp'
import path from 'path'

//  This function for resizing the images and will invoking in the main file 
export function imageResizingMethod(
  theImageLocation: string,
  imageName: string,
  imageWidth: string,
  imageHeight: string
  
): string {
  sharp(theImageLocation)
    .resize(parseInt(imageWidth), parseInt(imageHeight))
    .toFile(
      '../thumbNails/new_' + `${imageName}_${imageWidth}_${imageHeight}.png`,
      (err, info) => {
        // console.log(info.size)
      }
    )
  //   The new edited image
  const newEditedImage: string =
    path.resolve('../thumbNails') +
    `/new_${imageName}_${imageWidth}_${imageHeight}.png`

  return newEditedImage
}
