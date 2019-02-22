function successFunc(data) {
    var avg_print_quality = 0;
    var avg_speed = 0;
    var avg_comm = 0;
    var avg_service = 0;
    var length = data.length;
    var word;
    if (length == 1) {
        word = " order";
    } else {
        word = " orders";
    }
    document.querySelector("#order-total").outerHTML = length + word;
    for (var i = 0; i < length; i++) {
        avg_print_quality += parseInt(data[i]["Print Quality"]);
        avg_speed += parseInt(data[i]["Speed"]);
        avg_comm += parseInt(data[i]["Communication"]);
        avg_service += parseInt(data[i]["Service"]);
    }
    avg_print_quality /= length;
    avg_speed /= length;
    avg_comm /= length;
    avg_service /= length;
    document.querySelector("#quality").style.width = "" + (avg_print_quality * 100 / 5) + "%";
    document.querySelector("#speed").style.width = "" + (avg_speed * 100 / 5) + "%";
    document.querySelector("#comm").style.width = "" + (avg_comm * 100 / 5) + "%";
    document.querySelector("#service").style.width = "" + (avg_service * 100 / 5) + "%";
    console.log(avg_print_quality * 100 / 5);
    console.log(avg_speed * 100 / 5);
    console.log(avg_comm * 100 / 5);
    console.log(avg_service * 100 / 5);
}
Sheetsu.read("https://sheetsu.com/apis/v1.0qu/78480bb454d4", {}, successFunc);