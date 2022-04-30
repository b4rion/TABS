document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hiddeContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  };

  function showContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add("tabheader__item_active");
  };

  hiddeContent();
  showContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hiddeContent();
          showContent(i);
        }
      });
    }
  });
});