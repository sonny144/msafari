document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainers = document.querySelectorAll('.vehicles');

    slideshowContainers.forEach(container => {
        const slideshowImages = container.querySelectorAll('.general-slideshow img');
        let currentImageIndex = 0;

        function showImage(index) {
            slideshowImages.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
            showImage(currentImageIndex);
        }

        // Show the first image initially
        showImage(currentImageIndex);

        // Set an interval to change images every 3 seconds (adjust as needed)
        setInterval(nextImage, 3000);
    });
});
const vehicleContainers = document.querySelectorAll('.vehicles'); // Assuming your vehicles section has the class 'vehicles'

    vehicleContainers.forEach(container => {
        const slideshowImages = container.querySelectorAll('.general-slideshow img');
        let currentImageIndex = 0;

        function showImage(index) {
            slideshowImages.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
            showImage(currentImageIndex);
        }

        // Show the first image initially
        if (slideshowImages.length > 0) {
            showImage(currentImageIndex);

            // Set an interval to change images every 3 seconds (adjust as needed)
            setInterval(nextImage, 3000);
        }
    });