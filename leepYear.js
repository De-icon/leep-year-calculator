const years = document.getElementById('yearInPut')
const outPut = document.querySelector('#outPut')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const year = years.value
   
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    outPut.innerHTML=("It an leep year")
                }else{
                    outPut.innerHTML=("Not an leep year")
                }
            }else {
                outPut.innerHTML=("It an leep year")
            }
        } else {
            
            outPut.innerHTML=("Not an leep year")
        }
   

    
})

