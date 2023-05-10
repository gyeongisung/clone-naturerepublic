$(document).ready(function () {
  catename();
  gnb();

  function gnb() {
    let gnblist = $(".gnb_list > li");
    let catebox = $(".cate-box");
    gnblist.hover(
      function () {
        let gnblistindex = $(this).index();
        if (gnblistindex == 0 && gnblist.hasClass("gnb-active")) {
          $(".gnb_list > li").eq(gnblistindex).find(catebox).stop().slideDown(300);
        }
        if (gnblistindex == 3 && gnblist.hasClass("gnb-plan")) {
          $(".gnb_list > li").eq(gnblistindex).find(catebox).stop().slideDown(300);
        }
        if (gnblistindex == 4 && gnblist.hasClass("gnb-review")) {
          $(".gnb_list > li").eq(gnblistindex).find(catebox).stop().slideDown(300);
        }
      },
      function () {
        catebox.stop().slideUp(300);
      }
    );
    // gnblist.mouseenter(function () {
    //   let gnbinex = 1;
    //   console.log(gnbinex);
    //   gnblistindex = $(this).index();
    //   if (gnblistindex == 0) {
    //     catebox.show();
    //     gnbinex = 0;
    //   }
    // });
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
