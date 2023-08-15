let btn = document.querySelector('button');
let tswira = document.querySelector('.bg');
let inpt = document.querySelector('input');

function taf3il(){
    if(localStorage.getItem('l5awf') === '5adam'){
        tswira.style.height = '100%';
        btn.remove();
        sawt = new Audio('audio/hrr.mp3')
        sawt.play();
        document.documentElement.requestFullscreen();
        zwl();
    }
};


btn.addEventListener('click', () => {
    window.localStorage.setItem('l5awf', '5adam')
    setTimeout(function(){
        taf3il();
    },3000)
});

taf3il();

function zwl(){
    document.addEventListener('keydown', (e) => {
        if(e.key){
            inpt.focus()
        }
    })
    inpt.addEventListener('input', () =>{
        let kilta = inpt.value.toLowerCase();
        if(kilta === "adam pro" || kilta === "adampro"){
        localStorage.clear()
        location.reload()
        }
    })
}

