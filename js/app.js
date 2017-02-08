console.log("Hiya Hailey");

$(document).ready(function(){


  $('.submitButton').click(function(){
    console.log("click");
    addDoItNowValue();
    addDoItLaterValue();
  })

function addDoItNowValue(){
  var doItNowValue = $(".doItNowInput").val();
  var firstEmptyCell = $('table td:empty:eq(0)');
  var secondEmptyCell =$('table td:empty:eq(1)');
  console.log(doItNowValue);
  if (doItNowValue != ""){
    firstEmptyCell.text(doItNowValue);
    $('<button>X</button>').appendTo(secondEmptyCell).addClass('.deleteButton');
  }
}

function addDoItLaterValue(){
  var doItLaterValue = $(".doItLaterInput").val();
  var firstEmptyCell = $('table td:empty:eq(0)');
  var secondEmptyCell =$('table td:empty:eq(1)');
  console.log(doItLaterValue);
  if (doItLaterValue != ""){
    firstEmptyCell.text(doItLaterValue);
    $('<button>X</button>').appendTo(secondEmptyCell).addClass('.deleteButton');
  }
}

  $(".delete").click(function(){
    console.log("delete")
    $(this).closest('tr').remove();
  });

//Still need:
//function to add table row if all boxess are != empty
//function to clear individual table cells when button clicked
//function to clear input box

});
