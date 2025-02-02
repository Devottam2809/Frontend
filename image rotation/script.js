const rotate_Obj = document.querySelector('.rotate-obj');
const rotate_Button = document.querySelector('.rotate-btn');

let rotation = 0;

rotate_Button.addEventListener('click', () => {
        rotation = rotation + 50;
        rotate_Obj.style.transform = `rotate(${rotation}deg)`;
});

