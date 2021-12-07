
 let fBox = document.querySelector(".teaLeafBox");
 let sBox = document.querySelector(".row2Bags");
 let tBox = document.querySelector(".row3Herbs");



function displayTeaLeaf(){
    //    alert("Inside First Box TeaLeaf");
   
    document.querySelector(".teaLeafBox").style.display = "flex";
    document.querySelector(".row2Bags").style.display = "none";
    document.querySelector(".row3Herbs").style.display = "none";

}



function displayTeaBags(){
//    alert("Inside Second Box TeaBags");
    document.querySelector(".teaLeafBox").style.display = "none";
    document.querySelector(".row2Bags").style.display = "flex";
    document.querySelector(".row3Herbs").style.display = "none";
  
}

function displayHerbs(){
    // alert("Inside Third Box Herbs");
    document.querySelector(".teaLeafBox").style.display = "none";
    document.querySelector(".row2Bags").style.display = "none";
    document.querySelector(".row3Herbs").style.display = "flex";
}

// Nav Menu toggle //
$(document).ready(function(){
    $('.burgerMenu').click(function(){
    $('.navDisplay').toggle('slow', function(){
       
    });
    });
    
});

function displayRecipe1(){
    document.querySelector('.matchaRecipe').style.display = "block";
    document.querySelector('.roseRecipe').style.display = "none";
    document.querySelector('.recipe2').style.backgroundColor = "lightGray";
    document.querySelector('.pumpkinRecipe').style.display = "none";
    document.querySelector('.recipe3').style.backgroundColor = "lightGray";
    document.querySelector('.recipe1').style.backgroundColor = "#3e8973";

}
function displayRecipe2(){
    document.querySelector('.matchaRecipe').style.display = "none";
    document.querySelector('.recipe3').style.backgroundColor = "lightGray";
    document.querySelector('.recipe1').style.backgroundColor = "lightGray";
    document.querySelector('.recipe2').style.backgroundColor = "#3e8973";
    document.querySelector('.roseRecipe').style.display = "block";
    document.querySelector('.pumpkinRecipe').style.display = "none";
   
}
function displayRecipe3(){
    document.querySelector('.matchaRecipe').style.display = "none";
    document.querySelector('.recipe2').style.backgroundColor = "lightGray";
    document.querySelector('.recipe1').style.backgroundColor = "lightGray";
    document.querySelector('.recipe3').style.backgroundColor = "#3e8973";
    document.querySelector('.roseRecipe').style.display = "none";
    document.querySelector('.pumpkinRecipe').style.display = "block";
}



function backButton(){
    document.querySelector('.recipe1').style.display = "block";
    document.querySelector('.recipe2').style.display = "block";
    document.querySelector('.recipe3').style.display = "block";
    document.querySelector('.matchaRecipe').style.display = "none";
    document.querySelector('.pumpkinRecipe').style.display = "none";
    document.querySelector('.roseRecipe').style.display = "none";

}
