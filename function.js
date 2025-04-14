function changeBlue() {
    document.getElementById('box').style.background="royalblue";
    document.getElementById('box').style.fontsize="20px";
}
function changeRed() {
    document.getElementById('box').style.background="red";
    document.getElementById('box').style.fontsize="20px";
    document.getElementById('box').style.color="white";
}

function addItem() {
    let newmenu = prompt("Enter new menu");

    let newItem = document.createElement("li");
    newItem.innerText = newmenu;
    document.getElementById('list').appendChild(newItem);
}

function orderFood() {
    let checked_menu = document.querySelectorAll('input[type=checkbox]:checked')

    let info = document.getElementById('info');
    let priceInfo = document.getElementById('priceInfo');

    let checked_values = [];
    let price = 0;

    checked_menu.forEach(function (checkbox) {
        if (checkbox.value == "nasi ayam") {
            price += 8;
        } else if (checkbox.value == "mee goreng") {
            price += 5;
        }else if (checkbox.value == "nasi lemak") {
            price += 1;
        } else if (checkbox.value == "roti canai") {
            price += 1.30
        }

        checked_values.push(checkbox.value);
    } )

    info.innerText = checked_values.join(', ');
    priceInfo.innerHTML = "<strong>Total Price : RM " + price + "\n </strong>";
}

let btnKlik = document.getElementById('klik');

btnKlik.onclick = function() {
    alert('Button ditekan');
}

let txtWelcome = document.getElementById('welcome');

txtWelcome.onmouseover = function() {
    txtWelcome.innerText = "Selamat Datang";
}

txtWelcome.onmouseout = function() {
    txtWelcome.innerText = "Welcome";
}

let cow = document.getElementById('cow');

cow.onmouseover = function() {
    this.src = "https://bythehorns.co.nz/cdn/shop/products/whitehighlandcowcolourweb_d4db7dec-4646-4fb1-955e-668d6290f274.jpg?v=1604216394&width=1080";

    this.style.filter = "blur(0px)";
    this.style.transform = "scale(2)";
    this.style.transition = "transform 1.0s ease-in-out";
}

cow.onmouseout = function() {
    this.src = "https://www.betterwithdairy.com/sites/default/files/2025-02/What_Does_Dairy_Cow_Eat.webp";

    this.style.filter = "blur(2px)";
    this.style.transform = "scale(1)";
}

function checkJabatan() {
    let jabatan = document.getElementById('jabatan');
    let selectedJabatan = jabatan.options[jabatan.selectedIndex].value;

    alert("You have selected : " + selectedJabatan);
    console.log(selectedJabatan);
}

