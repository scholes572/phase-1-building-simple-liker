// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  const likeHearts = document.querySelectorAll('.like-glyph');

  // Hide the error modal on initial load
  errorModal.classList.add('hidden');

  likeHearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // Toggle heart if successful
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          // Show error modal
          errorModal.classList.remove('hidden');
          document.getElementById('modal-message').textContent = error;

          // Hide it after 3 seconds
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(_url="http://mimicServer.example.com", _config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
