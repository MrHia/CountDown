const song = document.getElementById('songplay');
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".Play-forward");
const backBtn = document.querySelector(".Play-back");
const durationTime = document.querySelector(".duration");
const reainingTime = document.querySelector(".reaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");

// const musiclist = ['100_years_love.mp3',
//     'Crush2.mp3',
//     'internetLove.mp3',
//     'matchanah.mp3',
//     'NgheBaiNayDiEm.mp3',
//     'NgheEm.mp3',
//     'SimpLove.mp3',
//     'Thanh.mp3',
//     'ThichEmHoiNhieu.mp3',
//     'Tinh_dang_nhu_coffe.mp3',
//     'TinhYeuChiecLa.mp3',
//     'Tuong_Tu.mp3',
//     'VayHoa.mp3'];
const musiclist =[

    {
        id: 1, 
        title: "100 year love ",
        file: "100_years_love.mp3",
        
    },
    {
        id: 2, 
        title: "Crush 2 ",
        file: "Crush2.mp3",
        
    },
    {
        id: 3, 
        title: "internet Love ",
        file: "InternetLove.mp3",
        
    },
    {
        id: 4, 
        title: "Matchanah ",
        file: "matchanah.mp3",
        
    },
    {
        id: 5, 
        title: "Nghe bài này đi em ",
        file: "NgheBaiNayDiEm.mp3",
        
    },
    {
        id: 6,
        title: "Nghe em",
        file: "NgheEm.mp3",
        
    },
    {
        id: 7, 
        title: "SimpLove",
        file: "SimpLove.mp3",
        
    },
    {
        id: 8,
        title: "Thanh",
        file: "Thanh.mp3",
        
    },
    {
        id: 9, 
        title: "Thích em hơi nhiều",
        file: "ThichEmHoiNhieu.mp3",
        
    },
    {
        id: 10, 
        title: "Tình đắng như coffe",
        file: "Tinh_dang_nhu_coffe.mp3",
        
    },
    {
        id: 11, 
        title: "Tinh yêu xanh lá",
        file: "TinhYeuChiecLa.mp3",
        
    },
    {
        id: 12, 
        title: "Tương tư",
        file: "Tuong_Tu.mp3",
        
    },
    {
        id: 13, 
        title: "Váy hoa nhí",
        file: "VayHoa.mp3",
        
    },




];
var indexsong = 0;

playBtn.addEventListener("click", playPause);
let isPlaysong = true;


let Timer;

function playPause() {
    if (isPlaysong) {
        songplay.play();
        isPlaysong = false;
        playBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
        setInterval(displayTimer, 500);
    } else {
        songplay.pause();
        isPlaysong = true;

        playBtn.innerHTML = '<ion-icon name="play" ></ion-icon>';
        clearInterval(Timer);
    }


}

nextBtn.addEventListener("click", function () { ChangeSong(1) });
backBtn.addEventListener("click", function () { ChangeSong(-1) });
song.addEventListener("ended", handleEndedSong);
function handleEndedSong(){
    ChangeSong(1);
}
function ChangeSong(dir) {
    if (dir == 1) {
        indexsong++;
        if (indexsong >= musiclist.length) {
            indexsong = 0;
        }
        isPlaysong = true;
        console.log("hi next");

    } else if (dir == -1) {
        indexsong--;
        if (indexsong < 0) {
            indexsong = musiclist.length - 1;
        }
        console.log("hi back");
        isPlaysong = true;

    }
    init(indexsong);
    playPause();

}

function displayTimer() {
    const { duration, currentTime } = song;
    rangeBar.max =  duration;
    rangeBar.value = currentTime;
    reainingTime.textContent = formatTimer(currentTime);
    if (!duration) {

        durationTime.textContent = "00:00";
    } else {
        durationTime.textContent = formatTimer(duration);
    }
}

function formatTimer ( number) {

    const minutes = Math . floor (number / 60) ;
    const seconds = Math. floor (number-minutes * 60) ;
    return `${minutes} : ${seconds}`;
}

rangeBar.addEventListener("change", handleChangeBar);

function handleChangeBar(){
     song.currentTime =  rangeBar.value;
}

function init(indexsong){
    displayTimer();
    song.setAttribute("src", `./asset/Audio/${musiclist[indexsong].file}`);
    musicName.textContent = musiclist[indexsong].title;

}
init(indexsong);