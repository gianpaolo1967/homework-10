num1.addEventListener('input', getMaxNumber, false);
num2.addEventListener('input', getMaxNumber, false);

function getMaxNumber(event) {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  var output = document.getElementById('result');
  if (num1.value > num2.value) {
    output.innerHTML = num1.value;
  }
  else if (num1.value == num2.value) {
    output.innerHTML = 'Числа  равны';
  }
  else {
    output.innerHTML = num2.value;
  }
}

// ex3

var flat = document.getElementById('flat');
flat.addEventListener('input', getEntry, false);

function getEntry(event) {
  var flat = document.getElementById('flat').value;
  var entry = document.getElementById('entry');
  if (flat > 0 && flat < 21) {
    entry.innerHTML = ' 1 парадное';
  }
  else if (flat > 20 && flat < 49) {
    entry.innerHTML = ' 2 парадное';
  }
  else if (flat > 49 && flat < 91) {
    entry.innerHTML = ' 3 парадное';
  }
  else {
    entry.innerHTML = ' Введите правильный номер квартиры';
  }
}

// ex 4
userLogin.onclick = logIn;
function logIn() {
  var userLogin = document.getElementById('userLogin');
  var login = document.getElementById('login');
  var pass = document.getElementById('pass');
  var arrayLogin = {
    'ivan' : 'ivan',
    'alex' : 'alex',
    'petr' : 'petr'
  };
  var arrayPass = {
    'ivan' : 334455,
    'alex' : 777,
    'petr' : 'b5678'
  };
  if (login.value == arrayLogin.ivan && pass.value == arrayPass.ivan) {
    alert (' Добро пожаловать');
  }
    else if (login.value == arrayLogin.alex && pass.value == arrayPass.alex) {
      alert (' Добро пожаловать');
    }
    else if (login.value == arrayLogin.petr && pass.value == arrayPass.petr) {
      alert (' Добро пожаловать');
    }
  else {
    alert('Ошибка входа');
  }
}

// ex 5
enter.onclick = getAge;
function getAge() {
  var enter = document.getElementById('enter');
  var year = document.getElementById('year');
  var age = 2017 - year.value > 15 ?
    (alert ('добро пожаловать')) :
    (alert ('вход воспрещен'));
}

// ex6

 document.getElementById('work-years').addEventListener('input', exp, false);

function exp(event) {
  var workYears = document.getElementById('work-years').value;
  var percents = document.getElementById('percents');
    if (workYears > 0 && workYears < 4) {
        percents.innerHTML = '0%';
      }
      if (workYears > 3 && workYears < 11) {
        percents.innerHTML = '10%';
        console.log('10%');
      }
       if (workYears > 10 && workYears < 30) {
         percents.innerHTML = '20%';
       }
       if (workYears > 29) {
         percents.innerHTML = '30%';
       }
       else if (workYears < 0) {
         percents.innerHTML = 'type correct number';
       }
}
