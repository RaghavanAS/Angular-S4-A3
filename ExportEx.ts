export interface MyInterface{
    str:string;
}
export function myFunc1(I1:MyInterface){
    console.log(`${I1.str} Im the first Function`);
}
export function myFunc2(I2:MyInterface){
    console.log(`${I2.str} Im the second Function`);
}
