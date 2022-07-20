export default class Score {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }

  add() {
    const newScore = document.createElement('li');
    newScore.classList.add('item');
    newScore.innerHTML = `${this.username}: ${this.score}`;
    return newScore;
  }
}