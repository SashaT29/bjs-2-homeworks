﻿// Задача 1. Форматтер чисел

function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else {
        return parseFloat(Number(value));
    }
}


function validateCount(value) {
    try {
       return parseCount(value); 
    } catch(error) {  
        return error;
    }
}


//Задача 2. Треугольник

class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;  
        
        if ((firstSide + secondSide < thirdSide) || (firstSide + thirdSide < secondSide) || (secondSide + thirdSide < firstSide)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        let p = this.perimeter / 2;
        return Number((Math.sqrt(p*(p - this.firstSide)*(p - this.secondSide)*(p - this.thirdSide)).toFixed(3)));
    }
}

   function getTriangle(firstSide, secondSide, thirdSide){
    try {
        return new Triangle(firstSide, secondSide, thirdSide)
    }
    catch(error){
        return{
            get perimeter() { return "Ошибка! Треугольник не существует"; },
            get area() { return "Ошибка! Треугольник не существует";}
            }
        }

    }

