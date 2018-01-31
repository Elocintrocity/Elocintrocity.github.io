<script>
$( document ).ready(function() {
    //$("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.overlay').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.overlay').slideUp(250); //.fadeOut(205)
        }
    ); 
});
</script>