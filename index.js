p1 = document.querySelector('p');
input1 = document.querySelector('input');
form1 = document.querySelector('form');

today = new Date('4/14/1999');

daysTW = 6 - today.getDay();
const dayOfWeekName = today.toLocaleString(
    'default', { weekday: 'long' }
);
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    input1.value ? p1.innerText = 'Hello ' + input1.value + '. Today is ' + dayOfWeekName + '.' + (today.getDay() != 6 || today.getDay() != 7 ? (' Only ' + daysTW + ' days left untill weekend!') : ' It\'s the weekend!') : 0;
});