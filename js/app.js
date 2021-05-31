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
  total: 0,
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
      this.total += this.avgArr[n];
    }
  }, render: function () {

    let parent = document.getElementById('main');
    let parent1 = document.createElement('ul');
    parent.appendChild(parent1);
    let h4element = document.createElement('h1');
    parent1.appendChild(h4element);
    h4element.textContent = 'Seattle';
    for (let x = 0; x < hour.length; x++) {
      let li = document.createElement('li');
      parent1.appendChild(li);
      Seattle.custNum();
      li.textContent = `${hour[x]} : ${Math.floor(Seattle.avgArr[x])} cookies`;
    }

    let li = document.createElement('li');
    parent1.appendChild(li);
    li.textContent = 'Total : ' + Math.floor(Seattle.total);


  }

};

Seattle.custNum();
console.log(Seattle.custn);
Seattle.sumFun();
console.log(Seattle.avgArr);
Seattle.render();






let Tokyo = {
  min: 3,
  max: 24,
  avg: 1.2,
  avgArr: [],
  custn: [],
  total: 0,
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
      this.total += this.avgArr[n];

    }
  }, render: function () {

    let parent = document.getElementById('main');
    let parent2 = document.createElement('ul');
    parent.appendChild(parent2);
    let h4element = document.createElement('h1');
    parent2.appendChild(h4element);
    h4element.textContent = 'Tokyo';
    for (let x = 0; x < hour.length; x++) {
      let li = document.createElement('li');
      parent2.appendChild(li);
      Tokyo.custNum();
      li.textContent = `${hour[x]} : ${Math.floor(Tokyo.avgArr[x])} cookies`;
    }

    let li = document.createElement('li');
    parent2.appendChild(li);
    li.textContent = 'Total : ' + Math.floor(Tokyo.total);


  }

};

Tokyo.custNum();
console.log(Tokyo.custn);
Tokyo.sumFun();
console.log(Tokyo.avgArr);
Tokyo.render();


let Dubai = {
  min: 11,
  max: 38,
  avg: 3.7,
  avgArr: [],
  custn: [],
  total: 0,
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
      this.total += this.avgArr[n];

    }
  }, render: function () {

    let parent = document.getElementById('main');
    let parent2 = document.createElement('ul');
    parent.appendChild(parent2);
    let h4element = document.createElement('h1');
    parent2.appendChild(h4element);
    h4element.textContent = 'Dubai';
    for (let x = 0; x < hour.length; x++) {
      let li = document.createElement('li');
      parent2.appendChild(li);
      Dubai.custNum();
      li.textContent = `${hour[x]} : ${Math.floor(Dubai.avgArr[x])} cookies`;
    }

    let li = document.createElement('li');
    parent2.appendChild(li);
    li.textContent = 'Total : ' + Math.floor(Dubai.total);


  }

};

Dubai.custNum();
console.log(Dubai.custn);
Dubai.sumFun();
console.log(Dubai.avgArr);
Dubai.render();




let Paris = {
  min: 20,
  max: 38,
  avg: 2.3,
  avgArr: [],
  custn: [],
  total: 0,
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
      this.total += this.avgArr[n];

    }
  }, render: function () {

    let parent = document.getElementById('main');
    let parent2 = document.createElement('ul');
    parent.appendChild(parent2);
    let h4element = document.createElement('h1');
    parent2.appendChild(h4element);
    h4element.textContent = 'Paris';
    for (let x = 0; x < hour.length; x++) {
      let li = document.createElement('li');
      parent2.appendChild(li);
      Paris.custNum();
      li.textContent = `${hour[x]} : ${Math.floor(Paris.avgArr[x])} cookies`;
    }

    let li = document.createElement('li');
    parent2.appendChild(li);
    li.textContent = 'Total : ' + Math.floor(Paris.total);


  }

};

Paris.custNum();
console.log(Paris.custn);
Paris.sumFun();
console.log(Paris.avgArr);
Paris.render();




let Lima = {
  min: 2,
  max: 16,
  avg: 4.6,
  avgArr: [],
  custn: [],
  total: 0,
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
      this.total += this.avgArr[n];
    }
  }, render: function () {

    let parent = document.getElementById('main');
    let parent2 = document.createElement('ul');
    parent.appendChild(parent2);
    let h4element = document.createElement('h1');
    parent2.appendChild(h4element);
    h4element.textContent = 'Lima';
    for (let x = 0; x < hour.length; x++) {
      let li = document.createElement('li');
      parent2.appendChild(li);
      Lima.custNum();
      li.textContent = `${hour[x]} : ${Math.floor(Lima.avgArr[x])} cookies`;
    }

    let li = document.createElement('li');
    parent2.appendChild(li);
    li.textContent = 'Total : ' + Math.floor(Lima.total);


  }

};

Lima.custNum();
console.log(Lima.custn);
Lima.sumFun();
console.log(Lima.avgArr);
Lima.render();



