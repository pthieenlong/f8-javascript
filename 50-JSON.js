//JSON

// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Array, Object

//Stringify: Từ JS types -> JSON
//Parse: Từ JSON -> JS types

var json = '{"name": "long", "age" :"20"}';
var text = '"abce"';
console.log(JSON.parse(json));