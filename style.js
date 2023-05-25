
//-------------PLUS, MINUS, COUNTER ----------------
let minusButton = document.querySelector("#minus")
let plusButton = document.querySelector("#plus")

//---------3rd div to hold images
let div = document.querySelector("#row3")

//-----------number counter------------
let counter = document.querySelector("#counter")
counter.value = 0;
counter.innerHTML = counter.value

//-----ned this value to make images
let valueHolder = counter.value

console.log("yay")


//------functions to make images based on valueHolder 
const picCounter = (valueHolder)=>{

    while(valueHolder>0){
        let image = document.createElement('img')
        image.className = "image"
        div.appendChild(image)

        image.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.q_oEvsSW37nTyd31VcqU1AHaHi%26pid%3DApi&f=1&ipt=b61c53b929fdb71a6e67eaed2e96b0c2db4873eeff5465e92e29dc5d1eaef4f4&ipo=images"
        
        valueHolder--
    }
}

//----------minus button
minusButton.addEventListener ('click', ()=>{

    if(counter.innerHTML > 0){
        counter.value--;
        counter.innerHTML = counter.value

        valueHolder = counter.value
        console.log(valueHolder)
        picCounter(valueHolder)
    }
})


//-------------plus button
plusButton.addEventListener ('click', ()=>{

    counter.value++;
    counter.innerHTML = counter.value

    valueHolder = counter.value
    console.log(valueHolder)
    picCounter(valueHolder)
    
})













