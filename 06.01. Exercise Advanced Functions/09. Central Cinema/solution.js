function solve() {
  let btn = document.querySelectorAll('#container button')[0];
  btn.addEventListener('click', addInfo);

  function addInfo(e) {
    console.log(e.target);
  }
}
