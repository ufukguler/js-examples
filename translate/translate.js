const key =
  "trnsl.1.1.20200307T232046Z.a7d46ad2e62355a4.649abef11e40b82555818e935e6f30a7e22f451a";
const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}`;

class Request {
  async getTranslate(text, lang) {
    let requestUrl = `${url}&text=${text}&lang=${lang}`;
    const response = await fetch(requestUrl);
    return response.json();
  }
}
