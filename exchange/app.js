document.getElementById("change").addEventListener("click", change);
// populate dropdownlist
window.onload = function() {
  options("from");
  options("to");
};

function change() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (from != to) {
    const xhr = new XMLHttpRequest();
    // template literal ile base degeri belirliyorum
    xhr.open("GET", `https://api.exchangeratesapi.io/latest?base=${from}`);
    xhr.onload = function () {
      if (this.status == 200) {
        const response = JSON.parse(this.responseText);
        // gelen currency'ler içinden istedigimizi aliyorum
        const rate = response.rates[`${to}`];
        const amount = Number(document.getElementById("amount").value);
        document.getElementById("result").value = rate * amount;
      }
    };
    xhr.send();
  }
}

function options(id) {
  const ele = document.getElementById(`${id}`);
  ele.innerHTML += `
  <option value="EUR">EUR</option>
  <option value="CAD">CAD</option>
  <option value="HKD">HKD</option>
  <option value="ISK">ISK</option>
  <option value="PHP">PHP</option>
  <option value="DKK">DKK</option>
  <option value="HUF">HUF</option>
  <option value="CZK">CZK</option>
  <option value="AUD">AUD</option>
  <option value="RON">RON</option>
  <option value="SEK">SEK</option>
  <option value="IDR">IDR</option>
  <option value="INR">INR</option>
  <option value="BRL">BRL</option>
  <option value="RUB">RUB</option>
  <option value="HRK">HRK</option>
  <option value="JPY">JPY</option>
  <option value="THB">THB</option>
  <option value="CHF">CHF</option>
  <option value="SGD">SGD</option>
  <option value="PLN">PLN</option>
  <option value="BGN">BGN</option>
  <option value="TRY">TRY</option>
  <option value="CNY">CNY</option>
  <option value="NOK">NOK</option>
  <option value="NZD">NZD</option>
  <option value="ZAR">ZAR</option>
  <option value="USD">USD</option>
  <option value="MXN">MXN</option>
  <option value="ILS">ILS</option>
  <option value="GBP">GBP</option>
  <option value="KRW">KRW</option>
  <option value="MYR">MYR</option>`;
}
