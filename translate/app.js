let lang = "en";
const request = new Request();

function eventListeners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  document.getElementById("language").onchange = function (e) {
    lang = e.target.value;
  };
}

function translateWord(e) {
    const word = document.getElementById("word");
    const response = request.getTranslate(word.value,lang);
    const outputWord = document.getElementById("outputWord");
    outputWord.textContent = response;
    e.preventDefault();
}
eventListeners();
