import sendBid from '../../api/listing/bid_listing.mjs';

export default async function buttonClick(bidContainer, bidButton, listing) {;

    let latestBid = 0;
    
    if (listing.bids.length > 0) {
        const latestBidObj = listing.bids[listing.bids.length - 1];
        latestBid = latestBidObj.amount;
    }

    bidButton.innerHTML = '';
    // Disable button
    bidButton.disabled = true;

    bidContainer.classList.add('absolute', 'w-full');
    bidButton.classList.add('grow', 'flex', 'items-center', 'justify-center', 'gap-2');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('relative');

    // Input field
    const input = document.createElement('input');
    input.classList.add('w-full', 'p-2', 'rounded-sm', 'bg-secondary', 'text-black', 'font-text', 'font-semibold', 'text-center', 'text-lg', 'max-w-40');
    input.value = latestBid + 1;
    input.type = 'number';
    input.min = latestBid + 1;

    // Dollar sign
    const dollar = document.createElement('span');
    dollar.innerText = '$';
    dollar.classList.add('font-title', 'font-semibold', 'text-lg', 'text-black', 'absolute', 'right-4', 'top-2');
    inputContainer.appendChild(dollar);

    inputContainer.appendChild(input);
    bidButton.appendChild(inputContainer);
    

    // Submit button
    const submit = document.createElement('button');
    submit.classList.add('p-2','bg-black', 'rounded-sm', 'text-white', 'font-title', 'font-semibold', 'text-center', 'lg:text-lg', 'w-16', 'lg:w-32', 'min-w-24');
    submit.innerText = 'Bid';
    bidButton.appendChild(submit);

    submit.addEventListener('click', async () => {

        const bidAmount = input.value;
        const bidAmountNumber = Number(bidAmount);
        
        try {
            await sendBid(listing, bidAmountNumber);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }

    });

    // Cursor focus on input
    input.focus();

    // if clicked somewhere else, remove classes
    document.addEventListener('click', (e) => {
        if (!bidContainer.contains(e.target)) {
            bidContainer.classList.remove('absolute', 'w-full');
            bidButton.classList.remove('grow');
            bidButton.disabled = false;
            bidButton.innerHTML = 'BID';
        }
    });


};
