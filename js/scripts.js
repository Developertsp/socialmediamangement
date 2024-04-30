window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.addEventListener("DOMContentLoaded", function() {
	const sidebar = document.querySelector('.layoutSidebar');
	const toggleIcon = document.getElementById('sidebarToggleIcon');
  
	toggleIcon.addEventListener('click', function() {
	  sidebar.classList.toggle('d-lg-block');
	  toggleIcon.classList.toggle('fa-times');
	  toggleIcon.classList.toggle('fa-filter');
	});
  });
  const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
      });
    });
  
