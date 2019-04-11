$("#submitEmail").click(function(){
    $( "#result ").empty()
    var email = $("#email-form").find("input[name='email']").val();
    var message = $("#email-form").find("textarea").val();
    var subject = $("#email-form").find("input[name='subject']").val();
    var result = $.post('../php/mail.php', {email, subject, message});

    $.post( 
        '../php/mail.php', // location of your php script
        { email: email, subject: subject, message, message }, // any data you want to send to the script
        function(/* data */){  // a function to deal with the returned information

            //var content = $( data ).find( "#content" ).val();
            $( "#result" ).append( "</br>" /*+ data*/ );
    
    });

    $( "#result" ).append("Mail sent</br>From: " + subject + " , " + email);
});