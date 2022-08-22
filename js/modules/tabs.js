function tabs(tabsSelector, tabsCotentSelector, tabsParentSelcetor, activeClass) {
    
    //Tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsCotentSelector),
          tabsParent = document.querySelector(tabsParentSelcetor);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) { // i = 0 - это параметр по умолчанию
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;