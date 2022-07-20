import './style.css';
import Score from './modules/script.js';
import { asyncGetCall, asyncPostCall } from './modules/apicalls.js';

const submit = document.querySelector('.user-submit');
const refresh = document.querySelector('.refresh');

const nameInput = document.querySelector('.user-name');
const scoreInput = document.querySelector('.user-score');

const scoreHolder = document.querySelector('.score-list');

submit.addEventListener('click', () => {
  const score = new Score(nameInput.value, scoreInput.value);
  const newScore = score.add();
  scoreHolder.appendChild(newScore);
  asyncPostCall(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

const show = () => {
  scoreHolder.innerHTML = '';
  const scores = asyncGetCall();
  scores.then((value) => {
    for (let i = 0; i < value.result.length; i += 1) {
      const newScore = document.createElement('li');
      newScore.classList.add('item');
      newScore.innerHTML = `${value.result[i].user}: ${value.result[i].score}`;
      scoreHolder.appendChild(newScore);
    }
  });
};

refresh.addEventListener('click', show);

window.onload = () => {
  show();
};