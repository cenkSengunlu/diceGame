document.getElementById("myBtn").addEventListener("click", clickmyBtn);
function clickmyBtn() {
    document.querySelector('#dice1').classList.remove("zar-1-c", "zar-2-c", "zar-3-c", "zar-4-c", "zar-5-c", "zar-6-c");
    document.querySelector('#dice2').classList.remove("zar-1-c", "zar-2-c", "zar-3-c", "zar-4-c", "zar-5-c", "zar-6-c");
    let deger1=Math.floor(Math.random() * 6) + 1;
    let deger2=Math.floor(Math.random() * 6) + 1;

    document.querySelector('#dice1').classList.add(`zar-${deger1}-c`);
    document.querySelector('#dice2').classList.add(`zar-${deger2}-c`);
    
    if(deger1<deger2){
        document.getElementById("match").innerHTML = "Player 2 Wins!";
    }
    else if(deger1>deger2){
        document.getElementById("match").innerHTML = "Player 1 Wins!";
    }
    else{
        document.getElementById("match").innerHTML = "Draw!";
    }   
}
clickmyBtn();