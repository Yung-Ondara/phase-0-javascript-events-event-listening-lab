function addingEventListener() {
  const input = document.getElementById('button');

  if (input) {
    input.addEventListener('click', function () {
      console.log('Button clicked!');
    });
  } else {
    console.error("Element with ID 'button' not found!");
  }
}

// Call the function to bind the event listener
addingEventListener();