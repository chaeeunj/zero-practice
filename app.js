// JSON(JavaScript Object Notation) : 자바스크립트에서 사용할 용도로 만들어진 데이터 포맷

// JSON.parse(JSON string) : JSON을 객체로 변환
// JSON.stringify(객체 변수) : 객체를 JSON으로 변환

//  ! 함수나 undefined 값을 가진 프로퍼티는 무시함

// const obj = {
//   "students" : [
//     {
//       "name": "cali",
//       "age" : 20,
//     }
//   ]
// }

const jsonData = JSON.stringify(obj); // 객체가 JSON으로 변환됨
JSON.parse(jsonData); // JSON이 객체로 변환됨
