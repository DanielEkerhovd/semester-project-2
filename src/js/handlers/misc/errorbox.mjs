export default async function errorBox(container, show = true) {

    if (show) {
        container.classList.add('flex');
        container.classList.remove('hidden');
    } else {
        container.classList.add('hidden');
        container.classList.remove('flex');
    }
    
}