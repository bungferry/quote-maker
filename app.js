function getCapture(){
  html2canvas(document.querySelector(".quote")).then(canvas => {
    
    var quote = document.querySelector(".quote");

    document.body.appendChild(canvas);

    var download = document.getElementById("download");
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    download.setAttribute("download","quote.png");

    download.click();

  });
}

$(function(){
  
  $('.generator [name="author"]').keyup(function(){
    var author = $(this).val();
    $('.quote .text small').html('⚊ ' + author);
  });
  
  $('.generator [name="quote"]').keyup(function(){
    var quote = $(this).val();
    $('.quote .text p').html(quote);
  });
  
  $('.generator [name="image"]').on('change', function(){
  
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
     {
        var reader = new FileReader();
        reader.onload = function (e) {
           $('.quote img').attr('src', e.target.result);
        }
       reader.readAsDataURL(input.files[0]);
    }else{
      $('.quote img').attr('src', '');
    }
    
  });
  
});
