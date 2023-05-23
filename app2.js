const button = document.getElementById('count-up-button');
const buttonWrapper = document.getElementById('button-wrapper');
const buttonSubWrapper = document.getElementById('button-subWrapper');

button.onclick = (event) => {
  event.stopPropagation(); // button에 이벤트가 일어나도 그것이 부모에게 전달되지 않게 만듦
  console.log('button event trigged');
};

buttonWrapper.onclick = () => {
  console.log('wrapper event trigged');
};

buttonSubWrapper.onclick = () => {
  console.log('subWrapper event trigged');
};
