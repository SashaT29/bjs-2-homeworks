let firstStudent = new Student("Соломия", "женский", 29);
let secondStudent = new Student("Юна", "женский", 22);
let thirdStudent = new Student("Илья", "мужской", 31);
let fourthStudent = new Student("Никита", "мужской", 44);


function Student(name, gender, age) {
      this.name = name; //Все аргументы функции-конструктора сохраните в соответствующие свойства
      this.gender = gender;
      this.age = age;
      this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks !== undefined){ // если свойство marks существует, то 
    this.marks.push(...marks); //добавляем студенту оценку

  }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks === []){
        return 0;
    } else{
        return this.marks.reduce((acc, item, index, marks) => acc + item / marks.length, 0);
    }
  
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
