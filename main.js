// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.media-post');
  const errorModal = document.getElementById('error-modal');
  const modalMessage = document.getElementById('modal-message');

  posts.forEach(post => {
    const likeButton = post.querySelector('.like-glyph');
    likeButton.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (likeButton.textContent === EMPTY_HEART) {
            likeButton.textContent = FULL_HEART;
            likeButton.classList.add('activated-heart');
          } else {
            likeButton.textContent = EMPTY_HEART;
            likeButton.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          modalMessage.textContent = error;
          errorModal.classList.remove('hidden');
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});
`console.log(document.querySelector('.hidden'));` 







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
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
