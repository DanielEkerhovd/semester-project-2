import listCard from '../../components/listing/list_card.mjs'

export default function homepage() {
  const lastListing = document.getElementById('last_list');
  const lastCard = listCard();
  lastListing.appendChild(lastCard);

  const newListing = document.getElementById('new_list')
  const newCards = []

  for (let i = 0; i < 2; i++) {
    
    const newCard = listCard()
    newCards.push(newCard)
    
  }

  newCards.forEach(card => {
    newListing.appendChild(card)
  })
}
