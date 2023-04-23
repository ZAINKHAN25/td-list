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
  addstudents = addstudents.trim();
  if(addstudents == ""){
    return false
  }

  localStorage.setItem("students", JSON.stringify(students));

  let separatedWords = [];
  for (let i = 0; i < students.length; i++) {
    const wordsArray = students[i].split(' ');
    separatedWords.push(...wordsArray);
  }
  for(let j = 1; j <= students.length; j++) {
  list.innerHTML = students.map(student => `<li> ${student}</li>`).join('');
  }
});
const deleteBtn = document.querySelector('#deleteBtn');

deleteBtn.addEventListener('click', () => {
  // Set students array to an empty array
  students = [];

  // Update local storage with the empty array
  localStorage.setItem('students', JSON.stringify(students));

  // Clear the list element
  list.innerHTML = '';
});