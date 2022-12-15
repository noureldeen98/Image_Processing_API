"use strict";
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
    // Declaring Variables which will get their values from the HTTP request
    const imageName = request.query.imageName;
    const imageWidth = request.query.width;
    const imageHeight = request.query.height;
    const theImageLocation = path_1.default.resolve('./assets') + `/${imageName}.png`;
    //  This condition to check if there is no image name sent in the URL as a query string
    if (!imageName) {
        response.send('Sorry this image is not found');
    }
    //  This condition to check if there is no image name sent in the URL as a query string
    else if (!parseInt(imageHeight) || !parseInt(imageWidth)) {
        response.send('Something wring! You should enter the height of image eg: imageName=...&height=200&width=100');
    } //Otherwise resize the image according to the width and height which sent
    else {
        //  invoking the function which reponsible for image resizing
        const newEditedImage = (0, imageProcessing_1.imageResizingMethod)(theImageLocation, imageName, imageWidth, imageHeight);
        // Rendering the new edited image in the html
        response.sendFile(newEditedImage);
    }
    //  response.sendFile(path.resolve('../assets')+`/new_${imageName}_${imageWidth}_${imageHeight}.png`)
});
exports.mainAppImageProcessing.listen(theMainPort, () => {
    console.log(`This project is working on potrt which is: ${theMainPort}`);
});
//Just for testing
const myTestFun = (num) => {
    return num * num;
};
exports.myTestFun = myTestFun;
