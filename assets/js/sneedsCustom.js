function clearAdvancedSearchForm() {
    var myFormElement = document.getElementById("sneedsAdvancedSearchForm");
    var elements = myFormElement.elements;

    // var temp = "0";
    // var mySelect = document.getElementById("categorySearchSelector");
    //
    // for(var i, j = 0; i = mySelect.options[j]; j++) {
    //     if(i.value == temp) {
    //         mySelect.selectedIndex = j;
    //         break;
    //     }
    // }

    for (i = 0; i < elements.length; i++) {

        field_type = elements[i].type.toLowerCase();

        switch (field_type) {

            case "text":
            case "password":
            case "textarea":
            case "hidden":

                elements[i].value = "";
                break;

            case "radio":
            case "checkbox":
                if (elements[i].checked) {
                    elements[i].checked = false;
                }
                break;

            case "select-one":
            case "select-multi":

                break;
            default:
                break;
        }
    }
}
