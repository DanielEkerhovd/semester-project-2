export default function newListingModal() {
  const modal = document.createElement('div')
  modal.id = 'newListingModal'
  modal.classList.add(
    'fixed',
    'top-0',
    'left-0',
    'w-full',
    'h-full',
    'm-auto',
    'bg-black',
    'bg-opacity-50',
    'overflow-y-auto',
    'hidden',
  )

  const modalContent = document.createElement('div')
  modalContent.classList.add(
    'bg-highlight',
    'w-11/12',
    'md:max-w-4xl',
    'm-auto',
    'rounded-sm',
    'pt-5',
    'px-5',
    'pb-20',
    'relative',
    'overflow-y-auto',
    'my-5',
  )

  const closeButton = document.createElement('div')
  closeButton.classList.add(
    'absolute',
    'top-2',
    'right-2',
    'size-9',
    'bg-highlight',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
  )
  const closeImg = document.createElement('img')
  closeImg.src = '/src/media/icons/close.png'
  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden')
    document.body.style.overflow = 'auto'
  })

  closeButton.appendChild(closeImg)

  const title = document.createElement('h2')
  title.classList.add(
    'text-2xl',
    'font-bold',
    'font-title',
    'text-center',
    'mb-5',
  )
  title.textContent = 'CREATE NEW LISTING'

  const form = document.createElement('form')
  form.classList.add('flex', 'flex-col', 'gap-3', 'max-w-2xl', 'm-auto')

  const titleContainer = document.createElement('div')
  titleContainer.classList.add('flex', 'flex-col', 'gap-2')

  const titleLabel = document.createElement('label')
  titleLabel.classList.add('text-lg', 'font-bold', 'font-title')
  titleLabel.htmlFor = 'title'
  titleLabel.textContent = 'Title'
  const titleInput = document.createElement('input')
  titleInput.type = 'text'
  titleInput.name = 'title'
  titleInput.id = 'title'
  titleInput.placeholder = 'Insert title here'
  titleInput.classList.add('rounded-sm', 'px-3', 'h-10')

  titleContainer.append(titleLabel, titleInput)

  const descriptionContainer = document.createElement('div')
  descriptionContainer.classList.add('flex', 'flex-col', 'gap-2')

  const descriptionLabel = document.createElement('label')
  descriptionLabel.classList.add('text-lg', 'font-bold', 'font-title')
  descriptionLabel.htmlFor = 'description'
  descriptionLabel.textContent = 'Description'
  const descriptionInput = document.createElement('textarea')
  descriptionInput.name = 'description'
  descriptionInput.id = 'description'
  descriptionInput.placeholder = 'Insert description here'
  descriptionInput.classList.add(
    'rounded-sm',
    'px-3',
    'py-2',
    'h-14',
    'sm:h-32',
  )

  descriptionContainer.append(descriptionLabel, descriptionInput)

  const dateContainer = document.createElement('div')
  dateContainer.classList.add(
    'flex',
    'flex-col',
    'sm:flex-row',
    'sm:items-center',
    'gap-3',
    'sm:gap-5',
    'sm:ml-auto',
  )

  // Date with time picker
  const dateLabel = document.createElement('label')
  dateLabel.classList.add('text-lg', 'font-bold', 'font-title')
  dateLabel.htmlFor = 'date'
  dateLabel.textContent = 'End date'
  const dateInput = document.createElement('input')
  dateInput.type = 'datetime-local'
  dateInput.name = 'date'
  dateInput.id = 'date'
  dateInput.classList.add('rounded-sm', 'px-3', 'h-12', 'sm:w-52')

  dateContainer.append(dateLabel, dateInput)

  const media = document.createElement('div')
  media.classList.add('flex', 'flex-col', 'gap-5')
  const mediaLabel = document.createElement('label')
  mediaLabel.classList.add('text-lg', 'font-bold', 'font-title')
  mediaLabel.htmlFor = 'media'
  mediaLabel.textContent = 'Media (URL)'

  const mediaInputContainer = document.createElement('div')
  mediaInputContainer.classList.add('flex', 'flex-col', 'gap-2')

  const firstMediaInput = document.createElement('div')
  firstMediaInput.classList.add('flex', 'gap-2', 'items-center', 'h-10')

  const mediaInput = document.createElement('input')
  mediaInput.type = 'text'
  mediaInput.name = 'media'
  mediaInput.id = 'media'
  mediaInput.placeholder = 'Insert media URL here'
  mediaInput.classList.add('rounded-sm', 'px-3', 'h-10', 'rounded-sm', 'w-full')
  const mediaButton = document.createElement('div')
  mediaButton.classList.add(
    'bg-white',
    'rounded-sm',
    'size-10',
    'p-1',
    'flex',
    'justify-center',
    'items-center',
  )
  const mediaButtonImg = document.createElement('img')
  mediaButtonImg.src = '/src/media/icons/add.png'
  mediaButtonImg.alt = 'Add media'
  mediaButtonImg.id = 'add-media'
  mediaButton.appendChild(mediaButtonImg)
  firstMediaInput.append(mediaInput, mediaButton)

  function addMedia(container, addMediaButton) {
    const build = () => {
      const container = document.createElement('div')
      container.classList.add('flex', 'gap-2', 'items-center', 'h-10')

      const input = document.createElement('input')
      input.type = 'text'
      input.name = 'media'
      input.id = 'media'
      input.placeholder = 'Insert media URL here'
      input.classList.add('rounded-sm', 'px-3', 'h-10', 'rounded-sm', 'w-full')

      const button = document.createElement('div')
      button.classList.add(
        'bg-white',
        'rounded-sm',
        'size-10',
        'p-1',
        'flex',
        'justify-center',
        'items-center',
      )
      const img = document.createElement('img')
      img.src = '/src/media/icons/delete.png'
      img.alt = 'Delete input'
      button.appendChild(img)

      button.addEventListener('click', () => {
        container.remove()
      })

      container.append(input, button)
      return container
    }

    addMediaButton.addEventListener('click', () => {
      if (container.children.length >= 5) {
        return
      }
      const newMediaInput = build()
      container.appendChild(newMediaInput)
    })
  }

  addMedia(mediaInputContainer, mediaButton)

  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.classList.add(
    'bg-black',
    'text-white',
    'rounded-sm',
    'p-2',
    'w-32',
    'mt-5',
  )
  submit.textContent = 'Publish'

  form.appendChild(titleContainer)
  form.appendChild(descriptionContainer)
  form.appendChild(dateContainer)

  mediaInputContainer.appendChild(firstMediaInput)
  media.appendChild(mediaLabel)
  media.appendChild(mediaInputContainer)

  form.appendChild(media)
  form.appendChild(submit)

  modalContent.appendChild(title)
  modalContent.appendChild(form)

  // Here
  modalContent.appendChild(closeButton)
  modal.appendChild(modalContent)

  return modal
}
