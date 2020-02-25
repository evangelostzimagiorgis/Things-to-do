const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const uldone =document.querySelector('.ul-done');
const input = document.querySelector('input');
let a;

//remove things to the done list
ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI'){
        uldone.append(e.target);
    }
})

//handle input field
input.addEventListener('input', e => {
    a = e.target.value;
})

//onclick button
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e)
    if( a === undefined || a === ''){
        document.querySelector('span').classList.remove('d-none')
    } else {
        document.querySelector('span').classList.add("d-none");
        const li = document.createElement('li');
        li.className = "list-group-item";
        li.textContent = `${a}`;
        ul.append(li)
    }

    a = "";    
    document.querySelector('input').value = "";
})































// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close');

// button.addEventListener('click', () => {
//     popup.style.display = 'block';
// });

// close.addEventListener('click', e  => popup.style.display = 'none')
