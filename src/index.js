import './style.css';
import Score from './script.js';

const submit = document.querySelector('.user-submit');
const refresh = document.querySelector('.refresh');

const nameInput = document.querySelector('.user-name');
const scoreInput = document.getElementById('a');

const scoreHolder = document.querySelector('.score-list');

submit.addEventListener('click', () => {
  const score = new Score(nameInput.value, scoreInput.value);
  const newScore = score.add();
  scoreHolder.appendChild(newScore);
  nameInput.value = '';
  scoreInput.value = '';
});

refresh.addEventListener('click', () => {
  scoreHolder.innerHTML = '';
});