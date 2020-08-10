const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


//1
function getMyTaxes (salary) { 
   return  (this.tax * salary);
};


//2
function getMiddleTaxes () {
    return+(this.tax * this.middleSalary).toFixed(2);
};


//3
function getTotalTaxes () {
return ( this.tax * this.middleSalary * this.vacancies);
};


//4
function getMySalary(contry) {
  const taxContry = contry.tax;
  const salary = Math.floor(Math.random() * (20000 - 15000) + 15000);
  const taxes = +(taxContry * salary).toFixed(2);
  const profit = +(salary - taxes).toFixed(2);
  return {salary, taxes, profit};
};

console.log(getMySalary(ukraine));
const timer1 = setInterval(() => console.log(getMySalary(ukraine)), 10000);
console.log(getMySalary(litva));
const timer2 = setInterval(() => console.log(getMySalary(litva)), 10000);
console.log(getMySalary(latvia));
const timer3 = setInterval(() => console.log(getMySalary(latvia)), 10000);






document.writeln(` №1: <p>IT-спеціалісти платять податок в Україні отримуючи зарплату [25000 uah]-[${(getMyTaxes.call(ukraine , 25000))} uah]. </p>`);
document.writeln(`<p>IT-спеціалісти платять податок в Латвії отримуючи зарплату [25000 uah]-[${(getMyTaxes.call(latvia , 25000))} uah] податок. </p>`);
document.writeln(`<p>IT-спеціалісти платять податок в Литві отримуючи зарплату [25000 uah]-[${(getMyTaxes.call(litva, 25000))} uah] податок. </p>`);

document.writeln(`№2: <p>У середньому податків платятт IT-спеціалісти в Україні [${(getMiddleTaxes.call(ukraine))} uah] </p>`);
document.writeln(`<p>У середньому податків платятт IT-спеціалісти в Латвії [${(getMiddleTaxes.call(latvia))} uah] </p>`);
document.writeln(`<p>У середньому податків платятт IT-спеціалісти в  Литві [${(getMiddleTaxes.call(litva))} uah] </p>`);

document.writeln(`№3: <p> Всього податків платять IT-спеціалісти в Україні [${(getTotalTaxes.call(ukraine))}] uah </p>`);
document.writeln(`<p> Всього податків платять IT-спеціалісти в Латвії [${(getTotalTaxes.call(latvia))}] uah </p>`);
document.writeln(`<p> Всього податків платять IT-спеціалісти в Литві [${(getTotalTaxes.call(litva))}] uah </p>`);

document.writeln(` №4: <p>Результат в консолі </p>`);

