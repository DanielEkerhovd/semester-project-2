export default function carousel() {
  const heroImage = document.getElementById('hero_image')
  const images = document.querySelectorAll('.carousel-item')
  const prevButton = document.getElementById('prev')
  const nextButton = document.getElementById('next')
  const modal = document.getElementById('imageModal')
  const modalImage = document.getElementById('modalImage')
  const closeModal = document.getElementById('closeModal')
  const modalPrev = document.getElementById('modalPrev')
  const modalNext = document.getElementById('modalNext')

  const modalImages = [heroImage, ...images]

  let currentIndex = 0

  // Show image in carousel based on current index
  function showImage(index) {
    images.forEach((img, idx) => {
      img.classList.toggle('hidden', idx !== index)
    })
  }

  // Open the modal and display the selected image
  function openModal(index) {
    modalImage.src = modalImages[index].src
    modal.classList.remove('hidden')
    currentIndex = index // Sync the current index with the modal
  }

  heroImage.addEventListener('click', () => {
    openModal(0)
  })

  // Next Button click event for carousel
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    showImage(currentIndex)
  })

  // Prev Button click event for carousel
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    showImage(currentIndex)
  })

  // Open modal when an image in the carousel is clicked
  images.forEach((img, idx) => {
    img.addEventListener('click', () => {
      openModal(idx + 1)
    })
  })

  // Modal next and prev buttons to navigate through the images
  modalNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % modalImages.length
    modalImage.src = modalImages[currentIndex].src
  })

  modalPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length
    modalImage.src = modalImages[currentIndex].src
  })

  // Close modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
  })

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden')
    }
  })
}
