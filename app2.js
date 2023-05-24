//  promise 사용
// const A2 = () =>
//   new Promise((resolve, reject) => {
//     const a = 'A 함수 실행 후 생기는 데이터';
//     resolve(a);
//   });

// const B2 = (a) => {
//   console.log(`${a}를 이용하는 B`);
// };

// A2()
//   .then((a) => {
//     console.log('A2 실행 성공');
//     B2(a);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// async, await 사용
const A3 = async () => {
  const a = 'A 함수 실행 후 생기는 데이터';
  return a;
};

const B3 = (a) => {
  console.log(`${a}를 이용하는 B`);
};

A3()
  .then((a) => {
    console.log('A2 실행 성공');
    B3(a);
    console.log('-----------------');
  })
  .catch((error) => {
    console.log(error.message);
  });

const func = async () => {
  const a = await A3();
  console.log('A3 실행 성공');
  B3(a);
};
func();
