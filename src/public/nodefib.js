$(document).ready(function () {
	$("#valueInput").submit(function(event) {
		var value = $("#valueInput input:first").val();
		$.get("/fib/?value="+value).done(function(data) {
			$("#answerDiv").text("[" + data + "]");
		});
		event.preventDefault();
	});
});