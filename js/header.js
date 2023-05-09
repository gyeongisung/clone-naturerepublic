window.onload = function () {
  let gnbIcon = document.querySelector(".icon");
  let gnbCate = document.querySelector(".gnb-cate");
  let submenu = document.querySelector(".cate-box");

  gnbIcon.addEventListener("mouseenter", function () {
    submenu.style.height = "536px";
  });

  gnbIcon.addEventListener("mouseleave", function () {
    submenu.style.height = "0";
  });

  gnbCate.addEventListener("mouseenter", function () {
    submenu.style.height = "536px";
  });

  gnbCate.addEventListener("mouseleave", function () {
    submenu.style.height = "0";
  });

};
