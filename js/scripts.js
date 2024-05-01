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
  
    // toltip 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// calendar 

document.addEventListener('DOMContentLoaded', function() {
  var currentDate = new Date();
  
  function generateCalendar(d) {
    function monthDays(month, year) {
      var result = [];
      var days = new Date(year, month, 0).getDate();
      for (var i = 1; i <= days; i++) {
        result.push(i);
      }
      return result;
    }
    
    Date.prototype.monthDays = function() {
      var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
      return d.getDate();
    };
    
    var details = {
      totalDays: d.monthDays(),
      weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    };
    
    var start = new Date(d.getFullYear(), d.getMonth()).getDay();
    var cal = '';
    var day = 1;
    
    for (var i = 0; i < 7; i++) { // Assuming 6 rows for calendar
      cal += '<tr>';
      for (var j = 0; j < 7; j++) {
        if (i === 0) {
          cal += '<td>' + details.weekDays[j] + '</td>';
        } else if (day > details.totalDays) {
          cal += '<td>&nbsp;</td>';
        } else {
          if (i === 1 && j < start) {
            cal += '<td>&nbsp;</td>';
          } else {
            cal += '<td class="day">' + day++ + '</td>';
          }
        }
      }
      cal += '</tr>';
    }
    
    document.getElementById('calendar-body').innerHTML = cal;
    document.getElementById('month').textContent = details.months[d.getMonth()];
    document.getElementById('year').textContent = d.getFullYear();
    
    var dayCells = document.querySelectorAll('td.day');
    
    dayCells.forEach(function(cell) {
      cell.addEventListener('mouseover', function() {
        this.classList.add('hover');
      });
      
      cell.addEventListener('mouseout', function() {
        this.classList.remove('hover');
      });
    });
  }
  
  document.getElementById('left').addEventListener('click', function() {
    if (currentDate.getMonth() === 0) {
      currentDate = new Date(currentDate.getFullYear() - 1, 11);
    } else {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    }
    generateCalendar(currentDate);
  });
  
  document.getElementById('right').addEventListener('click', function() {
    if (currentDate.getMonth() === 11) {
      currentDate = new Date(currentDate.getFullYear() + 1, 0);
    } else {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    }
    generateCalendar(currentDate);
  });
  
  generateCalendar(currentDate);

  
});

// inbox page 
 // JavaScript code
 const messageInput = document.getElementById('message-input');
 const sendButton = document.getElementById('send-button');
 const chatMessages = document.getElementById('chat-messages');

 // Function to append a message to the chat
 function appendMessage(sender, text) {
     const messageDiv = document.createElement('div');
     messageDiv.classList.add('message');
     messageDiv.innerHTML = `
        <!-- <span class="sender">${sender}:</span> -->
         <span class="text">${text}</span>
     `;
     chatMessages.appendChild(messageDiv);
     chatMessages.scrollTop = chatMessages.scrollHeight;
 }

 // Dummy messages to initialize the chat
 const dummyMessages = [
     { sender: 'Bot', text: 'Welcome to the chat!' },
     { sender: 'User', text: 'Hi there!' },
     { sender: 'Bot', text: 'How can I help you?' },
     { sender: 'Bot', text: 'Leave your message' },
     { sender: 'Bot', text: 'Leave your message' }
 ];

 // Add dummy messages to the chat on page load
 window.addEventListener('load', () => {
     dummyMessages.forEach(message => {
         appendMessage(message.sender, message.text);
     });
 });

 // Event listener for sending a message
 sendButton.addEventListener('click', () => {
     const messageText = messageInput.value.trim();
     if (messageText !== '') {
         appendMessage('You', messageText);
         messageInput.value = '';
     }
 });