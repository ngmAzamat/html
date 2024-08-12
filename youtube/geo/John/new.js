document.getElementById('main-form').addEventListener("submit", a)


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  

function a(event) {
  console.log("вы вы")
  event.preventDefault();
  var element = document.getElementById('main-form');
  var name = element.name.value;
  var email = element.rereemail.value;
  var pass = element.rerepass.value;
  var password = element.repass.value;
  //var rerereserve = element.reserve.value;
  if (pass == password) {
    alert("идет оброботка данных");
    sleep(1000);
    alert("все данные корректно заполнены");
    window.location = 'your-sites.html';
  } else 
    alert("идет оброботка данных");
    sleep(1000);
    alert("пароль не подтвержден");

}

  