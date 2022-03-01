const filler = {
  hi: 'Hiii',
  welcome: 'Welcome I hope you enjoy this GAME!!!',
};

function changer() {
  document.getElementById('title').innerHTML = filler.hi;
  document.getElementById('welcome').innerHTML = filler.welcome;
}
changer();
