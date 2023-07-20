//document.getElementById("count").innerText = 5
/*let count = 0

function increment(){
    count =  count +1
    document.getElementById("count-el").innerHTML = count   
}
function remove(){
    count = count-1
    document.getElementById("remove").innerHTML = count   
}

function save(){
    document.getElementById("save").innerHTML = count
    console.log(count)
}*/
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 let count = 0
 function increment(){
    count+=1
    countEl.innerText = count
 }
function save(){
    
    let total = count + " - "
    saveEl.textContent += total
    countEl.textContent =0
    count = 0

}
