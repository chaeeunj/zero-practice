const [count] = document.getElementsByTagName('span');
const countUpButton = document.getElementById('count-up-button');

// 버튼을 누르면 1씩 증가하는 함수
countUpButton.onclick = (event) => {
  console.log(event);
  if (isNaN(Number(count.innerHTML))) return;
  count.innerHTML = Number(count.innerHTML) + 1;
};

// span 태그에 마우스를 올리면 스타일이 바뀌는 함수
count.onmouseover = () => {
  count.style.backgroundColor = 'gray';
  count.style.color = 'white';
};
// span 태그에서 마우스를 빠져나오면 스타일이 원래대로 바뀌는 함수
count.onmouseout = () => {
  count.style.backgroundColor = 'transparent';
  count.style.color = 'black';
};

// input 태그에 포커스하면 값이 생기는 함수
const input = document.getElementsByTagName('input')[0];
input.onfocus = () => {
  input.value = '자동입력';
};

// 두 번째 input창에 입력한 텍스트가 div 태그에 출력되게 하는 함수
const input2 = document.getElementsByTagName('input')[1];
const result = document.getElementById('result');

input2.onchange = (event) => {
  result.innerHTML = event.target.value;
  // event.target -> 이벤트가 발생한 DOM
  // 두번째 input 창에 변화가 생기면 그 값을 result 안에 넣어줌
};

// addEventListener 사용하기
// span 태그를 클릭하면 10번 문장이 출력되는 함수
const test = document.getElementById('test');
new Array(10).fill(0).forEach((_, index) => {
  test.addEventListener('click', () => {
    console.log(`test clicked ${index + 1}`);
  });
});
