// var keyword allows duplication of declaration for same variable names
// Allows update value
var nameVar = "Rajendrasinh";
var nameVar = "Parmar";
nameVar = "Rajendrasinh Parmar";
console.log('nameVar', nameVar);

// let keyword do not allows duplication of declaration for same variable names
// Allows value update
let nameLet = "Rajendrasinh";
// let nameLet = "Parmar"; // Redeclaration Not Allowed
nameLet = "Rajendrasinh Parmar"; //Assignment allowed
console.log('nameLet', nameLet);

// const keyword do not allows duplication of declaration for same variable names
// Do not allow value update
let nameConst = "Rajendrasinh";
// const nameConst = "Parmar"; // Redeclaration Not Allowed
// nameConst = "Rajendrasinh Parmar"; //Assignment allowed
console.log('nameConst', nameConst);
