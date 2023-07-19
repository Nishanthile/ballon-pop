


// let head = document.querySelector('.head-img');
// head.addEventListener('click', function() {
//     head.classList.add('vert-move');
//     console.log("clicked");
//   });






function addClass() {

    const head = document.querySelector('.head-img');
    const body = document.querySelector('.body-img');
    const hand = document.querySelector('.hand-img');
    head.classList.toggle("vert-move");
    body.classList.toggle("body-move");
    hand.classList.toggle("body-move");


}

