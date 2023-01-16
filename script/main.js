// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

class Student {
     constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
     }

     getInfo() {
        return (`Студент ${this.course} ${this.university}, ${this.fullName}`);
     }

     #marks = [5, 4, 4, 5];

     get marks() {
        return this.#marks;
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
      this.#marks = null;
     }

     recover() {
      this.#marks = this.#marks;
     }
     


}

const student1 = new Student('Вищої Школи Психотерапії м.Одеса', '1го курсу', 'Остап Родоманський Бендер');

// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
console.log('Students information:', student1.getInfo());

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
student1.marks = 5;
console.log(student1);

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
console.log('Avarage mark:', student1.getAverageMark());

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
student1.dismiss();


console.log(student1.marks);

// 7. Створіть метод this.recover, який дозволить поновити студента
student1.recover();

console.log(student1.marks);
// ----------------------------------------------------Advanced--------------------------------------------------------------------------
// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
    }
}

const student2 = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', '1го курсу', 'Остап Родоманський Бендер');
console.log({student1, student2});
// 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно:) )