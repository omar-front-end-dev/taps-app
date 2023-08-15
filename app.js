const tabsItem = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".tab-box");


// tabsItem.forEach((item) =>{
//     item.addEventListener("click", () =>{
//         tabsItem.forEach((el) =>{
//            removeClass(el, "active");
//         });
//         item.classList.add("active");
//     });
// });


// let removeClass = (element, elClass) =>{
//     element.classList.remove(elClass);
// };

tabsItem.forEach((item) =>{
    item.addEventListener("click", () =>{
     const prevTab = document.querySelector(".active");
        prevTab.classList.remove("active");
        const prevContent = document.querySelector(".active");
        prevContent.classList.remove("active");
        const targetId = item.dataset.target;
        const tabsContent = document.querySelector(`[data-id ="${targetId}"]`);
        tabsContent.classList.add("active")
        item.classList.add("active");
    });
});
