// List of all PNG pages in your repository
const pages = [
    'page1-option1.png',
    'page1-option2.png',
    'page1-option3.png',
    'page2.png',
    'page3.png',
    'page4.png'
    // Add more file names here if you upload more!
];

let pageFlip = null;

function openBook() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('flipbook').style.display = 'block';

    pageFlip = new St.PageFlip(document.getElementById('flipbook'), {
        width: 700,
        height: 500,
        size: 'stretch',
        minWidth: 320,
        minHeight: 420,
        maxWidth: 1000,
        maxHeight: 1400,
        showCover: true,
        mobileScrollSupport: true
    });

    // Prepare pages for pageflip
    const images = pages.map(src => ({
        type: 'image',
        src: src
    }));

    pageFlip.loadFromImages(images);
}
