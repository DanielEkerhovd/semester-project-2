import pushListing from '../api/listing/create_listing.mjs';

export default async function createListing() {
  const createListing1 = document.querySelector('#create_listing_1');
  const createListing2 = document.querySelector('#create_listing_2');

  const buttons = [createListing1, createListing2];

  const modal = document.getElementById('newListingModal');

  // Handle form data

  const form = document.getElementById('newListingForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const endsAt = document.getElementById('date').value;

    const media = document.getElementById('media_container');
    const modalContainer = document.getElementById('newListingContent');
    const mediaInputs = media.querySelectorAll('input');
    const mediaArray = Array.from(mediaInputs);

    let errorBox;

    const mediaData = mediaArray.map((input) => {
      return {
        url: input.value,
        alt: 'Listing image',
      };
    });

    if (modalContainer.children[1].tagName === 'DIV') {
      modalContainer.children[1].remove();
    }

    if (!title || !description || !endsAt || mediaData.length === 0) {
      const modalContainer = document.getElementById('newListingContent');
      errorBox = document.createElement('div');
      errorBox.classList.add(
        'bg-black',
        'text-white',
        'p-2',
        'rounded-sm',
        'mb-5',
        'm-auto',
        'w-11/12',
        'max-w-2xl',
        'text-lg',
        'flex',
        'flex-col',
        'items-center',
        'font-title',
        'font-semibold',
      );

      if (!title) {
        const titleError = document.createElement('p');
        titleError.textContent = 'Title is required';
        errorBox.appendChild(titleError);
      }

      if (!description) {
        const descriptionError = document.createElement('p');
        descriptionError.textContent = 'Description is required';
        errorBox.appendChild(descriptionError);
      }

      if (!endsAt) {
        const endsAtError = document.createElement('p');
        endsAtError.textContent = 'End date is required';
        errorBox.appendChild(endsAtError);
      }

      if (endsAt < new Date().toISOString().split('T')[0]) {
        const endsAtError = document.createElement('p');
        endsAtError.textContent = 'End date must be in the future';
        errorBox.appendChild(endsAtError);
      }

      if (mediaData[0].url === '' && mediaData.length === 1) {
        const mediaError = document.createElement('p');
        mediaError.textContent = 'At least one image is required';
        errorBox.appendChild(mediaError);
      } else {
        let isError = false;

        mediaData.forEach((media) => {
          if (!media.url) {
            isError = true;
          }
        });

        if (isError) {
          const mediaError = document.createElement('p');
          mediaError.textContent = 'All images must have a URL';
          errorBox.appendChild(mediaError);
        }
      }

      modalContainer.insertBefore(errorBox, modalContainer.childNodes[1]);
    } else {
      const data = {
        title: title,
        description: description,
        endsAt: endsAt,
        media: [...mediaData],
      };

      try {
        const result = await pushListing(data);

        modal.classList.add('hidden');
        const id = result.data.id;
        window.location.href = `/listing/?id=${id}`;
      } catch (error) {}
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        modal.classList.remove('hidden');
        errorBox.remove();
        document.body.style.overflow = 'hidden';
      });
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.add('hidden');
        errorBox.remove();
        document.body.style.overflow = 'auto';
      }
    });
  });
}
