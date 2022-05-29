function myAjax(url, method, data) {
  return new Promise((resolve, rejcet) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status !== 200) {
        rejcet(new Error(this.statusText));
      } else {
        resolve(this.response);
      }
    };

    xhr.onerror = function () {
      rejcet(new Error(this.statusText));
    };

    xhr.responseType = "json";

    xhr.setRequestHeader("Accept", "application/json");

    xhr.send(null);
  });
}
