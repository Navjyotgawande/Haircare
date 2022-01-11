// owl carausal start
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:3
            },
            994:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
      

});
//owl carausal end

//aos start
AOS.init();

//aos end

//toggle navigation start
  
// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     });

var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#linkss").hide();
a=1;
});
$("#hom").click(function(){
    $("#linkss").hide();
    a=1;
    });
    $("#galery").click(function(){
        $("#linkss").hide();
        a=1;
        });
        $("#testimon").click(function(){
            $("#linkss").hide();
            a=1;
            });   
            $("#cont").click(function(){
                $("#linkss").hide();
                a=1;
                });   
                $("#serv").click(function(){
                    $("#linkss").hide();
                    a=1;
                    });   
                $("#icon").click(function(){
                    $("#linkss").slideToggle();
        // if (a==1){
        //          $("#linkss").animate({"right":"0"});
        //          a=2;
        // }
        // else{
        //          $("#linkss").animate({"right":"-100%"});
        // } 
        });
        });
                
//toggle navigation end