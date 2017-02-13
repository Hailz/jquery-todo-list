console.log("Hiya Hailey");

$(document).ready(function(){

  $('.submitButton').click(function(){
    console.log("click");
    addDoItNowValue();
    addDoItLaterValue();
    clearInput();
  })

  function clearInput(){
    $('.doItLaterInput').val("");
    $('.doItNowInput').val("");
  }

  function addDoItNowValue(){
    var doItNowValue = $(".doItNowInput").val();
    var firstEmptyCell = $('table td:empty:eq(0)');
    var secondEmptyCell =$('table td:empty:eq(1)');
    console.log(doItNowValue);
    if (doItNowValue != ""){
      firstEmptyCell.text(doItNowValue);
      $('<button class="deleteButton">X</button>').appendTo(secondEmptyCell);
      deleteCell();
    }
  }

  function addDoItLaterValue(){
    var doItLaterValue = $(".doItLaterInput").val();
    var firstEmptyCell = $('table td:empty:eq(0)');
    var secondEmptyCell =$('table td:empty:eq(1)');
    console.log(doItLaterValue);
    if (doItLaterValue != ""){
      firstEmptyCell.text(doItLaterValue);
      $('<button class="deleteButton">X</button>').appendTo(secondEmptyCell);
      deleteCell();
    }
  }

  function deleteCell(){
    $(".delete").click(function(){
      console.log("delete")
      $(this).prev().closest('td').html("");
      $(this).replaceWith('<td class="delete"></td>');
    });
  }

  function addRow(){
    if ($('table td:empty') == 0){

    }
  };

//Still need:
//function to add table row if all boxess are != empty
//function to clear input box

});
