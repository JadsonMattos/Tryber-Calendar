
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (const element of weekDays) {
    const days = element
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}
createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.
//Innitial commit;

//Exercício 01

const createDays = () => {
  const days = document.querySelector('#days');
  for (let element of decemberDaysList) {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = element;
    dayListItem.className = 'day';
    if (element === 24 || element === 25 || element === 31) {
      dayListItem.classList.add('holiday');
    } 
    if (element === 4 || element === 11 || element === 18 || element === 25) {
      dayListItem.classList.add('friday');
    }
    days.appendChild(dayListItem);
  }  
}
createDays();

//Exercício 02

const changeColorHoliday = () => {
  const btnHoliday = document.querySelector('#btn-holiday');
  btnHoliday.addEventListener('click', () => {
    const arrayHoliday = document.querySelectorAll('.holiday');
    for (let element of arrayHoliday) {
      if (element.style.backgroundColor === 'black') {
        element.style.backgroundColor = 'rgb(238, 238, 238)';
      } else {
        element.style.backgroundColor = 'black';
      }       
    }
  });
}
changeColorHoliday();

//Exercício 03

const modifyTextFriday = (fridays) => {
  const btnFriday = document.querySelector('#btn-friday');
  btnFriday.addEventListener('click', () => {
    const arrayFriday = document.querySelectorAll('.friday');
    for (let i = 0; i < arrayFriday.length; i += 1) {
      if (arrayFriday[i].innerHTML !== 'Sextou!') {
        arrayFriday[i].innerHTML = 'Sextou!';
      } else {
        arrayFriday[i].innerHTML = fridays[i];
      }
    }
  });
}
const decemberFridays = [4, 11, 18, 25];
modifyTextFriday(decemberFridays);

//Exercício 04

const mouseIn = (event) => {
  event.target.style.fontSize = '30px';
}
const mouseOut = (event) => {
  event.target.style.fontSize = '20px';
}
const days = document.querySelectorAll('.day');
for (const element of days) {
  element.addEventListener('mouseover', mouseIn);
  element.addEventListener('mouseout', mouseOut);
}

//Exercício 05

const taskDay = () => {
  let task = document.querySelectorAll('.task');
  for (const element of task) {
    element.addEventListener('click', (event) => {
      let selected = document.querySelector('.selected');
      event.target.classList.add('selected');
      if (selected !== null) {
        selected.classList.remove('selected');
      }
    });
  }
};
taskDay();

const colorDay = () => {
  let days = document.querySelectorAll('.day');
  for (const element of days) {
    element.addEventListener('click', (event) => {
      let selected = document.querySelector('.selected');
      if (selected === null || event.target.style.color === selected.style.backgroundColor) {
        event.target.style.color = 'rgb(119, 119, 119)';
      } else {
        event.target.style.color = selected.style.backgroundColor;
      }
    });
  }
};
colorDay();

//Exercício 06

const addApoint = () => {
  const btnAdd = document.getElementById('btn-add');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  btnAdd.addEventListener('click', () => {
    if (taskInput.value.length > 0) {
      const liNew = document.createElement('li');
      liNew.innerText = taskInput.value;
      taskList.appendChild(liNew);
      taskInput.value = '';
    } else {
      alert('Error: empty');
    }
  });
  taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && taskInput.value.length > 0) {
      const liNew = document.createElement('li');
      liNew.innerText = taskInput.value;
      taskList.appendChild(liNew);
      taskInput.value = '';
    }
  });
}
addApoint();