const input = document.querySelector('#inputForm')
const tokens = 'hNJKYhJHzXCo93lKL2CnsaN6kKx6iS23'
const btn = document.querySelector('#button')
let imgResult = document.querySelector('#gif')
const form = document.querySelector('#mainForm')
const removeButton = document.querySelector('#remove')



form.addEventListener('submit', async function(e){
    e.preventDefault()
    let searchTerm = input.value;
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "hNJKYhJHzXCo93lKL2CnsaN6kKx6iS23"
        }})
        findGyph(res)
        console.log(res)
        console.log(input.value)
    })



async function findGyph(res){
    let arrLength = res.data.data.length
    if(arrLength){
        let randomInt = Math.floor(Math.random()* arrLength)
        let imgURL =  res.data.data[randomInt].images.original.url;
        let newIMG = document.createElement('img')
         newIMG.src = imgURL;
         imgResult.append(newIMG)
        
        }
}


removeButton.addEventListener('click', function(){
    if(imgResult.lastElementChild){
        imgResult.removeChild(imgResult.lastElementChild);
    }

})