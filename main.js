
$('#Collapse1').on('shown.bs.collapse', function () {
    this.scrollIntoView();
});

$('#Collapse2').on('shown.bs.collapse', function () {
    this.scrollIntoView();
});

$('#Collapse3').on('shown.bs.collapse', function () {
    this.scrollIntoView();
});

$('#Collapse4').on('shown.bs.collapse', function () {
    this.scrollIntoView();
});


/*
    A Compléter
*/
let onActive = false;
var selectedElement = undefined;

$(".nav-item a").on("click", function() {
    $(".nav-item a").removeClass("active");
    $(this).addClass("animate__animated animate__tada");
    if(selectedElement == this && onActive) {
        
    } else {
        selectedElement = this;
        $(this).addClass("active");
        onActive = true;
    }
});