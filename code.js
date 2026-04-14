setScreen("titleScreen");

// clothes lists
var hat = ["","assets/beaniehat.png"];
var hair = ["","assets/blackhair.png","assets/brownhair.png"];
var face = ["","assets/purpleface.png","assets/glassesface.png"];
var top = ["","assets/yuikigaitop.png","assets/furjackettop.png"];
var bottom = ["","assets/longbottom.png","assets/shortbottom.png"];
var socks = [];
var shoes = [];
//variable to add onto ids
var items = ["Hat","Hair","Face","Top","Bottom","Socks","Shoes"];
//index variables for clothes
var indexHat = 0;
var indexHair = 0;
var indexFace = 0;
var indexTop = 0;
var indexBottom = 0;
var indexSocks = 0;
var indexShoes = 0;

// navigation
onEvent("startButton","click",function(){
  setScreen("closetScreen");
});
onEvent("closetBackButton","click",function(){
  setScreen("titleScreen");
});
onEvent("randomizeItemButton","click",function(){
  setScreen("itemSelectionScreen");
});
 
// aaaaaaaaaaaaaaaaaaa
onEvent("hatNext","click",function(){
  indexHat = nextItem(hat,0,indexHat);
});
onEvent("hatPrevious","click",function(){
  indexHat = previousItem(hat,0,indexHat);
});

onEvent("hairNext","click",function(){
  indexHair = nextItem(hair,1,indexHair);
});
onEvent("hairPrevious","click",function(){
  indexHair = previousItem(hair,1,indexHair);
});

onEvent("faceNext","click",function(){
  indexFace = nextItem(face,2,indexFace);
});
onEvent("facePrevious","click",function(){
  indexFace = previousItem(face,2,indexFace);
});

onEvent("topNext","click",function(){
  indexTop = nextItem(top,3,indexTop);
});
onEvent("topPrevious","click",function(){
  indexTop = previousItem(top,3,indexTop);
});

onEvent("bottomNext","click",function(){
  indexBottom = nextItem(bottom,4,indexBottom);
});
onEvent("bottomPrevious","click",function(){
  indexBottom = previousItem(bottom,4,indexBottom);
});

// functions
function nextItem(category,itemIndexNumber,itemIndexVariable){
  if (itemIndexVariable < 2){
    itemIndexVariable = itemIndexVariable + 1;
    setProperty("item"+items[itemIndexNumber],"image",category[itemIndexVariable]);
  }
  return itemIndexVariable;
}
function previousItem(category,itemIndexNumber,itemIndexVariable){
  if (itemIndexVariable > 0){
    itemIndexVariable = itemIndexVariable - 1;
    setProperty("item"+items[itemIndexNumber],"image",category[itemIndexVariable]);
  }
  return itemIndexVariable;
}
function randomizeItem(selectedItem){
  for(var i=0;i<items.length-1;i++){
    
  }
}
function randomizeAll(){
}
function scoreOutfit(){
  
}