const calculate = () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let opr = document.getElementById("operator").value

    if (num1 ==='' || num2 === '') {
        alert("one or more field is empty")
        return;
    }

    input1 = parsefloat(num1);
    input2 = parseFloat(num2);
    result = 0.0;

    if (opr === "add") {
        result = input1 + input2
    }
    else if (opr === "sub") {
        result = input1 - input2
    }
    else if (opr === "div") {
        result = input1 / input2
    }
    else if (opr === "mul") {
        result = input1 * input2
    }

    document.getElementById("result").innerHTML = result
}