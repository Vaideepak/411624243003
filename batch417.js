function example(){
    console.log("Hi")
}

const example1 = ()=>{
    console.log("Hello")
}

console.log("A")
setTimeout(()=>{
    console.log("B")
},0)
console.log("C")

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(1);
    },2)
    console.log("3")

})

promise.then(res=>{console.log(res)})
.catch(err=>console.log(err))