console.log('The script is running!')

const joinGroup = async (event) => {
    console.log('JOINING GROUP')
    event.preventDefault();

    const id = document.querySelector('#join-group-id').value.trim();

    console.log(id);

    if (id) {
        const response = await fetch('/api/groups/join/' + id, {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/group/' + id)
        } else {
            alert('Failed to join group.')
        }
    }
}

document
    .querySelector('.join-group-form')
    .addEventListener('submit', joinGroup);
