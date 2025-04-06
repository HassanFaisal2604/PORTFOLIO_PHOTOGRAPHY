# Photography Portfolio Website

A clean, elegant, and responsive photography portfolio website built with HTML, CSS, and JavaScript.

## Features

- Modern, responsive design
- Interactive photo gallery with Lightbox2
- Smooth scrolling navigation
- Mobile-friendly layout
- Custom animations and transitions

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/photography-portfolio.git
   ```

2. Add your images:
   - Place your hero image in `images/hero.jpg`
   - Add your gallery images in `images/gallery/` directory
   - Update the `galleryImages` array in `script.js` with your image details

3. Customize the content:
   - Update the text content in `index.html`
   - Modify the social media links in the contact section
   - Adjust the color scheme in `style.css` if desired

4. Deploy:
   - The site can be deployed to any static hosting service (Netlify, GitHub Pages, etc.)
   - No build step required - just upload the files as is

## Customization

### Adding New Images
To add new images to the gallery:
1. Add your image to the `images/gallery/` directory
2. Update the `galleryImages` array in `script.js`:
   ```javascript
   {
       src: './images/gallery/your-image.jpg',
       title: 'Your Image Title',
       description: 'Your image description'
   }
   ```

### Changing Colors
The site uses Tailwind CSS for styling. You can modify colors by:
1. Editing the Tailwind classes in `index.html`
2. Adding custom colors in `style.css`

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) - For the image gallery

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Lightbox2 by Lokesh Dhakar
- Tailwind CSS 