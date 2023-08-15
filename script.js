document.addEventListener('keyup', function(o){
  console.log("Object_Event_Details \,")
  console.log(o);
  console.log(".key "+o.key)
  console.log(".keyCode "+o.keyCode)
  console.log(".code "+o.code)
  if(0 == 'Enter'){
    PlayAgain();
  }
})