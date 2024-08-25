const itemHeaders = document.querySelectorAll('.accodion-item-header');


itemHeaders.forEach(accordion => {
    accordion .addEventListener("click", collapsAccordions);

    function collapsAccordions () {
        const activeAccorion = document.querySelector(".active");
        if (activeAccordion && activeAccorion !== accordion) {
            activeAccorion.classList.toggle("active");
            activeAccorion.nextElementSibling.style.maxHeight = 0;
        }

   accordion.classList.toggle("active");
   const accordionItemBody = accordion.nextElementSibling;

   if (accordion.classList.contains("active")) {
    ccordionItemBody.style.maxHeight =accordionItemBody.scrollHeight + "px";

   } else {
       accordionItemBody.style.maxHeight = 0;
   }
    }
});