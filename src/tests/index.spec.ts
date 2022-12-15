import { myTestFun } from '../index'
import supertest from 'supertest'
import { mainAppImageProcessing } from '../index'
import { imageResizingMethod } from '../imageProcessing'



// Just for testing jasmine itself
describe('test if jasmine is working right or not', () => {
  it('test my testing function ', () => {
    expect(myTestFun(5)).toEqual(25)
  })
})

// Testing the endpoint
const requestSuperTest = supertest(mainAppImageProcessing) // this superTest is thirdparty used to test the request of api
describe('Testing the endpoint and its responses', () => {
  //This suit is checking if our end point has a success request
  it('testing the /api/imagesResizing endpoint ', async () => {
    const responseSuperTest = await requestSuperTest.get('/api/imagesResizing')
    expect(responseSuperTest.status).toBe(200)
  })

  //This suit is checking if our end point has a bad request as here the user may forgot full path which is /api/imagesResizing
  it('testing the /imagesResizing ', async () => {
    const responseSuperTest = await requestSuperTest.get('/imagesResizing')
    expect(responseSuperTest.status).toBe(404)
  })

  //This suit is checking if our end point has a success request. I t will success '200' as they call the main endpoint in right what
  it('testing the /api/imagesResizing?width= ', async () => {
    const responseSuperTest = await requestSuperTest.get(
      '/api/imagesResizing?imageName=udacityLogo&width='
    )
    expect(responseSuperTest.status).toBe(200)
  })
})


// You must test image processing function in isolation without sending a request to server.
describe('Testing the image in isolation ', () => {
  it('test resizing function', () => {
    const theImageLocation = '../../assets/udacityLogo.png'
    const imageName = 'udacityLogo'
    const imageWidth = '200'
    const imageHeight = '100'
    expect(
      imageResizingMethod(theImageLocation, imageName, imageWidth, imageHeight)
    ).toBeTruthy()
  })
})


describe('Testing the image in isolation ', () => {
  it('test resizing function', () => {
    const theImageLocation = '../../assets/udacityLogo.png'
    const imageName = 'udacityLogo'
    const imageWidth = '200'
    const imageHeight = '100'
    expect(async () => {
      await imageResizingMethod(theImageLocation, imageName, imageWidth, imageHeight);
  }).not.toThrow();
  })
})