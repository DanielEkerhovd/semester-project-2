export default function search() {

    const searchInput = document.getElementById('search_input');
    const searchButton = document.getElementById('search_button');


    searchButton.addEventListener('click', async () => {

        if (!searchInput.value) {
            return;
        }
        const searchValue = searchInput.value;
        window.location.href = `../listings/?search=${searchValue}`;
    });

}