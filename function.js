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

