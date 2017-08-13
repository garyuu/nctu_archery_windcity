$("#verifyPage").hide();
$("#resultPage").hide();
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

$('#contestTabs').on('click', 'a[data-toggle="tab"]', function(e) {
  e.preventDefault();

  var $link = $(this);

  if (!$link.parent().hasClass('active')) {

    $('.tab-content:not(.' + $link.attr('href').replace('#','') + ') .tab-pane').removeClass('active');

    $('a[href="' + $link.attr('href') + '_all"][data-toggle="tab"]').click();

    $('.tab-content.' + $link.attr('href').replace('#','') + ' .tab-pane:first').addClass('active');
  }

});