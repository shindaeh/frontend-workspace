document.frm.onsubmit = () => {
    //<select name="fruit" id="sel">의 fruit
    let optFruit = document.frm.fruit; //<select name="fruit" id="sel">
    console.log(optFruit);

    let optSelect = optFruit.selectedIndex + ' ' + optFruit.value;
    console.log(optSelect); //0 apple
    return false;

}