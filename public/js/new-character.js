console.log('The script is running!')

const addCharacter = async (event) => {
    console.log('ADDING CHARACTER');
    event.preventDefault();

    const name = document.querySelector('#character-name').value.trim();
    const char_class = document.querySelector('#character-class').value.trim();
    const race = document.querySelector('#character-race').value.trim();
    const description = document.querySelector('#character-description').value.trim();
    const link = document.querySelector('#character-link').value.trim();

    console.log(name, char_class, race, description, link);

    if (name && char_class && race && description && link){
        const response = await fetch('/api/characters/', {
            method: 'POST',
            body: JSON.stringify({ name, char_class, race, description, link }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create character.')
        }
    }
}

document
    .querySelector('.add-character-form')
    .addEventListener('submit', addCharacter);