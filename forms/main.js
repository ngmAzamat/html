var counter = 0;
var aside = document.getElementById('aside');




function sub(sub) {
    counter++
    if (counter == 1) {
        sub.innerHTML = "вы подписаны"; 
        aside.innerHTML = 'маховик.jpg';

    } else {
        sub.innerHTML = "подписадся"; 

    }
}