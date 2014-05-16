
$(function () {

    function copyToClipboard(text) {
        var copyDiv = document.createElement('div');
        copyDiv.contentEditable = true;
        document.body.appendChild(copyDiv);
        copyDiv.innerHTML = text;
        copyDiv.unselectable = "off";
        copyDiv.focus();
        document.execCommand('SelectAll');
        document.execCommand('copy');
        document.body.removeChild(copyDiv);
    }

    $("#Copy").click(function (e) {
        var s = $("#result").text();
        copyToClipboard(s);
        console.log("copied!");
    });
    $("#Delete").click(function (e) {
        var s = $("#result").text();
        console.log("result : " + s);
        if (s.length > 0)
        {
            s = s.substr(0, s.length - 1);
            $("#result").text(s);
        }
    });
    $("#Clear").click(function (e) {
        $("#result").text("");

    });
    $("button:not(#Copy):not(#Delete):not(#Clear)").click(function (e) {
        console.log(this.textContent);
        $("#result").text($("#result").text() + this.textContent);
    });
});