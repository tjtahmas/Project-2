console.log('The script is running!')

const editGroup = async (event) => {
    console.log('EDITING GROUP')
    event.preventDefault();

    //Collect values from the edit form
    const id = document.querySelector('#group-id').innerHTML;
    const campaign = document.querySelector('#edit-campaign').value.trim();
    const meetings = document.querySelector('#edit-meetings').value.trim();
    const announcement = document.querySelector('#edit-announcement').value.trim();

    console.log(id, campaign, meetings, announcement);

    if (id && (campaign || meetings || announcement)) {
        // Send an UPDATE request to API
        const response = await fetch('/api/groups/edit/' + id, {
            method: 'UPDATE',
            body: JSON.stringify({id, campaign, meetings, announcement}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to update group.')
        }
    }
}

document
    .querySelector('.edit-group-form')
    .addEventListener('submit', editGroup);