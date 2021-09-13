$(function() {
    $(".repeat").on('click', function(e) {
      var frm =$('.frm:first').clone();
      frm.find('input').val('');
      $('.frm:last').after(frm);
    });
  });

  $(function() {
    $(".repeat4").on('click', function(e) {
      var frm1 =$('.frm4:first').clone();
      frm1.find('input').val('');
      $('.frm4:last').after(frm1);
    });
  });  

  $(function() {
    $(".repeat2").on('click', function(e) {
      var frm2 =$('.frm2:first').clone();
      frm2.find('input').val('');
      $('.frm2:last').after(frm2);
    });
  });  

  $(function() {
    $(".repeat3").on('click', function(e) {
      var frm3 =$('.frm3:first').clone();
      frm3.find('input').val('');
      $('.frm3:last').after(frm3);
    });
  });  