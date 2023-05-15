document.addEventListener("DOMContentLoaded", function () {
  let gnblist = document.querySelectorAll(".gnb_list > li");
  let catebox = document.querySelector(".cate-box");

  gnblist.addEventListener("mouseover", function (e) {
    console.log(e.target);
  });
});
