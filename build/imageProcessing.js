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
exports.imageResizingMethod = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
//  This function for resizing the images and will invoking in the main file 
function imageResizingMethod(theImageLocation, imageName, imageWidth, imageHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, sharp_1.default)(theImageLocation)
            .resize(parseInt(imageWidth), parseInt(imageHeight))
            .toFile('./thumbNails' + `/new_${imageName}_${imageWidth}_${imageHeight}.png`);
        //   The new edited image
        const newEditedImage = path_1.default.resolve('./thumbNails') + `/new_${imageName}_${imageWidth}_${imageHeight}.png`;
        return newEditedImage;
    });
}
exports.imageResizingMethod = imageResizingMethod;
