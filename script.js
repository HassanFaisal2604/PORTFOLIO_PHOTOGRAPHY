// Gallery images data
const galleryImages = [{
        src: './images/gallery/img0999.jpg',
        title: 'Urban Landscape',
        description: 'Cityscape captured at golden hour'
    },
    {
        src: './images/gallery/img5905.jpg',
        title: 'Nature\'s Beauty',
        description: 'Scenic view of natural landscape'
    },
    {
        src: './images/gallery/img5911.jpg',
        title: 'Architectural Detail',
        description: 'Intricate building design'
    },
    {
        src: './images/gallery/img0494.jpg',
        title: 'Street Photography',
        description: 'Candid moment in the city'
    },
    {
        src: './images/gallery/img8880.jpg',
        title: 'Portrait',
        description: 'Expressive portrait photography'
    },
    {
        src: './images/gallery/img0187.jpg',
        title: 'Landscape',
        description: 'Breathtaking natural scenery'
    },
    {
        src: './images/gallery/img0280.jpg',
        title: 'Urban Exploration',
        description: 'City life through the lens'
    },
    {
        src: './images/gallery/img0162.jpg',
        title: 'Nature\'s Palette',
        description: 'Vibrant colors in nature'
    },
    {
        src: './images/gallery/img0074.jpg',
        title: 'Architectural Marvel',
        description: 'Modern building design'
    }
];

// Initialize the gallery
function initGallery() {
    const galleryContainer = document.querySelector('#gallery .grid');

    // Add Instagram link and description
    const instagramSection = document.createElement('div');
    instagramSection.className = 'col-span-full text-center mb-8';
    instagramSection.innerHTML = `
        <p class="text-lg text-gray-700 mb-4">All photographs in this gallery were captured by me. Follow my photography journey on Instagram!</p>
        <a href="https://www.instagram.com/ncbaedsc/" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/>
            </svg>
            @ncbaedsc
        </a>
    `;
    galleryContainer.insertBefore(instagramSection, galleryContainer.firstChild);

    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();

    galleryImages.forEach(image => {
        const galleryItem = document.createElement('a');
        galleryItem.href = image.src;
        galleryItem.setAttribute('data-lightbox', 'gallery');
        galleryItem.setAttribute('data-title', `${image.title} - ${image.description}`);
        galleryItem.className = 'block overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 will-change-transform';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy'; // Enable lazy loading
        img.className = 'w-full h-72 object-cover transition-transform duration-500 hover:scale-110 will-change-transform';

        // Set width and height attributes to prevent layout shifts
        img.width = 400;
        img.height = 288;

        galleryItem.appendChild(img);
        fragment.appendChild(galleryItem);
    });

    // Append all items at once
    galleryContainer.appendChild(fragment);
}

// Initialize lightbox with optimized settings
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Image %1 of %2',
    'fadeDuration': 300,
    'imageFadeDuration': 300
});

// Debounce scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
        // Any scroll-related code can go here
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for category sections
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Add animation classes to category sections
document.querySelectorAll('.category-section').forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
    observer.observe(section);
});

// Add smooth scroll behavior to the entire page
document.documentElement.style.scrollBehavior = 'smooth';

// Add Instagram link to university society section
function addInstagramToUniversitySociety() {
    const universitySocietySection = document.querySelector('#university-society .profiles-and-work');
    if (universitySocietySection) {
        const instagramLink = document.createElement('div');
        instagramLink.className = 'mt-4 text-center';
        instagramLink.innerHTML = `
            <p class="text-lg text-gray-700 mb-2">Follow my photography journey on Instagram!</p>
            <a href="https://www.instagram.com/ncbaedsc/" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/>
                </svg>
                @ncbaedsc
            </a>
        `;
        universitySocietySection.appendChild(instagramLink);
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    addInstagramToUniversitySociety();
});
