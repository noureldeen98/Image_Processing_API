"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs/promises"));
// Checking if the File exists or not
function exists(pathFile) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs.access(pathFile);
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
//  This function for resizing the images and will invoking in the main file 
function imageResizingMethod(theImageLocation, imageName, imageWidth, imageHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        const Path = path_1.default.join("thumbNails", `new_${imageName}_${imageWidth}_${imageHeight}.png`);
        if ((yield exists(Path)) == false) {
            yield (0, sharp_1.default)(theImageLocation)
                .resize(parseInt(imageWidth), parseInt(imageHeight))
                .toFile('./thumbNails' + `/new_${imageName}_${imageWidth}_${imageHeight}.png`);
        }
        else {
            console.log("exist");
        }
        //   The new edited image
        const newEditedImage = path_1.default.resolve('./thumbNails') + `/new_${imageName}_${imageWidth}_${imageHeight}.png`;
        return newEditedImage;
    });
}
exports.imageResizingMethod = imageResizingMethod;
