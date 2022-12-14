"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("test if jasmine is working right or not", () => {
    it("test my testing function ", () => {
        expect((0, index_1.myTestFun)(5)).toEqual(25);
    });
});
