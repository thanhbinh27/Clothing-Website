var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function removeProduct(x) {
    var element = x.parentElement.parentElement;
    element.remove();
    carttotal();
 }

 // function inputChange() {
 //    var cartItem = document.querySelectorAll("#gioHang");
 //    for (var i = 0; i < cartItem.length; i++) {
 //       var inputvalue = cartItem[i].querySelector("input");
 //       inputvalue.addEventListener("change", function () {
 //          carttotal();
 //       })
 //    }
 // }

 // function carttotal() {
 //    var cartItem = document.querySelectorAll("#gioHang");
 //    var totalAllP = 0;
 //    for (var i = 0; i < cartItem.length; i++) {
 //       var inputvalue = cartItem[i].querySelector("input").value;
 //       var productPrice = cartItem[i].querySelector("span").innerHTML;
 //       totalA = (inputvalue * productPrice);
 //       totalAllP = totalAllP + totalA;
 //    }
 //    document.getElementById("totalprice").innerHTML = totalAllP;
 //    inputChange();
 // }
 // carttotal();



