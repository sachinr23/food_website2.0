let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// window.onscroll = () => {

//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     section.forEach(sec => {

//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
//             });
//         };

//     });

// }

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;





// form Validation..
function success() {
    document.getElementById('msg').innerText = "Your Order added to your Cart ";
    document.getElementById("msg").style.display = "";
    document.getElementById("error").style.display = "none";
}

function fail() {
    document.getElementById('error').innerHTML = "Missing Some details";
    document.getElementById("error").style.display = "";
    document.getElementById("msg").style.display = "none";

}



var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);



function displayDetails() {
    var row = 1;
    var product = document.getElementById("item").value.toString();
    var price = document.getElementById("quantity").value;
    var address = new Date(document.getElementById("time").value);


    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    // console.log(cell1);
    cell1.innerHTML = product;
    cell2.innerHTML = price;
    cell3.innerHTML = address;
    console.log(newRow);
    // alert(newRow);

    row++;

    myFunction();
    // alert(product);
}

function myFunction() {

    document.getElementById("myForm").reset();
    document.getElementById("cart").style.display = "inline-block";
}

function validation() {
    var phoneno = /^\d{10}$/;
    var uname = document.getElementById('name').value;
    var num = document.getElementById('phone').value;
    var food_name = document.getElementById('item').value;
    var extra = document.getElementById('extra').value;
    var item_quantity = document.getElementById('quantity').value;
    var orderTime = document.getElementById('time').value;
    var address = document.getElementById('address').value;
    if (uname == '') {
        alert('Name field cannot be Empty*');
        fail();
        return false;
    }
    if (num.match(/\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/)) {
        if (food_name == '') {
            alert('Please Enter your Order * ');
            fail();
            return false;
        }
    } else {
        alert("please Enter correct number ");
        fail();
        return false;
    }
    if (item_quantity < 1 || item_quantity > 5) {
        alert('Order should be atleast min 1 or max 5 *');
        fail();
        return false;
    }
    if (orderTime == '') {
        alert('Please Choose Order date and time*');
        fail();
        return false;
    }
    if (address == '') {
        alert('Please Enter your address to recieve your Order *');
        fail();
        return false;
    } else {
        success();
        displayDetails();
    }
}