// script.js

$(document).ready(function() {
    $(".nav button").click(function() {
        $(".content").removeClass("active");
        $("#" + $(this).attr('id')).addClass("active");
    });
});
