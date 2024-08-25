
document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    
    
    sidebar.classList.toggle('show');
    main.classList.toggle('with-sidebar');
});


document.querySelectorAll('.module > span').forEach(function(module) {
    module.addEventListener('click', function() {
        const subMenu = this.nextElementSibling;
        
        
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});


document.querySelectorAll('.submodule > span').forEach(function(submodule) {
    submodule.addEventListener('click', function() {
        const subSubMenu = this.nextElementSibling;
        
        subSubMenu.style.display = subSubMenu.style.display === 'block' ? 'none' : 'block';
    });
});
