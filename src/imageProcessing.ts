import sharp from 'sharp'
import path from 'path'
const fs = require('fs').promises

// Checking if the File exists or not
async function exists(pathFile: string) {
  try {
    await fs.access(pathFile)
    console.log(fs.access(pathFile).toString())
    return true
  } catch {
    console.error(`Got an error trying to read the file:something wrong`)
    return false
  }
}

//  This function for resizing the images and will invoking in the main file
export async function imageResizingMethod(
  theImageLocation: string,
  imageName: string,
  imageWidth: string,
  imageHeight: string
): Promise<string> {
  const Path = path.join(
    'thumbNails',
    `new_${imageName}_${imageWidth}_${imageHeight}.png`
  )
  if ((await exists(Path)) == false) {
    await sharp(theImageLocation)
      .resize(parseInt(imageWidth), parseInt(imageHeight))
      .toFile(
        './thumbNails' + `/new_${imageName}_${imageWidth}_${imageHeight}.png`
      )
  } else {
    console.log('exist')
  }
  //   The new edited image
  const newEditedImage =
    path.resolve('./thumbNails') +
    `/new_${imageName}_${imageWidth}_${imageHeight}.png`
  return newEditedImage
}
