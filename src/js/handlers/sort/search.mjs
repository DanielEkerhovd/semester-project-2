export default function search() {
  const searchForm = document.getElementById('search_form');
  const searchInput = document.getElementById('search_input');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = searchInput.value;
    window.location.href = `../listings/?q=${searchValue}`;
  });
}
