
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColor = document.querySelectorAll(".color")
const currentProductSize = document.querySelectorAll(".size")
const ProductButton = document.querySelector(".productButton")
const closeButton = document.querySelector(".close")
const payment = document.querySelector(".payment")


const products = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors:[
            {
                code:"black",
                img:"./images/air.png"
            },
            {
                code:"darkblue",
                img:"./images/air2.png"
            }
        ]
    },
    {
        id:2,
        title: "BLAZER",
        price: 149,
        colors:[
            {
                code:"white",
                img:"./images/blazer.png"
            },
            {
                code:"cyan",
                img:"./images/blazer2.png"
            }
        ]
    },
    {
        id:3,
        title: "CRATER",
        price: 119,
        colors:[
            {
                code:"aqua",
                img:"./images/crater.png"
            },
            {
                code:"blueviolet",
                img:"./images/crater2.png"
            }
        ]
    },
    {
        id:1,
        title: "JORDAN",
        price: 129,
        colors:[
            {
                code:"gray",
                img:"./images/jordan.png"
            },
            {
                code:"green",
                img:"./images/jordan2.png"
            }
        ]
    },
    {
        id:1,
        title: "HIPPIE",
        price: 139,
        colors:[
            {
                code:"black",
                img:"./images/hippie.png"
            },
            {
                code:"darkblue",
                img:"./images/hippie2.png"
            }
        ]
    }
]

let currentProduct = products[0]

menuItems.forEach((item, index )=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${index * -100}vw)`

        currentProduct = products[index]

        currentProductTitle.textContent = currentProduct.title
        currentProductPrice.textContent = "$" + currentProduct.price
        currentProductImg.src = currentProduct.colors[0].img

        // changeing color balls color depending on current img
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = currentProduct.colors[index].code
       
        })
    })
})

currentProductColor.forEach((color,index) =>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = currentProduct.colors[index].img
    })
})


currentProductSize.forEach((size,index) =>{
    
    size.addEventListener("click", () =>{
        currentProductSize.forEach((size) =>{
            size.style.backgroundColor = "rgba(68, 68, 68,0.7)";
            size.style.color = "#eee"
        })
        size.style.backgroundColor = "#000";
        size.style.color = "#fff"
    })
})

ProductButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
})

closeButton.addEventListener("click", ()=>{
    payment.style.display = "none";
})
