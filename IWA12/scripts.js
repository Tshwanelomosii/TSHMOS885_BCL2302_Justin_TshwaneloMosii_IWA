
  const STATUS_MAP = {
    shelf: {
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
}

// Edit below line 





// Select all the necessary elements
const statusElems = document.querySelectorAll('.status');
const reserveBtns = document.querySelectorAll('.reserve');
const checkoutBtns = document.querySelectorAll('.checkout');
const checkinBtns = document.querySelectorAll('.checkin');

// Loop through each book and update its status and buttons
statusElems.forEach((statusElem, index) => {
  const status = statusElem.textContent.trim();
  const { color, canReserve, canCheckout, canCheckIn } = STATUS_MAP[status];

  // Update the status text color
  statusElem.style.color = color;

  // Update the Reserve button
  reserveBtns[index].disabled = !canReserve;
  reserveBtns[index].style.color = canReserve ? 'black' : 'gray';

  // Update the Checkout button
  checkoutBtns[index].disabled = !canCheckout;
  checkoutBtns[index].style.color = canCheckout ? 'black' : 'gray';

  // Update the Checkin button
  checkinBtns[index].disabled = !canCheckIn;
  checkinBtns[index].style.color = canCheckIn ? 'black' : 'gray';
});

































// const decrementBtn = document.getElementById("decrement");
// const incrementBtn = document.getElementById("increment");
// const countEl = document.getElementById("count");

// decrementBtn.addEventListener("click", () => {
//   const currentCount = parseInt(countEl.value);
//   const step = parseInt(countEl.step);
//   const minCount = parseInt(countEl.min);
//   const newCount = Math.max(currentCount - step, minCount);
//   countEl.value = newCount;

//   updateColor(newCount);
// });

// incrementBtn.addEventListener("click", () => {
//   const currentCount = parseInt(countEl.value);
//   const step = parseInt(countEl.step);
//   const maxCount = parseInt(countEl.max);
//   const newCount = Math.min(currentCount + step, maxCount);
//   countEl.value = newCount;

//   updateColor(newCount);
// });

// function updateColor(count) {
//   if (count === 0) {
//     countEl.style.color = "black";
//   } else if (count === parseInt(countEl.max)) {
//     countEl.style.color = "green";
//   } else {
//     countEl.style.color = "red";
//   }
// }































