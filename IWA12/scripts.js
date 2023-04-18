// Map each book status to its corresponding properties
const STATUS_MAP = { //The first block of code defines an object named STATUS_MAP, which maps each book 
    shelf: {          //status to a set of properties like color, canReserve, canCheckout, and canCheckIn.
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    }
  };
  
  // Select all the necessary elements

  // The next several lines of code use document.querySelector to select various elements on a webpage that correspond to each book's status, reserve button,
  // checkout button, and checkin button. The elements are stored in variables named book1status, book1reserve, book1checkout, book1checkin, book2status, book2reserve,
  // and so on.

  const book1status= document.querySelector('#book1 .status');      
  const book1reserve = document.querySelector('#book1 .reserve');
  const book1checkout = document.querySelector('#book1 .checkout');
  const book1checkin =  document.querySelector('#book1 .checkin');


  const book2status=    document.querySelector('#book2 .status');
  const book2reserve =  document.querySelector('#book2 .reserve');
  const book2checkout = document.querySelector('#book2 .checkout');
  const book2checkin =  document.querySelector('#book2 .checkin');

  const book3status=    document.querySelector('#book3 .status');
  const book3reserve =  document.querySelector('#book3 .reserve');
  const book3checkout = document.querySelector('#book3 .checkout');
  const book3checkin =  document.querySelector('#book3 .checkin');





  
  
  
    // Check the status of each book individually and update its properties
    // The last several lines of code update the properties of each book's status, reserve button, checkout button, and checkin
    // button based on the values stored in the STATUS_MAP object.
    
    // For book 1, its status is set to overdue, so the color of its status element is set to red,
    // and its reserve and checkout buttons are disabled while its checkin button is enabled.

    book1status.style.color = STATUS_MAP.overdue.color;
    book1reserve.disabled = !STATUS_MAP.overdue.canReserve;
    book1checkout.disabled = !STATUS_MAP.overdue.canCheckout;
    book1checkin.disabled = !STATUS_MAP.overdue.canCheckIn;


// For book 2, its status is set to reserved, so the color of its status element is set to blue, 
//and its reserve button is disabled while its checkout and checkin buttons are enabled.

    book2status.style.color = STATUS_MAP.reserved.color;
    book2reserve.disabled = !STATUS_MAP.reserved.canReserve;
    book2checkout.disabled = !STATUS_MAP.reserved.canCheckout;
    book2checkin.disabled = !STATUS_MAP.reserved.canCheckIn;


    // For book 3, its status is set to shelf, so the color of its status element is set to green, and all of its buttons
    // (reserve, checkout, and checkin) are enabled.
    book3status.style.color = STATUS_MAP.shelf.color;
    book3reserve.disabled = !STATUS_MAP.shelf.canReserve;
    book3checkout.disabled = !STATUS_MAP.shelf.canCheckout;
    book3checkin.disabled = !STATUS_MAP.shelf.canCheckIn;


    // Finally, the last three lines of code set the filter property of each book's checkin button to grayscale, effectively making it appear grayed out.
    book1checkin.style.filter = 'grayscale(100%)';
    book2checkin.style.filter = 'grayscale(100%)';
    book3checkin.style.filter = 'grayscale(100%)';  
    

 





