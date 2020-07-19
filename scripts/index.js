$(".navbar .navbar-toggler-icon").addClass("nav-button-unclick")

$(".navbar .navbar-toggler").on("click", function(){
    if($(".navbar .navbar-toggler-icon").hasClass("nav-button-unclick")) {
        $(".navbar .navbar-toggler-icon").addClass("nav-button-click")
        $(".navbar .navbar-toggler-icon").removeClass("nav-button-unclick")
        $(".navbar .navbar-toggler").addClass("white-bg")
    }
    else{
        $(".navbar .navbar-toggler-icon").addClass("nav-button-unclick")
        $(".navbar .navbar-toggler-icon").removeClass("nav-button-click")
        $(".navbar .navbar-toggler").removeClass("white-bg")
    }
})


// $(document).on("scroll", function(){
//     $(navbar).addClass("")
// })