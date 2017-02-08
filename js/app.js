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
    removeDoItNowValue();

    // $('.delete:parent').text("");
  });
function removeDoItNowValue(){
   var doItParent = $(this)
}

//function to add table row if all boxess are != empty
//function to track number of rows in table on each side
//function to keep left and right row #s the same
//function to clear individual table cells when button clicked



});
