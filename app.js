let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

let students = [];

// Load existing students from local storage if any
if (localStorage.getItem('students')) {
  students = JSON.parse(localStorage.getItem('students'));
}

btn.addEventListener('click', ()=>{
  let addstudents = prompt("Write student name here");
  students.push(addstudents);
  localStorage.setItem("students", JSON.stringify(students));

  let separatedWords = [];
  for (let i = 0; i < students.length; i++) {
    const wordsArray = students[i].split(' ');
    separatedWords.push(...wordsArray);
  }
  for(let j = 1; j <= students.length; j++) {
  list.innerHTML = students.map(student => `<li style="list-style:circle;"> ${student}</li>`).join('');
  }
});
