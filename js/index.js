$("#verifyPage").hide();
$("#resultPage").hide();
$("#scoringPage").hide();
//$("#scoringEnabled").hide();
//$("#inputError").hide();

$("#btnStartScoring").click(function(){
  $("#mainPage").hide();
  $("#verifyPage").show();
});

$("#btnBackToMainPage1").click(function(){
  $("#verifyPage").hide();
  $("#mainPage").show();
});

$("#btnLookUpResult").click(function(){
  $("#mainPage").hide();
  $("#resultPage").show();
});

$("#btnBackToMainPage2").click(function(){
  $("#resultPage").hide();
  $("#mainPage").show();
});

$("#btnSubmitCode").click(function(){
  $("#verifyPage").hide();
  $("#scoringPage").show();
});

$("#btnBackToMainPage3").click(function(){
  $("#scoringPage").hide();
  $("#mainPage").show();
});

$("ul.nav-tabs a").click(function(e){
  e.preventDefault();
  $(this).tab('show');
});