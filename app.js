$(document).ready(function()
{
    /* Mobile Menu Bar */
    
    $(".menu-icon").on("click", function()
    {
        if($(".main-nav").hasClass("mobile-hide"))
        {
            $(".main-nav").removeClass("mobile-hide");
            $(".main-nav").addClass("mobile-show");
        }
        else
        {
            $(".main-nav").addClass("mobile-hide");
            $(".main-nav").removeClass("mobile-show");
        }
    });
});