
let count = 0;
const list = document.getElementById("list");
const showNav = () => {
    console.log("call");
    count++;
    if(count == 0 || count % 2 !== 1) list.style.display = "inline";
    else {
        list.style.display = "none";
    }
}
const closeFun  = () =>{
    list.style.display = "none";
}