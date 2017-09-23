$("#verifyPage").hide();
$("#resultPage").hide();
$("#scoringPage").hide();

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

function addTable(){
  for (i=1;i<=4;i++){
    var $div = $("<div>").addClass("col-xs-12");
    var $table = $("<table>").addClass("table table-bordered");
    $table.append("<thead><tr><th><th>");
    
    $table.find("th:first").attr("colspan","6").text("");//text裡面加上靶號,大學,姓名
    $table.find("th:last").text("總分");
    
    $table.append("<tbody><tr>");
    var $row=$table.find("tr:last");
    
    for(j=1;j<=6;j++){
      $row.append("<td>");
      $row.children("td:last").addClass("tableData").attr("id","td"+i+j);
      $row.children("td:last").text("\xa0");
    }
    $row.append("<td>");
    $row.children("td:last").addClass("totalScore");
    
    $div.append($table);
    $("#scoreTable").append($div);
  }
};

addTable();

$(".tableData").click(function(){
  $(".tableData").css("background-color","white");
  $(this).css("background-color","yellow");
});

