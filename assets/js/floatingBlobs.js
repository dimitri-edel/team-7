// Create floating blobs dynamically
const numberOfBlobs = 10; // Number of blobs
const blobsContainer = document.getElementById("floating-blobs");

if (blobsContainer) {
  for (let i = 0; i < numberOfBlobs; i++) {
    const blob = document.createElement('div');
    blob.classList.add('blob');
  
    // Randomize position for each blob
    blob.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    blob.style.top = `${Math.random() * 100}vh`;  // Random vertical position
  
    // Randomize blob size
    blob.style.width = `${Math.random() * 60 + 40}px`; // Random size between 40px and 100px
    blob.style.height = blob.style.width; // Keep the blob round
  
    // Append the blob to the container
    blobsContainer.appendChild(blob);

    // Add mouse enter event to activate the mouse follow
    blob.addEventListener('mouseenter', () => {
      blob.style.transition = 'none'; // Disable transition for smooth movement
      
      // Start moving blob when mouse is over it
      document.addEventListener('mousemove', moveBlob);

      // Store the blob's reference to use it in mouseleave event
      blob.isMoving = true;
    });

    // Function to move the blob based on mouse position
    function moveBlob(e) {
      if (!blob.isMoving) return; // Check if the blob should move (mouse enter state)

      const mouseX = e.clientX; // Mouse X position
      const mouseY = e.clientY; // Mouse Y position
  
      const blobRect = blob.getBoundingClientRect();
      const blobCenterX = blobRect.left + blobRect.width / 2;
      const blobCenterY = blobRect.top + blobRect.height / 2;
  
      // Calculate the movement direction
      const moveX = (mouseX - blobCenterX) / 8; // Smooth X movement
      const moveY = (mouseY - blobCenterY) / 8; // Smooth Y movement
  
      // Apply the transformation to move the blob
      blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }

    // Add mouse leave event to stop the movement and reset the position
    blob.addEventListener('mouseleave', () => {
      // Reset blob position with a smooth transition
      blob.style.transition = 'all 0.3s ease'; // Enable smooth transition
      blob.style.transform = 'translate(0, 0)'; // Reset to original position
  
      // Stop moving the blob
      blob.isMoving = false;

      // Remove the mousemove event listener
      document.removeEventListener('mousemove', moveBlob);
    });
  }
}
