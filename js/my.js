$(document).ready(function () {
    catename();
    
    function gnbfunction() {
        let gnblist = $(".gnblist > li");
        gnblist.mouseenter(function(){
            let glindex = $(this).index();
            
        });
    }

  function catename() {
    let cateboxlist = $(".cate-box-list > li");
    let cateboxcont = $(".cate-box-content > li");
    cateboxlist.mouseenter(function () {
      let cateindex = $(this).index();
      cateboxcont.hide().eq(cateindex).show();
    });
  }
});