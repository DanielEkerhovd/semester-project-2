export default function search() {

    const searchInput = document.getElementById('search_input');
    const searchButton = document.getElementById('search_button');

    searchButton.addEventListener('click', async () => {
        const searchValue = searchInput.value;
        window.location.href = `../listings/?q=${searchValue}`;
    });
}