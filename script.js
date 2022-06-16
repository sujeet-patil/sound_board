var btnsxyz = document.querySelectorAll('.btn');
var slider =document.getElementsByClassName('slider')[0];
function stopSounds(){
    for(var i=0;i<btnsxyz.length;i++){
        const sound = document.getElementById(btnsxyz[i].innerText);
        sound.pause();
        sound.currentTime=0;
    }
}

function playSound(btn){
    btn.addEventListener("click", function(){
        stopSounds();
        var curr=document.getElementById(btn.innerText);
        curr.volume= parseInt(slider.value)*0.1;
        curr.play();
        slider.addEventListener("change", function(e){
            console.log(parseInt(e.currentTarget.value));
            curr.volume = parseInt(e.currentTarget.value)*0.1;
        })
    })
}

for(var i=0;i<btnsxyz.length;i++){
    var buttonxyz = btnsxyz[i];
    playSound(buttonxyz);
}

document.querySelector('.stop').addEventListener("click",()=>{
    stopSounds();
});