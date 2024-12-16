let seatCount = 1;
let totalPrice = 0;
const array = [];

const buyBtn = document.getElementById("buy-ticket");
const ph = document.getElementById("paribahan");

const seats = document.getElementById("seat-container");
const btns = seats.getElementsByClassName("btn");
for(const btn of btns){
    btn.addEventListener("click", function(e){
        const vari = e.target;
        if(array.includes(vari)){
            alert("You Have Already Selected")
            return
        }
        else{
            array.push(vari)
        }
        const h3 = document.createElement("h3");
        const h2 = document.createElement("h3");
        h2.innerText = ['Economoy'];
        const h1 = document.createElement("h3");
        const sum = totalPrice + 550;
        h1.innerText = ['BDT 550'];
        h3.innerText = seatCount+ ". "+btn.innerText; 
        if(seatCount === 1){
            const applyBtn = document.getElementById("apply");
            const nextBtn = document.getElementById("next-btn");
            applyBtn.disabled = false;
            nextBtn.disabled = false;
        }
        if(seatCount > 4){
            alert("You can buy a maximum of 4 Tickets....")
            return;
        }
        const countseat = parseInt(document.getElementById("seat-count").innerText);
        const ticketotal = countseat + 1;
        setInnerText("seat-count", ticketotal);
        btn.classList.add("bg-orange-200");
        const totalSeat = parseInt(document.getElementById("available").innerText);
        const availableSeat = totalSeat - 1;
        setInnerText("available", availableSeat);
        setInnerText("tatal-price", sum);
        setInnerText("grand-total", sum);
        totalPrice += 550;
        seatCount++;
        const titlaContainer = document.getElementById("title-count");
        const seatTitle = document.getElementById("economic");
        const price = document.getElementById("price")
        titlaContainer.appendChild(h3);
        seatTitle.appendChild(h2);
        price.appendChild(h1);
        const couponbtn = document.getElementById("apply")
        couponbtn.addEventListener("click", function(){
            const couponContainer = document.getElementById("coupon-container");
            const couponCode = document.getElementById("coupon").value;
            const converted = couponCode.split(" ").join('').toUpperCase();
            if(converted === "NEW15"){
                const discount = sum * 0.15;
                const grandTotal = sum - discount;
                setInnerText("grand-total", grandTotal);
                couponContainer.classList.add("hidden");
            }
            else if(converted === "COUPLE20"){
                const discount = sum * 0.20;
                const grandTotal = sum - discount;
                setInnerText("grand-total", grandTotal);
                couponContainer.classList.add("hidden");
            }
            else{
                alert("invalid coupon code....")
                return;
            }
        
        })
    })
}


function transferOtherSection (id){
    const buyBtn = document.getElementById(id);
    buyBtn.scrollIntoView({behavior: 'smooth'});
}

function setInnerText (id, value){
    document.getElementById(id).innerText= value;
}
function setBackgroundColorById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-black');
}

