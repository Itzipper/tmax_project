// var count = 0;
// let 
// let increase = document.getElementById("increase").addEventListener("click", () => {
//     changeCount(1)
// })
// document.getElementById("disPlay").innerHTML = count

var count = 0
document.getElementById("increase").addEventListener("click", () => { changeCount(+1)})
document.getElementById("decrease").addEventListener("click", () => { changeCount(-1)})

const changeCount = (number) => {
    count += number
    document.getElementById("count").innerHTML= count;
}
// var count = 0
// document.querySelector("#increase").addEventListener("click", () => { changeCount(+1)})
// document.querySelector("#decrease").addEventListener("click", () => { changeCount(-1)})

// const changeCount = (number) => {
//     count += number
//     document.querySelector("#count").textContent = count;
// }

