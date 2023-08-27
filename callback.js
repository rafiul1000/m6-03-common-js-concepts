function greeting(greetingHandler, name){
    greetingHandler(name)
}
// const name = 'Halim mama'
// const number = 45;
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}
function greetingHandler(name){
    console.log('Good morning', name);
}
function greetEvening(name){
    console.log('Good Evening', name)
}
function greetNight(name){
    console.log('Good Night', name)
}
function greetMidnight(name){
    console.log('Bad Midnight', name)
}
greeting(greetingHandler, 'Jim');
greeting(greetingHandler, 'Noon');
greeting(greetingHandler, 'Sinha');
greeting(greetEvening, 'Rafiul');
greeting(greetEvening, 'sakib');
greeting(greetNight, 'Bangladesh');
greeting(greetMidnight, 'babu');