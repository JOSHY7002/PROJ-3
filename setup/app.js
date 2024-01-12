// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Luffy',
    job: 'Captain',
    img: 'Luffy.png',
    text: "Monkey D. Luffy, also known as Straw Hat Luffy and commonly as Straw Hat, is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters.",
  },
  {
    id: 2,
    name: 'Zoro',
    job: 'Swordsman',
    img: 'zoro.png',
    text: 'Zoro is the first crewmate to join Monkey D. Luffy to be part of his crew of pirates, after he is rescued by Luffy from execution. Zoro is a highly skilled swordsman and serves as the crews combatant',
  },
  {
    id: 3,
    name: 'Sanji',
    job: 'Cook',
    img: 'Sanji.png',
    text: '"Black Leg" Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.',
  },
  {
    id: 4,
    name: 'Nami',
    job: 'Navigator',
    img: 'Nami.png',
    text: '"Cat Burglar" Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the third member of the crew and the second to join',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const First = document.querySelector('.First');
const Last = document.querySelector('.Last');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

First.addEventListener('click', function () {
currentItem = 0;
  showPerson(currentItem);
});

Last.addEventListener('click', function () {
  currentItem = 3;
  showPerson(currentItem);
});
