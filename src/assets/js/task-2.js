
function onLoad(resolve, reject) {
  return function () {
    if (this.status >= 200 && this.status < 300) {

      resolve(this.responseText);
    } else {
      reject({
        status: this.status,
        statusText: this.statusText
      });
    }
  };
}

function onError(reject) {
  return function () {
    reject({
      status: this.status,
      statusText: this.statusText
    });
  }
}

function loadText(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = onLoad(resolve, reject);
    xhr.onerror = onError(reject);
    xhr.send();
  });
}


function loadTextToTextArea(textarea,url){
  textarea.addEventListener('click', function (event) {
    loadText(url).then(function (text) {
      textarea.value = text;
    }, function (reason) {
      textarea.value = 'Error\n' + reason.status + '\n' + reason.statusText
    });
  })
}

