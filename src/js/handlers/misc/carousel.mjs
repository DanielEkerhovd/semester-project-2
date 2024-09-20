export default function carouselModal() {
  const heroImage = document.getElementById('hero_image');
  const restImages = document.querySelectorAll('.carousel-item'); // Carousel images
  const prevButton = document.getElementById('prev'); // Carousel prev button
  const nextButton = document.getElementById('next'); // Carousel next button
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');

  // Create the modal images array, with the hero image and the carousel items
  const modalImages = [heroImage, ...restImages]; 

  // Check if only one image exists
  const hasMultipleImages = modalImages.length > 1;

  let currentIndex = 0;

  // Show image in the modal based on the current index
  function openModal(index) {
    modalImage.src = modalImages[index].src;
    modal.classList.remove('hidden');
    currentIndex = index;

    // Hide modal navigation buttons if there's only one image
    if (!hasMultipleImages) {
      modalPrev.classList.add('hidden');
      modalNext.classList.add('hidden');
    } else {
      modalPrev.classList.remove('hidden');
      modalNext.classList.remove('hidden');
    }
  }

  // Click event to open the modal when hero image is clicked
  if (heroImage) {
    heroImage.addEventListener('click', () => {
      openModal(0); // Open modal with the hero image (index 0)
    });
  }

  // Click event to open the modal when any carousel image is clicked
  restImages.forEach((img, idx) => {
    img.addEventListener('click', () => {
      openModal(idx + 1); // Open modal with the clicked carousel image
    });
  });

  // Modal next button click event (navigate through images in modal)
  modalNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % modalImages.length;
    modalImage.src = modalImages[currentIndex].src;
  });

  // Modal previous button click event (navigate through images in modal)
  modalPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
    modalImage.src = modalImages[currentIndex].src;
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal when the user clicks outside the modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Carousel controls (only active if more than 1 carousel image)
  if (restImages.length > 1) {
    let carouselIndex = 0;

    function showCarouselImage(index) {
      restImages.forEach((img, idx) => {
        img.classList.toggle('hidden', idx !== index); // Show the current carousel image
      });
    }

    // Carousel next button click event (cycle through carousel images)
    nextButton.addEventListener('click', () => {
      carouselIndex = (carouselIndex + 1) % restImages.length;
      showCarouselImage(carouselIndex);
    });

    // Carousel prev button click event (cycle through carousel images)
    prevButton.addEventListener('click', () => {
      carouselIndex = (carouselIndex - 1 + restImages.length) % restImages.length;
      showCarouselImage(carouselIndex);
    });

    // Initially show the first carousel image
    showCarouselImage(0);
  } else {
    // Hide carousel buttons if only one image
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  }
}
