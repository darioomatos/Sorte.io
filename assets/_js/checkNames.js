function checkInputs() {
    const checkInputName = document.querySelector("input[name='inputName']").value;

    if (checkInputName == "") {
        alert("Preencha um nome!");
        return false;
    }
    return true;

    // joke
    if (checkInputName == "Dario") {
        alert("Esse nome é especial");
        return true;
    }
}