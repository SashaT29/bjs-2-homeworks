"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if(discriminant > 0) {
    let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
    let secondRoot = ((-b - Math.sqrt(discriminant)) / (2 * a));
    arr.push(firstRoot, secondRoot);
  }
return arr;
  }
  solveEquation(1,2,1);



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = percent / 100 / 12; //преобразовали процентную ставку
  let credit = amount - contribution; //рассчитали тело кредита
  let pay = credit * (per + per/(Math.pow(1 + per, countMonths) - 1)); //ежемесечная оплата
  let totalAmount = +(pay * countMonths).toFixed(2); //общая сумма оплаты

  return totalAmount;
}