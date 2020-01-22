$(document).ready(function(){
  var items = [];
  $("#itemButton").click(function(event){
    event.preventDefault();

    console.log(items)

    items.push($("#item1").val());
  })

  $("#sort").click(function(event){
    event.preventDefault();

    items.sort();
    console.log(items);
    items.forEach(function(item){
      $("ul#itemList").append(`<li>${item}</li>`);
    })
  })

});