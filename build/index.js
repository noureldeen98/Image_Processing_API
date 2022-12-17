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
exports.myTestFun = exports.mainAppImageProcessing = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageProcessing_1 = require("./imageProcessing");
exports.mainAppImageProcessing = (0, express_1.default)();
const theMainPort = 8000;
exports.mainAppImageProcessing.get('/api/imagesResizing', function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // Declaring Variables which will get their values from the HTTP request
        const imageName = request.query.imageName;
        const imageWidth = request.query.width;
        const imageHeight = request.query.height;
        const theImageLocation = path_1.default.resolve('./assets') + `/${imageName}.png`;
        //  This condition to check if there is no image name sent in the URL as a query string
        if (!imageName) {
            response.send('Sorry this image is not found');
        }
        // Check if the width and height is NAN
        else if (parseInt(imageHeight) || parseInt(imageWidth)) {
            if (isNaN(parseInt(imageHeight))) {
                response.send('The image height should be a number ');
            }
            else if (isNaN(parseInt(imageWidth))) {
                response.send('The image width should be a number ');
            }
        }
        // Check if the width and height more than 0
        else if (parseInt(imageHeight) <= 0 || parseInt(imageWidth) <= 0) {
            response.send('The width and height must be more than 0 ');
        }
        //  This condition to check if there is no image name sent in the URL as a query string
        else if (!parseInt(imageHeight)) {
            response.send('Something wrong! You should enter the height of image as number value eg: imageName=...&height=200');
        }
        else if (!parseInt(imageWidth)) {
            response.send('Something wrong! You should enter the width of image as number value eg: imageName=...&width=200');
        }
        //Otherwise resize the image according to the width and height which sent
        else {
            //  invoking the function which reponsible for image resizing
            //   checkingTheImagesExistance(theImageLocation,imageName,imageWidth,imageHeight);
            const newEditedImage = yield (0, imageProcessing_1.imageResizingMethod)(theImageLocation, imageName, imageWidth, imageHeight);
            // Rendering the new edited image in the html
            response.sendFile(newEditedImage);
        }
        //  response.sendFile(path.resolve('../assets')+`/new_${imageName}_${imageWidth}_${imageHeight}.png`)
    });
});
exports.mainAppImageProcessing.listen(theMainPort, () => {
    console.log(`This project is working on potrt which is: ${theMainPort}`);
});
//Just for testing
const myTestFun = (num) => {
    return num * num;
};
exports.myTestFun = myTestFun;
