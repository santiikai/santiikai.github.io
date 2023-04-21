$(window).on('scroll', function(){
    if ($(".show-on-scroll").is(':visible')){
        $(".show-on-scroll").removeClass(".is-visible");
        $(".show-on-scroll").addClass(".is-visible");

    }
});