window.onload = function () {
  let gnbCate = document.querySelector(".gnb-cate");
  let submenu = document.querySelector(".cate-box");

    

  gnb
  .addEventListener("mouseenter", function () {
    submenu.style.height = "536px";
  });

  gnbCate.addEventListener("mouseleave", function () {
    submenu.style.height = "0";
  });

  
};
