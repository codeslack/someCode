//---------------------------------------------------------------------------
$('#submit').on('click', function() {
    var valid = true,
        message = '';
    
    $('form input').each(function() {
        var $this = $(this);
        
        if(!$this.val()) {
            var inputName = $this.attr('name');
            valid = false;
            message += 'Please enter your ' + inputName + '\n';
        }
    });
    
    if(!valid) {
        alert(message);
    }
});


//---------------------------------------------------------------------------