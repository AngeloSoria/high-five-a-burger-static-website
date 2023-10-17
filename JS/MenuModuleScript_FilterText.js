var selectValue1 = document.getElementById("FilterTypeText_Items");
var selectValue2 = document.getElementById("FilterTypeText_Categories");
var text1, text2;

function searchItem(selected){
    selectValue1.innerHTML = selected.text;
}

function valueChanged1(selected){
    selectValue1.innerHTML = selected.options[selected.selectedIndex].text;
}

function valueChanged2(selected){

    selectValue2.innerHTML = selected.options[selected.selectedIndex].text;
}
