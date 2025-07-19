function checkAuthState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const signupButton = document.querySelector('.header_buttons button');
    
    if (signupButton) {
        if (isLoggedIn) {
            signupButton.innerHTML = `
                <span class="span-mother">
                    <span>L</span>
                    <span>e</span>
                    <span>a</span>
                    <span>v</span>
                    <span>e</span>
                </span>
                <span class="span-mother2">
                    <span>L</span>
                    <span>e</span>
                    <span>a</span>
                    <span>v</span>
                    <span>e</span>
                </span>
            `;
            signupButton.onclick = logoutUser;
        } else {
            signupButton.innerHTML = `
                <span class="span-mother">
                    <span>S</span>
                    <span>i</span>
                    <span>g</span>
                    <span>n</span>
                    <span>u</span>
                    <span>p</span>
                </span>
                <span class="span-mother2">
                    <span>S</span>
                    <span>i</span>
                    <span>g</span>
                    <span>n</span>
                    <span>u</span>
                    <span>p</span>
                </span>
            `;
            authButton.onclick = function() { 
                window.location.href = './login.html';}
        }
    }
}

function logoutUser() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    checkAuthState();
    alert('Вы успешно вышли из аккаунта');
}

// Добавляем вызов проверки состояния при загрузке
document.addEventListener('DOMContentLoaded', function() {
    checkAuthState();
    

});

function openPopup(productName) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    popupContent.innerHTML =
      '<h3>Вы хотите купить ' + productName + '?</h3>' +
      '<p>Выберите вариант:</p>' +
      '<button class="delivery-button" data-delivery="Доставка курьером">Доставка курьером</button>' +
      '<button class="delivery-button" data-delivery="Самовывоз">Самовывоз</button>' +
      '<button class="close-button">Закрыть</button>';

    popup.style.display = 'flex';

    

    const deliveryButtons = document.querySelectorAll('.delivery-button');
    deliveryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const deliveryOption = button.getAttribute('data-delivery');
        buyNow(productName, deliveryOption);
      });
    });

  
    const closeButton = popupContent.querySelector('.close-button');
    closeButton.addEventListener('click', closePopup);
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function buyNow(productName, deliveryOption) {
    alert('Вы выбрали ' + productName + ' с ' + deliveryOption);
    closePopup();
  }
   
 document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.getElementById('theme-toggle');
            const htmlElement = document.documentElement;
            
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
            if (savedTheme) {
                htmlElement.setAttribute('data-theme', savedTheme);
                themeToggle.checked = savedTheme === 'dark';
            } else if (systemPrefersDark) {
                htmlElement.setAttribute('data-theme', 'dark');
                themeToggle.checked = true;
            }
            
            
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    htmlElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    htmlElement.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'light');
                }
            });
        });

  window.addEventListener('resize', function() {
    const popup = document.getElementById('popup');
    if (window.innerWidth <= 768) {
        popup.style.alignItems = 'flex-start';
        popup.style.paddingTop = '20px';
    } else {
        popup.style.alignItems = 'center';
        popup.style.paddingTop = '0';
    }
});
window.dispatchEvent(new Event('resize'));
    
document.getElementById('theme-toggle').addEventListener('change', function() {
    const popup = document.getElementById('popup');
    if (popup.style.display === 'flex') {
        const popupContent = document.getElementById('popup-content');
        const isDarkTheme = this.checked;
        
        if (isDarkTheme) {
            popupContent.style.backgroundColor = '#1e1e1e';
            popupContent.style.color = '#f5f5f5';
            
            const buttons = popupContent.querySelectorAll('button');
            buttons.forEach(button => {
                button.style.backgroundColor = '#1D1F2C';
                button.style.color = '#f5f5f5';
            });
        } else {
            popupContent.style.backgroundColor = '#f5f5f5';
            popupContent.style.color = '#333333';
            
            const buttons = popupContent.querySelectorAll('button');
            buttons.forEach(button => {
                button.style.backgroundColor = '#3D7EAE';
                button.style.color = '#ffffff';
            });
        }
    }
});


