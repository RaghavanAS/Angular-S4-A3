import {MyInterface} from "./ExportEx";
import {myFunc1} from "./ExportEx";
import {myFunc2} from "./ExportEx";

let myInterface:MyInterface={str: "Hello"};
myFunc1(myInterface);
myFunc2(myInterface);
