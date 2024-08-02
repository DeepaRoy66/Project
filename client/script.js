const formPopup = document.querySelector('.form-popup');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.getElementById('loginForm');
const homeLink = document.querySelector('.home-link');

btnPopup.addEventListener('click', () => {
    formPopup.classList.toggle('hidden');
});

iconClose.addEventListener('click', () => {
    formPopup.classList.add('hidden');
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('active');
});

// loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     try {
//         const response = await fetch('http://localhost:5000/addnote', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//         });
   

//         const result = await response.json();

//         if (response.ok) {
//             console.log('Success:', result);
//             alert('Data sent successfully');
//         } else {
//             console.error('Error:', result);
//             alert("hekllo threere");
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('hello error');
//     }
// });

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Success:', result);
            alert('Login Success');
        } else {
            console.error('Error:', result);
            alert("error making login");
        }
    } catch (error) {
        console.error('Error:', error);
        alert('hello error aayo hai last wala');
    }
});