import listingsAPI from "../api/listing/fetch_listing.mjs";
import listCard from "../components/listing/list_card.mjs";

export default async function listings() {

    // First adds the filter functionality
    // Default to featured (random)

    let filter = 'featured';

    // Then fetch all listings (100)

    // Then display listings in groups of 20


   document.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', function(event) {
          event.preventDefault();

          const selectedValue = this.getAttribute('id');
          
          let filterValue = selectedValue;

          return filterValue;
         
        });
      });

    
      




}