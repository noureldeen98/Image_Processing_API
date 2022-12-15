"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
const index_2 = require("../index");
const imageProcessing_1 = require("../imageProcessing");
// Just for testing jasmine itself
describe('test if jasmine is working right or not', () => {
    it('test my testing function ', () => {
        expect((0, index_1.myTestFun)(5)).toEqual(25);
    });
});
// Testing the endpoint
const requestSuperTest = (0, supertest_1.default)(index_2.mainAppImageProcessing); // this superTest is thirdparty used to test the request of api
describe('Testing the endpoint and its responses', () => {
    //This suit is checking if our end point has a success request
    it('testing the /api/imagesResizing endpoint ', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseSuperTest = yield requestSuperTest.get('/api/imagesResizing');
        expect(responseSuperTest.status).toBe(200);
    }));
    //This suit is checking if our end point has a bad request as here the user may forgot full path which is /api/imagesResizing
    it('testing the /imagesResizing ', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseSuperTest = yield requestSuperTest.get('/imagesResizing');
        expect(responseSuperTest.status).toBe(404);
    }));
    //This suit is checking if our end point has a success request. I t will success '200' as they call the main endpoint in right what
    it('testing the /api/imagesResizing?width= ', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseSuperTest = yield requestSuperTest.get('/api/imagesResizing?imageName=udacityLogo&width=');
        expect(responseSuperTest.status).toBe(200);
    }));
});
// You must test image processing function in isolation without sending a request to server.
// describe('Testing the image in isolation ', () => {
//   it('test resizing function', () => {
//     const theImageLocation = '../../assets/udacityLogo.png'
//     const imageName = 'udacityLogo'
//     const imageWidth = '200'
//     const imageHeight = '100'
//     expect(
//       imageResizingMethod(theImageLocation, imageName, imageWidth, imageHeight)
//     ).toBeTruthy()
//   })
// })
describe('Testing the image in isolation ', () => {
    it('test resizing function', () => {
        const theImageLocation = '../../assets/udacityLogo.png';
        const imageName = 'udacityLogo';
        const imageWidth = '200';
        const imageHeight = '100';
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, imageProcessing_1.imageResizingMethod)(theImageLocation, imageName, imageWidth, imageHeight);
        })).not.toThrow();
    });
});
