console.log("external JS")



const arr=[1, 2.1, "str", false]
console.log(arr)

arr[1] =3.1
console.log(arr[1])

arr.push(4)
console.log(arr)

arr.pop()
console.log(arr)

for(let i=0; i<=arr.length; i++){
    console.log(arr[i])
}

function example(){
    
}

const access = document.getElementById("ptag")
access.innerHTML = "Paragraph"

const input= document.getElementById("input")

const input= document.getElementById("inputField")


input.addEventListener("input",()=>{
    output.textcontent = input.value
})


const first = document.createElement("P")
first.textContent = "Some text"
document.body.appendChild(first)

first.remove()
