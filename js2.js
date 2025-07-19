
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('registrationForm');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
           
            if (!email || !password) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }
            
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('Пожалуйста, введите корректный email!');
                return;
            }
            
            
            if (password.length < 6) {
                alert('Пароль должен содержать не менее 6 символов!');
                return;
            }
            
        
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');
            
            
            alert('Вход выполнен успешно! Добро пожаловать в Мир Labubu!');
            window.location.href = 'index.html'; 
        });
        
        
        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = 'index.html';
        }
    });
