console.log('The script is running');

const newGroup = async (event) => {
    event.preventDefault();

    //Collect values from new group form
    const group_name = document.querySelector('.group-name').value.trim();
    const campaign = document.querySelector('.group-campaign').value.trim();
    const meetings = document.querySelector('.group-meetings').value.trim();

    if (groupName) {
        // Send a POST request to API
        const response = await fetch('/api/groups/', {
            method: 'POST',
            body: JSON.stringify({ group_name, campaign, meetings }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create group.')
        }
    }
}

document
    .querySelector('.user-form')
    .addEventListener('submit', newUser);
