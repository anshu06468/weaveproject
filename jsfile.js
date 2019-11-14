var numer=1;
var numer1=1;
var numer2=1;
var ide="";
var res={"border":[],
  "pallu":[],
  "body":[]
};
var count=0;
function addborder(){
  if(numer>6){
    for(var i=numer;i<numer+3 ;i++){
      $(".list").append('<li><div class="border"><img class="image" id="border'+i+'" src="border.jpg"></div></li>') ;
    }
  }
  else{
    for(var i=numer;i<numer+6;i++){
      $(".list").append('<li><div class="border"><img class="image" id="border'+i+'" src="border.jpg"></div></li>') ;
     }
  }
   numer+=3;
}

function addbody(){
  if(numer1>6){
  for(var i=numer1;i<numer1+3; i++){
    $(".list1").append('<li><div class="border"><img class="image" id="body'+i+'" src="body.png"></div></li>') ;
   }
  }
  else{
    for(var i=numer1;i<numer1+6;i++){
      $(".list1").append('<li><div class="border"><img class="image" id="body'+i+'" src="body.png"></div></li>') ;
     }
  }
   numer1+=5;
}

function addpallu(){
  if(numer2>6){
  for(var i=numer2;i<numer2+3 ;i++){
    $(".list2").append('<li><div class="border"><img class="image" id="pallu'+i+'"src="pallu.jpg"></div></li>') ;
   }
  }
  else{
    for(var i=numer2;i<numer2+6;i++){
      $(".list2").append('<li><div class="border"><img class="image" id="pallu'+i+'"src="pallu.jpg"></div></li>') ;
     }
  }
   numer2+=5;
}

function bigmotif(str){
    var url=$(str).attr('src');
    $("#bigscrn").attr('src',url);
    ide="";
    console.log(url);
}

//ready function
$(document).ready(function(){
  addborder();
  addbody();
  addpallu();
  var flag1=false;
  var flag2=false;
  var flag3=false;
// Right shift
  $(".scroller-right1").click(function(){
    // var lft=parseInt($(".list").css("left"),10);
    if(numer<12){
    addborder();
    $(".list").animate({left:'-=330px'});
    console.log(left);
    }
    else{
      if(flag1)
        $(".list").animate({left:'-=330px'});
    }

  });


  $(".scroller-right2").click(function(){
    // var lft=parseInt($(".list1").css("left"),10);
    if(numer1<12){
    addbody();
    $(".list1").animate({left:'-=330px'});
    }
  });

  $(".scroller-right3").click(function(){
    if(numer2<12){
    addpallu();
    $(".list2").animate({left:'-=330px'});
    }
  });


  // left shift
  $(".scroller-left1").click(function(){
    var lft=parseInt($(".list").css("left"),10);
    if(lft<0){
    $(".list").animate({left:'+=330px'});
    flag1=true;
    console.log(left);
    }
    else
      flag1=false;
  });


  $(".scroller-left2").click(function(){
    var lft=parseInt($(".list1").css("left"),10);
    if(lft<0){
    $(".list1").animate({left:'+=330px'});
    }
  });

  $(".scroller-left3").click(function(){
    var lft=parseInt($(".list2").css("left"),10);
    if(lft<0){
    $(".list2").animate({left:'+=330px'});
    }
  });

  $(".border").click(function(e){
    ide=e.currentTarget.children[0].id
    ide=('#'+ide+'');
    if (e.ctrlKey){
      $(this).toggleClass("marked");
    }
    // console.log(ide);
    // console.log("welcome");
    bigmotif(ide);
  });
$('.submit').click(function(){
  $('.border').each(function(evt){
    if($(this).hasClass('marked')){
       var temp= ($(this).children())[0];
        if(temp.id.includes("body")){
          res.body.push(temp.src);
        }
        else if(temp.id.includes("border")){
          res.border.push(temp.src);
        }
        else{
          res.pallu.push(temp.src);
        }
      // res.push(temp)
      // console.log(res);
    }
  })
  console.log(res)
  });
})

