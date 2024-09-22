import sendBid from '../../api/listing/bid_listing.mjs'

export default async function buttonClick(bidContainer, bidButton, listing) {
  const currentPage = window.location.pathname
  const user = JSON.parse(localStorage.getItem('profile'));
  const userWallet = user.credits


  let latestBid = 0

  if (listing.bids.length > 0) {
    const latestBidObj = listing.bids[listing.bids.length - 1]
    latestBid = latestBidObj.amount
  }

  bidButton.innerHTML = ''
  // Disable button
  bidButton.disabled = true

  if (currentPage === '/listing/') {
    bidContainer.classList.add('w-full', 'max-w-80')
  } else {
    bidContainer.classList.add('absolute', 'w-full')
  }

  bidButton.classList.add(
    'grow',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'transition-all',
    'duration-200',
  )

  const inputContainer = document.createElement('div')
  inputContainer.classList.add('relative')

  // Input field
  const input = document.createElement('input')
  input.classList.add(
    'w-full',
    'p-2',
    'rounded-sm',
    'bg-secondary',
    'text-black',
    'font-text',
    'font-semibold',
    'text-center',
    'text-lg',
    'max-w-40',
  )
  input.value = latestBid + 1
  input.type = 'number'
  input.min = latestBid + 1

  // Dollar sign
  const dollar = document.createElement('span')
  dollar.innerText = '$'
  dollar.classList.add(
    'font-title',
    'font-semibold',
    'text-lg',
    'text-black',
    'absolute',
    'right-4',
    'top-2',
  )
  inputContainer.appendChild(dollar)

  inputContainer.appendChild(input)
  bidButton.appendChild(inputContainer)

  // Submit button
  const submit = document.createElement('button')
  submit.classList.add(
    'p-2',
    'bg-black',
    'rounded-sm',
    'text-white',
    'font-title',
    'font-semibold',
    'text-center',
    'lg:text-lg',
    'w-16',
    'lg:w-32',
    'min-w-24',
  )
  submit.innerText = 'Bid'
  bidButton.appendChild(submit)

  submit.addEventListener('click', async () => {
    // Modal

    const modal = document.createElement('div')
    modal.classList.add(
      'fixed',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'bg-black',
      'bg-opacity-50',
      'flex',
      'items-center',
      'justify-center',
      'z-50',
    )

    const modalContent = document.createElement('div')
    modalContent.classList.add(
      'bg-white',
      'p-4',
      'rounded-sm',
      'flex',
      'flex-col',
      'items-center',
      'gap-4',
      'relative',
    )

    if (userWallet < input.value) {

        const errorText = document.createElement('p')
        errorText.classList.add(
          'font-title',
          'font-semibold',
        )
        errorText.innerText = 'Insufficient funds'

        const close = document.createElement('button')
        close.classList.add(
            'p-2',
            'bg-black',
            'text-white',
            'rounded-sm',
            'font-title',
            'font-semibold',
            'text-lg',
        )
        close.innerText = 'Close'

        close.addEventListener('click', () => {
            document.body.removeChild(modal)
        }
        )

        modalContent.append(errorText, close)

    } else if (input.value <= latestBid) {

        const errorText = document.createElement('p')
        errorText.classList.add(
            'font-title',
            'font-semibold',
        )
        errorText.innerText = 'Please enter a higher bid'
        
        const close = document.createElement('button')
        close.classList.add(
            'p-2',
            'bg-black',
            'text-white',
            'rounded-sm',
            'font-title',
            'font-semibold',
            'text-lg',
        )
        close.innerText = 'Close'

        close.addEventListener('click', () => {
            document.body.removeChild(modal)
        }
        )
        
        modalContent.append(errorText, close)
        
    } else {

    const modalText = document.createElement('p')
    modalText.classList.add(
      'font-title',
      'font-semibold',
      'text-lg',
      'text-black',
    )
    modalText.innerText = 'You are about to bid:'

    const modalAmount = document.createElement('p')
    modalAmount.classList.add(
      'font-title',
      'font-semibold',
      'text-2xl',
      'text-black',
    )
    modalAmount.innerText = `${input.value}$`

    const choice = document.createElement('div')
    choice.classList.add('flex', 'items-center', 'gap-4')

    const bidAccept = document.createElement('button')
    bidAccept.classList.add(
      'py-2',
      'bg-highlight',
      'text-black',
      'rounded-sm',
      'font-title',
      'font-semibold',
      'text-xl',
      'px-6'
    )
    bidAccept.innerText = 'BID'

    const cancel = document.createElement('button')
    cancel.classList.add(
      'p-2',
      'bg-black',
      'text-white',
      'rounded-sm',
      'font-title',
      'font-semibold',
      'text-lg',
    )
    cancel.innerText = 'Cancel'

    bidAccept.addEventListener('click', async () => {
      const bidAmount = input.value
      const bidAmountNumber = Number(bidAmount)

      try {
        await sendBid(listing, bidAmountNumber)
        window.location.reload()
      } catch (error) {
        const errorText = document.createElement('p')
        errorText.classList.add(
          'font-title',
          'font-semibold',
        )
        errorText.innerText = 'Something went wrong, please try again'
        // Remove previous content
        modalContent.innerHTML = ''
        modalContent.appendChild(errorText)
      }
    })

    cancel.addEventListener('click', () => {
      document.body.removeChild(modal)
    })

    modal.addEventListener('click', (e) => {
      if (!modalContent.contains(e.target)) {
        document.body.removeChild(modal)
      }
    })

    modalContent.appendChild(modalText)
    modalContent.appendChild(modalAmount)
    choice.append(bidAccept, cancel)
    modalContent.appendChild(choice)
}
    modal.appendChild(modalContent)
    document.body.appendChild(modal)
  })

  // Cursor focus on input
  input.focus()

  // if clicked somewhere else, remove classes
  document.addEventListener('click', (e) => {
    if (!bidContainer.contains(e.target)) {
      bidContainer.classList.remove('absolute', 'w-full')
      bidButton.classList.remove('grow')
      bidButton.disabled = false
      bidButton.innerHTML = 'BID'
    }
  })
}
