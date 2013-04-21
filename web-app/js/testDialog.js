var TestDialog = (function($) {

  var $dialog;

  $(function() {
    $dialog = $('#test-dialog');
    $dialog.dialog({
      autoOpen: false,
      width: 300,
      height: 200
    });
  });

  return {
    openDialog: function() {
      $dialog.dialog('open');
    }
  };

}(jQuery));
