let btn = document.querySelector('button');
let tswira = document.querySelector('img');

function taf3il(){
    if(localStorage.getItem('hrr') === 'on'){
        tswira.style.display = 'flex';
        btn.remove();
        sawt = new Audio('audio/hrr.mp3')
        sawt.play();
        zwl();
    }
};

btn.addEventListener('click', () => {
    window.localStorage.setItem('hrr', 'on')
    taf3il();
});

taf3il();

function zwl(){
    document.addEventListener('keydown', (e) => {
        if(e.key == "x"){
            localStorage.clear()
        }
    })
}

