let seatCount = 1;
let totalPrice = 0;

const buyBtn = document.getElementById("buy-ticket");
const ph = document.getElementById("paribahan");

buyBtn.addEventListener("click", function(){
    
})

const seats = document.getElementById("seat-container");
const btns = seats.getElementsByClassName("btn");
for(const btn of btns){
    btn.addEventListener("click", function(){
        const h3 = document.createElement("h3");
        const h2 = document.createElement("h3");
        h2.innerText = ['Economic'];
        const h1 = document.createElement("h3");
        const sum = totalPrice + 550;
        totalPrice += sum;
        h1.innerText = ['BDT 550'];
        h3.innerText = seatCount+ ". "+btn.innerText; 
        if(seatCount > 4){
            alert("kire vay")
            return;
        }
        setInnerText("tatal-price", sum);
        seatCount++;
        const titlaContainer = document.getElementById("title-count");
        const seatTitle = document.getElementById("economic");
        const price = document.getElementById("price")
        titlaContainer.appendChild(h3);
        seatTitle.appendChild(h2);
        price.appendChild(h1);

    })
}


function setInnerText (id, value){
    document.getElementById(id).innerText= value;
}