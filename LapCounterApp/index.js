

let displayEl= document.getElementById("display")
let precountEl= document.getElementById("previous-count")
let count=0

function increment(){
    count +=1
    displayEl.textContent= count

}
function save(){
    let countStr= count + " - "
    precountEl.textContent += countStr
    count=0
    displayEl.textContent= count
}
