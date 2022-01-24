console.log('The script is running');

const newGroup = async (event) => {
    event.preventDefault();

    //Collect values from new group form
    const groupName = document.querySelector('.group-name').value.trim();
    const campaign = document.querySelector('.group-campaign').value.trim();
    const meetings = document.querySelector('.group-meetings').value.trim();

    if (groupName) {

    }

}

document
    .querySelector('.new-group')
    .addEventListener('submit', newGroup)
