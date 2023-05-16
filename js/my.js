$(document).ready(function () {
  catename();
  gnb();

  function gnb() {
    let gnblist = $(".gnb_list > li");

    let catebox = $(".cate-box");
    let cateboxBg = $(".cate-box-bg");
    let headerBg = $(".header-bg");
    let cate_list_st = $(".cate-box-list > li");
    let cateboxcont = $(".cate-box-content > li");
    $.each(gnblist, function (index, item) {
      console.log(index);
      $(this).mouseenter(function () {
        cate_list_st.eq(0).addClass("cate-box-list-li-bold");
        cateboxcont.eq(0).show();

        let gnblistindex = $(this).index();
        if ($(this).hasClass("gnb-active") && index === gnblistindex) {
          headerBg.stop().fadeIn(300);
          $(this).find(catebox).stop().slideDown(300);
          cateboxBg.stop().slideDown(300);
        }
      });

      $(this).mouseleave(function () {
        cate_list_st.eq(0).removeClass("cate-box-list-li-bold");
        cateboxcont.hide();
        headerBg.stop().fadeOut(300);
        catebox.stop().slideUp(300);
        cateboxBg.stop().slideUp(300);
      });
    });
  }
  function catename() {
    let cateboxlist = $(".cate-box-list > li");
    let cateboxcont = $(".cate-box-content > li");
    cateboxlist.mouseenter(function () {
      let cateindex = $(this).index();
      cateboxlist.removeClass("cate-box-list-li-bold");
      cateboxcont.eq(0).show();
      cateboxcont.hide().eq(cateindex).show();
    });
  }
});
