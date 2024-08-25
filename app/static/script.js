document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const loginButton = document.querySelector("#loginButton");
    const modules = document.querySelectorAll(".module > span");

    
    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
        loginButton.classList.toggle("hidden");
    });

    
    modules.forEach(module => {
        module.addEventListener("click", function() {
            const subMenu = this.nextElementSibling;
            if (subMenu) {
                subMenu.classList.toggle("hidden");
            }
        });
    });

    
    const subModules = document.querySelectorAll(".submodule > span");
    subModules.forEach(subModule => {
        subModule.addEventListener("click", function() {
            const subSubMenu = this.nextElementSibling;
            if (subSubMenu) {
                subSubMenu.classList.toggle("hidden");
            }
        });
    });
});
