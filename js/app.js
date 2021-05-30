'use strict';

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


let Seattle = {
  min: 23,
  max: 65,
  avg: 6.3,
  avgArr: [],
  custn: [],
  custNum: function () {
    for (let i = 0; i < hour.length; i++) {
      let x = getRandomArbitrary(this.min, this.max);
      this.custn.push(Math.floor(x));
    }
  }, sumFun: function () {
    let multi = 1;
    for (let n = 0; n < hour.length; n++) {
      multi = this.custn[n] * this.avg;
      this.avgArr.push(multi);
    }
  }

};

Seattle.custNum();
console.log(Seattle.custn);
Seattle.sumFun();
console.log(Seattle.avgArr);

let parent1 = document.getElementById('parent');
parent1.textContent = 'Seattle';
for (let x = 0; x < hour.length; x++) {
  let li = document.createElement('li');
  parent1.appendChild(li);
  Seattle.custNum();
  li.textContent = `${hour[x]} : ${Math.floor(Seattle.avgArr[x])} cookies`;
}







let Tokyo = {
  min: 3,
  max: 24,
  avg: 1.2,
  avgArr: [],
  custn: [],
  custNum: function () {
    for (let i = 0; i < hour.length; i++) {
      let x = getRandomArbitrary(this.min, this.max);
      this.custn.push(Math.floor(x));
    }
  }, sumFun: function () {
    let multi = 1;
    for (let n = 0; n < hour.length; n++) {
      multi = this.custn[n] * this.avg;
      this.avgArr.push(multi);
    }
  }

};

Tokyo.custNum();
console.log(Tokyo.custn);
Tokyo.sumFun();
console.log(Tokyo.avgArr);

let Tokyopar = document.getElementById('parent2');
Tokyopar.textContent = 'Tokyo';
for (let x = 0; x < hour.length; x++) {
  let li = document.createElement('li');
  Tokyopar.appendChild(li);
  Tokyo.custNum();
  li.textContent = `${hour[x]} : ${Math.floor(Tokyo.avgArr[x])} cookies`;
}



let Dubai = {
  min: 11,
  max: 38,
  avg: 3.7,
  avgArr: [],
  custn: [],
  custNum: function () {
    for (let i = 0; i < hour.length; i++) {
      let x = getRandomArbitrary(this.min, this.max);
      this.custn.push(Math.floor(x));
    }
  }, sumFun: function () {
    let multi = 1;
    for (let n = 0; n < hour.length; n++) {
      multi = this.custn[n] * this.avg;
      this.avgArr.push(multi);
    }
  }

};

Dubai.custNum();
console.log(Dubai.custn);
Dubai.sumFun();
console.log(Dubai.avgArr);

let parent3 = document.getElementById('parent3');
parent3.textContent = 'Dubai';
for (let x = 0; x < hour.length; x++) {
  let li = document.createElement('li');
  parent3.appendChild(li);
  Dubai.custNum();
  li.textContent = `${hour[x]} : ${Math.floor(Dubai.avgArr[x])} cookies`;
}



let Paris = {
  min: 20,
  max: 38,
  avg: 2.3,
  avgArr: [],
  custn: [],
  custNum: function () {
    for (let i = 0; i < hour.length; i++) {
      let x = getRandomArbitrary(this.min, this.max);
      this.custn.push(Math.floor(x));
    }
  }, sumFun: function () {
    let multi = 1;
    for (let n = 0; n < hour.length; n++) {
      multi = this.custn[n] * this.avg;
      this.avgArr.push(multi);
    }
  }

};

Paris.custNum();
console.log(Paris.custn);
Paris.sumFun();
console.log(Paris.avgArr);

let parent4 = document.getElementById('parent4');
parent4.textContent = 'Paris';
for (let x = 0; x < hour.length; x++) {
  let li = document.createElement('li');
  parent4.appendChild(li);
  Paris.custNum();
  li.textContent = `${hour[x]} : ${Math.floor(Paris.avgArr[x])} cookies`;
}



let Lima = {
  min: 2,
  max: 16,
  avg: 4.6,
  avgArr: [],
  custn: [],
  custNum: function () {
    for (let i = 0; i < hour.length; i++) {
      let x = getRandomArbitrary(this.min, this.max);
      this.custn.push(Math.floor(x));
    }
  }, sumFun: function () {
    let multi = 1;
    for (let n = 0; n < hour.length; n++) {
      multi = this.custn[n] * this.avg;
      this.avgArr.push(multi);
    }
  }

};

Lima.custNum();
console.log(Lima.custn);
Lima.sumFun();
console.log(Lima.avgArr);

let parent5 = document.getElementById('parent5');
parent5.textContent = 'Lima';
for (let x = 0; x < hour.length; x++) {
  let li = document.createElement('li');
  parent5.appendChild(li);
  Lima.custNum();
  li.textContent = `${hour[x]} : ${Math.floor(Lima.avgArr[x])} cookies`;
}


