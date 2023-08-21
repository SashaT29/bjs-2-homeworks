"use strict"

//Задача 1

function getArrayParams(...arr) { // создаем ф-wb.? которая принимает на ввод массив
  let min = Infinity,
   max = -Infinity,
   sum = 0; //задаем переменые и значени

  for (let i = 0; i < arr.length; i++){ // проходим по циклу
    if (arr[i] > max){ //если эл-т больше предыдущего максимума
      max = arr[i]; // максимум становится разен элементу
    } 
    if (arr[i] < min){ //если эл-т меньше предыдущего минимума,
       min = arr[i]; //то минимум  становится = эл-ту
    }
    sum += arr[i];
  }

  console.log(sum);
    let avg = +(sum / arr.length).toFixed(2); // высчитываем среднее значение = сумма эл-к / их количество


  return { min: min, max: max, avg: avg };
}

// Задача 2

//Насадка суммирования эл-в
//Написание ф-ции, к-рая находит сумму эл-в с помощью метода reduce
function summElementsWorker(...arr) {
  if (arr.length){
    return arr.reduce((accumulator, current) => accumulator + current, 0);
  } else{
    return 0;
  }
}

//вычисление разницы между макс и мин эл-в
function differenceMaxMinWorker(...arr) {
  if (arr.length){
    let max = Math.max(...arr); // с помощью методов  Math.max и  Math.min находим макс и мин значение
    let min = Math.min(...arr);

    return max - min;
  } else{
    return 0;
  }
  

}

//Вычисление разницы сумм четных и нечетных эл-в
// Объявляем 2 переменных
function differenceEvenOddWorker(...arr) {
  if(arr.length){
      let sumEvenElement = 0;
      let sumOddElement = 0;

    for (let number of arr){ //формируем цикл для перебора всех объектов
      if (number % 2 === 0) sumEvenElement += number;
    else sumOddElement += number;
    }
    return sumEvenElement - sumOddElement;
} else {
  return 0;
}
}

// Вычисляем среднее значение четных эл-в
function averageEvenElementsWorker(...arr) {
  //Объявляем 2 переменные, в которых будут накапливаться сумма чётных элементов и их количество
  if (arr.length){
    let sumEvenElement = 0; 
    let countEvenElement = 0;

    for (let number of arr) { //перебор массива
      if (number % 2 === 0 ) { // если число четное, то
         sumEvenElement += number; // переменная увеличивается на перебиваемые эл-т
         countEvenElement ++; //переменная увеличиваетня на 1
    } 
} 
  return sumEvenElement / countEvenElement;
} else {
  return 0;
}
}

// Задача 3
// Ф-ция, которая из массива данныъ и насадки будет вохвращать максимальный результат ф-ции
function makeWork (arrOfArr, func) { //ф-ция принимает 2 аргумента: 
  //arrOfArr - передается массив, эл-ты которога массивы с данными, которые передаются в ф-wb. насадку
  // func - передается одна из ф-ций насадок
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr){ // цикл для перебора эл-в
    if (func(...arr) > maxWorkerResult) maxWorkerResult = func(...arr);
  }
  //внутри цикла каждый перебираемый эл-т передаем в ф-wb. насадку, используем ...arr (spread-элемент), дляя разделения на отдельные эл-ты
  return maxWorkerResult;
}
