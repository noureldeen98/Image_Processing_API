"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageResizingMethod = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
//  This function for resizing the images and will invoking in the main file 
function imageResizingMethod(theImageLocation, imageName, imageWidth, imageHeight) {
    (0, sharp_1.default)(theImageLocation)
        .resize(parseInt(imageWidth), parseInt(imageHeight))
        .toFile('../thumbNails/new_' + `${imageName}_${imageWidth}_${imageHeight}.png`, (err, info) => {
        // console.log(info.size)
    });
    //   The new edited image
    const newEditedImage = path_1.default.resolve('../thumbNails') +
        `/new_${imageName}_${imageWidth}_${imageHeight}.png`;
    return newEditedImage;
}
exports.imageResizingMethod = imageResizingMethod;
