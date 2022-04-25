var items=[
    {
        img:"./assets/image/biryani.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"40% OFF",
        time: "42 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4 ☆",
        price:"₹250 for one",
        extraInfo:"2275 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    },
    {
        img:"./assets/image/biryani1.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"35% OFF",
        time: "40 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.5 ☆",
        price:"₹270 for one",
        extraInfo:"2271 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    },
    {
        img:"./assets/image/biryani3.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"38% OFF",
        time: "20 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.5 ☆",
        price:"₹300 for one",
        extraInfo:"3079 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani5.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"29% OFF",
        time: "36 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.9 ☆",
        price:"₹600 for one",
        extraInfo:"6877 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani8.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"23% OFF",
        time: "58 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"3.5 ☆",
        price:"₹400 for one",
        extraInfo:"1965 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani5.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"40% OFF",
        time: "42 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.8 ☆",
        price:"₹380 for one",
        extraInfo:"2275 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani8.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"40% OFF",
        time: "43 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.9 ☆",
        price:"₹567 for one",
        extraInfo:"2635 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani5.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"38% OFF",
        time: "38 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.1 ☆",
        price:"₹381 for one",
        extraInfo:"2375 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani1.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"21% OFF",
        time: "24 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"5 ☆",
        price:"₹350 for one",
        extraInfo:"7675 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani7.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"30% OFF",
        time: "43 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"3.8 ☆",
        price:"₹552 for one",
        extraInfo:"7275 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani1.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"10% OFF",
        time: "32 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.5 ☆",
        price:"₹432 for one",
        extraInfo:"2289 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"12% OFF",
        time: "30 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4.2 ☆",
        price:"₹453 for one",
        extraInfo:"2345 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani8.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"40% OFF",
        time: "42 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4 ☆",
        price:"₹25 for one",
        extraInfo:"2275 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
    ,
    {
        img:"./assets/image/biryani3.jpg",
        icon:"./assets/image/icon.jpeg",
        discount:"40% OFF",
        time: "42 Min",
        shopName:"Biryani Karkhana",
        itemDescription:"Biryani, Kebab, Mughlai",
        rating:"4 ☆",
        price:"₹25 for one",
        extraInfo:"2275 orders placed from here recently",
        safty:"./assets/image/safe-delivery-icon.jpeg",
    }
]
var card=document.getElementById("product");
for(i=0;i<items.length;i++){
    div0=document.createElement('div');
    div0.className="card"
   var div1=document.createElement('div');
    div1.className="image";
    var img=`<img  class="image-food" src="${items[i].img}" >`;
    div12=document.createElement('div');
    div12.className="off";  
    div13=document.createElement('div');
    div13.className="time";
    div12.innerHTML=items[i].discount;
    div13.innerHTML=items[i].time;
    div1.innerHTML=img;
    div0.appendChild(div1);
    div0.appendChild(div12);
    div0.appendChild(div13);
    // image ends here
    var div2=document.createElement('div');
    div2.className="shop-name";//major div
    div3=document.createElement('div');
    div3.className="shop-full-name";
    div4=document.createElement('div');
    div4.className="rating";
    div3.innerHTML=items[i].shopName;
    div4.innerHTML=items[i].rating;
    div2.appendChild(div3);
    div0.appendChild(div2);
    div2.appendChild(div4);
    div0.appendChild(div2);
    // shop name ends here
     div5=document.createElement('div');//major div
    div5.className="item-name";
    div6=document.createElement('div');
    div6.className="food-name";
    div7=document.createElement('div');
    div7.className="price";
    div6.innerHTML=items[i].itemDescription;
    div7.innerHTML=items[i].price;
    div5.appendChild(div6);
    div5.appendChild(div7);
    div0.appendChild(div5);
    div8=document.createElement('div');//major div
    div8.className="Extra-info";
    div9=document.createElement('div');
    div9.className="icon"
    div10=document.createElement('div');
    div10.className="extra";
    div9.innerHTML=`<img class="icon-image" src="${items[i].icon}" />`;
    div10.innerHTML=items[i].extraInfo;
      divsafty=document.createElement('div')    //adding extra info safty icon 
      divsafty.className="safty"
    divsafty.innerHTML=`<img class=safeDelivery src="${items[i].safty}" / >`;
                                    
    div8.appendChild(div9);
    div8.appendChild(div10);
    div8.appendChild(divsafty); 
    div0.appendChild(div8);
    // div11=document.createElement('div');//major div
    // div11.className="off-time";
    // div12=document.createElement('div')
    // div12.className="off";  
    // div13=document.createElement('div');
    // div13.className="time";
    // div12.innerHTML=items[i].discount;
    // div13.innerHTML=items[i].time;
    // div11.appendChild(div12);
    // div11.appendChild(div13);
    // div0.appendChild(div11);
    
    product.appendChild(div0);
}
