
  // this is offline form submit
  $('#button-save').on('click', function() {
    $.ajax({
      url: 'index.php?route=wallet/money&user_token={{ user_token }}',
      type: 'post',
      data: $('input[name=\'amount\'], input[name^=\'pmode\'][type=\'radio\']:checked, input[name=\'file_name\'], input[name=\'txn_date\'], input[name=\'txn_id\']'),
      dataType: 'json',
      crossDomain: true,
      beforeSend: function() {
        $('#button-save').button('loading');
      },
      complete: function() {
        $('#button-save').button('reset');
      },
      success: function(json) {
        $('.alert-dismissible, .invalid-tooltip').remove();

        if (json['error']) {
          $('#collapse-total .card-body').prepend('<div class="alert alert-danger alert-dismissible"><i class="fas fa-exclamation-circle"></i> ' + json['error'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
        }

        if (json['success']) {
          $('#collapse-total .card-body').prepend('<div class="alert alert-success alert-dismissible"><i class="fas fa-check-circle"></i> ' + json['success'] + '  <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
      }
    });
  });
  // end the offline form
