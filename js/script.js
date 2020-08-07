$(document).ready(function () {
    $("#search").keyup(function () {
        searchHighlight($(this).val());
    })
});

function searchHighlight(searchText) {
    if (searchText) {
        var searchExp = new RegExp(searchText, "ig");
        var content = $("p").text();
        var matches = content.match(searchExp);
        var counter = 0;
        if (matches) {
            $("p").html(content.replace(searchExp, function (matches) {
                return "<span class='highlight'>" + matches + "</span>";
            }));
        }
        
        else {
            $(".highlight").removeClass("highlight");
        }
    } else {
        $(".highlight").removeClass("highlight");
    }
}
