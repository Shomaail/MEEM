function limitCharsLength(Object, MaxLen) {
    if (Object.value.length > MaxLen - 1) {
        Object.value = Object.value.substring(0, MaxLen);
    }
}
function limitClipBoard(Object, MaxLen) {
    if (window.clipboardData != null) {
        //alert("clipboardData  is not null");
        if (window.clipboardData.getData("Text").length > MaxLen - 1 - Object.value.length) {
          //  alert("clipboardData  is very big");
            window.clipboardData.setData("Text", window.clipboardData.getData("Text").toString().substring(0, (MaxLen - Object.value.length)));
        }
    }
}
function confirm_delete_PromotionReport() {
    if (confirm("This will erase all the Digital Signatures. Are you sure you want to remove this promotion report?") == true)
        return true;

    else

        return false;
}
function confirm_delete_ExtReviewer() {

    if (confirm("This will delete all the correspondences with the external reviewer. Are you sure you want to delete this external reviewer?") == true)

        return true;

    else

        return false;

}
function confirm_delete() {

    if (confirm("Are you sure you want to delete?") == true)

        return true;

    else

        return false;

}
function ValidateTextLength(oSrc, args) {
    args.IsValid = args.Value.length > 10;
}

function validateMailingAddress() {
    var x = document.getElementById("tbMailingAddress");
    var y = x.value.toLowerCase();

    if (y.search("univ") == -1 &&
                     y.search("üniversite") == -1 && y.search("yliopisto") == -1 &&
                     y.search("MIT") == -1 && y.search("UOIT") == -1 && y.search("School") == -1 &&
                     y.search("Polytechnique") == -1 && y.search("Ecole") == -1 && y.search("جامعه") == -1 &&
                     y.search("uniwersytet") == -1 && y.search("Tech") == -1 && y.search("Institute") == -1 &&
                     y.search("Imperial College") == -1) {

        x.style.backgroundColor = "pink";
        x.validity = false;

    }
    else { x.style.backgroundColor = "white"; }

} function check(input) {
    if (input.validity.typeMismatch) {
        input.setCustomValidity("Dude '" + input.value + "' is not valid. Enter something nice!!");
    }
    else {
        input.setCustomValidity("");
    }
}