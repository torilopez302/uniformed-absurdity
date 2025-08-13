// List your PNG page files here
const pages = [
  "page1-option1.png",
  "page1-option2.png",
  "page1-option3.png",
  "page2.png",
  "page3.png",
  "page4.png"
  // Add more PNG filenames here as you upload them!
];

document.addEventListener("DOMContentLoaded", function() {
  const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 400,
    height: 550,
    size: "stretch",
    minWidth: 320,
    minHeight: 420,
    maxWidth: 600,
    maxHeight: 800,
    showCover: true,
    mobileScrollSupport: true,
    controlsProps: {
      // This will show arrows for navigation
      nextBtn: true,
      prevBtn: true,
    },
  });

  const images = pages.map(src => ({
    type: 'image',
    src: src
  }));

  pageFlip.loadFromImages(images);
});
