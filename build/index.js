"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTestFun = exports.mainAppImageProcessing = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
exports.mainAppImageProcessing = (0, express_1.default)();
const theMainPort = 8000;
exports.mainAppImageProcessing.get('/api/imagesResizing', function (request, response) {
    const imageName = request.query.imageName;
    const imageWidth = request.query.width;
    const imageHeight = request.query.height;
    const theImageLocation = path_1.default.resolve('../assets') + `/${imageName}.png`;
    //  This condition to check if there is no image name sent in the URL as a query string 
    if (!imageName) {
        response.send('Sorry this image is not found');
    }
    //  This condition to check if there is no image name sent in the URL as a query string 
    else if (!parseInt(imageHeight) || !parseInt(imageWidth)) {
        response.send('Something wring! You should enter the height of image eg: imageName=...&height=200&width=100');
    } //Otherwise resize the image according to the width and height which sent 
    else {
        (0, sharp_1.default)(theImageLocation)
            .resize(parseInt(imageWidth), parseInt(imageHeight))
            .toFile('../assets/new_' + `${imageName}_${imageWidth}_${imageHeight}.png`, (err, info) => {
            console.log(info.size);
        });
    }
    // response.send(`new_${imageName}_${imageWidth}_${imageHeight}.png`)
    //   The new edited image
    const newEditedImage = path_1.default.resolve('../assets') +
        `/new_${imageName}_${imageWidth}_${imageHeight}.png`;
    // Rendering the new edited image in the html
    response.sendFile(newEditedImage);
    // response.sendFile(theImageLocation)
});
exports.mainAppImageProcessing.listen(theMainPort, () => {
    console.log(`This project is working on potrt which is: ${theMainPort}`);
});
const myTestFun = (num) => {
    return num * num;
};
exports.myTestFun = myTestFun;
