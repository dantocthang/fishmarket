const sidebarBtn = document.querySelector('#sidebar__toggle-btn')
const sidebar = document.querySelector('.sidebar')

sidebarBtn.addEventListener('click', function(){
    if (sidebar.classList.contains('minimized'))
        sidebar.classList.remove('minimized')
    else
        sidebar.classList.add('minimized')
})