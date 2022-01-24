console.log("Script is running");

const newUser = async (event) => {
    console.log('RUNNING NEW USER')
    event.preventDefault();

    //Collect values from new group form
    const user_name = document.querySelector('.user-name').value.trim();
    const email = document.querySelector('.user-email').value.trim();
    const password = document.querySelector('.user-password').value.trim();

    console.log(user_name, email, password)

    if (user_name && email && password) {
        // Send a POST request to API
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ user_name, email, password }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create user.')
        }
    }
}

document
    .querySelector('.new-user-form')
    .addEventListener('submit', newUser);
