//FOR SHOPPING CART PART

//for cart popup
function toggleCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.toggle('active');
}

    

// for close cart popup
function closeCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.remove('active')
}
    
//move the menu to the right and left when click back and next
var step = 100;
var stepfilter = 60;
var scrolling = true;

$(".back").bind("click", function (e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
})

// for add to cart button

function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cart-item').getElementsByTagName('tbody')[0];
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item => item.cells[0].textContent === itemName);
    if (existingItem) {
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) + 1;
        existingItem.querySelector('.item-count').textContent = itemCount;

        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2);
    } else {
        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
            <td>${itemName}</td>
            <td class='item-count'>1</td>
            <td class='item-price'>${itemPrice}</td>
            <td class='item-total'>${itemPrice}</td>
        `;

    }
    updateCartCountAndTotal ();
}
// update count and total
function updateCartCountAndTotal () {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.querySelectorAll('#cart-item tbody tr');
   
    let totalCount = 0;
    let total = 0;

    cartItems,froEach(item => {
        const itemCount = parseInt(item.querySelector('.item-count').textContent);
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
        totalCount += itemCount;
        total += itemTotal;
    });
    cartCount.textContent = totalCount;
    cartTotal.textContent + total.toFixed(2);
}

// Search function 
function searchFunction() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    console.log("Search input:", input);
    let components = document.getElementsByClassName('component');
    console.log("Components found:", components.length);

    for (let i = 0; i < components.length; i++) {
        let cardName = components[i].getAttribute('data-name').toLowerCase();
        console.log("Card name:", cardName);
        if (card.includes(input)) {
            components[i].style.display = 'block';
        } else {
            components[i].style.display = 'none';
        }
    }
}
