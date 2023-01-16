class Student {
     constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.isActive = true;
     }

     getInfo() {
        return (`Студент ${this.course} ${this.university}, ${this.fullName}`);
     }

     #marks = [5, 4, 4, 5];

     get marks() {
         if(this.isActive) {
            return this.#marks = [5, 4, 4, 5];
         } else {
            return null;
         }
     }

     set marks(mark) {
        return this.#marks.push(mark);
     }

     getAverageMark() {
      const marks = this.#marks;
      const iterator = marks.values();
      let sum = 0;
      for (const mark of iterator) {
         sum += mark;
      }
      const avgMakrs = (sum / marks.length).toFixed(1);
      return avgMakrs;
     }

     dismiss() {
      return this.isActive = false;
     }

     recover() {
      return this.isActive = true;
     }
}

const student1 = new Student('Вищої Школи Психотерапії м.Одеса', '1го курсу', 'Остап Родоманський Бендер');

// Get stidents information
console.log('Students information:', student1.getInfo());

// Setter that add mark to marks
student1.marks = 5;
console.log(student1);

// Avarage mark
console.log('Avarage mark:', student1.getAverageMark());

// Dismiss student
student1.dismiss();
console.log('Students marks after dismiss:', student1.marks);

// Recover student
student1.recover();
console.log('Students marks after recover:', student1.marks);

// ----------------------------------------------------Advanced--------------------------------------------------------

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScolarship(), 30000);
    }

    getScolarship() {
      let avgMark = this.getAverageMark();
      if(this.isActive && avgMark >= 4.0) {
         console.log('Ви отримали 1400 грн. стипендії');
      } else {
         console.log('Нема грошей');
      }
    }
}

const student2 = new BudgetStudent('Академії Мистецтв м.Львів', '2го курсу', 'Анна Вітвіцька Тест');
