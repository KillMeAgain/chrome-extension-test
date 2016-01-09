/*$("#loginform-username").val("admin");
$("#loginform-password").val("qwe1234");
$("#w0").submit();*/
var url = chrome.extension.getURL("bat.xml");
var result = chrome.extension.getURL("result.txt");
$.get(url,"xml").success(function(data){
	var text = "<table class='table table-bordered table-striped'>" + 
	"<thead><tr><th>CardNo</th><th>#</th></tr></thead>"
	+ "<tbody>";
	$(data).find("item").each(function(i){
		text = text + "<tr><td>" + $(this).text() + "</td><td>&nbsp;</td></tr>";
	});
	text = text + "</tbody></table>";
	$("body").html(text);
});