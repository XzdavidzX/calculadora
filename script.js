const display= document.querySelector("#display");
const buttons= document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "0";
        } else if (btn.id == "≺"){
            display.value = display.value.slice(0, -1);
        } else {
            if (display.value === "0") {
                display.value = "";
            }
            display.value += btn.id
        }
    })
})