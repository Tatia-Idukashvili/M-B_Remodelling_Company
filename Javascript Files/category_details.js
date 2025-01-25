const categories = {
    kitchen: {
        title: "Kitchens",
        images: [
            "./Media/Services Page/Kitchens/Kitchen Image 1.jpg",
            "./Media/Services Page/Kitchens/Kitchen Image 2.jpg",
            "./Media/Services Page/Kitchens/Kitchen Image 3.jpg",
            "./Media/Services Page/Kitchens/Kitchen Image 4.jpg",
            "./Media/Services Page/Kitchens/Kitchen Image 5.jpg",
            "./Media/Services Page/Kitchens/Kitchen Image 6.jpg",
        ],
    },
    bathroom: {
        title: "Bathrooms",
        images: [
            "./Media/Services Page/Bathrooms/Bathroom Image 1.jpg",
            "./Media/Services Page/Bathrooms/Bathroom Image 2.jpg",
            "./Media/Services Page/Bathrooms/Bathroom Image 3.jpg",
            "./Media/Services Page/Bathrooms/Bathroom Image 4.jpg",
            "./Media/Services Page/Bathrooms/Bathroom Image 5.jpg",
            "./Media/Services Page/Bathrooms/Bathroom Image 6.jpg",
        ],
    },
    interiors: {
        title: "Interiors",
        images: [
            "./Media/Services Page/Interiors/Interior Image 1.jpg",
            "./Media/Services Page/Interiors/Interior Image 2.jpg",
            "./Media/Services Page/Interiors/Interior Image 3.jpg",
            "./Media/Services Page/Interiors/Interior Image 4.jpg",
            "./Media/Services Page/Interiors/Interior Image 5.jpg",
            "./Media/Services Page/Interiors/Interior Image 6.jpg",
        ],
    },
    additions: {
        title: "Additions",
        images: [
            "./Media/Services Page/Additions/Addition Image 1.jpg",
            "./Media/Services Page/Additions/Addition Image 2.jpg",
            "./Media/Services Page/Additions/Addition Image 3.jpg",
            "./Media/Services Page/Additions/Addition Image 4.jpg",
            "./Media/Services Page/Additions/Addition Image 5.jpg",
            "./Media/Services Page/Additions/Addition Image 6.jpg",
        ],
    },
    exteriors: {
        title: "Exteriors",
        images: [
            "./Media/Services Page/Exteriors/Exterior Image 1.jpg",
            "./Media/Services Page/Exteriors/Exterior Image 2.jpg",
            "./Media/Services Page/Exteriors/Exterior Image 3.jpg",
            "./Media/Services Page/Exteriors/Exterior Image 4.jpg",
            "./Media/Services Page/Exteriors/Exterior Image 5.jpg",
            "./Media/Services Page/Exteriors/Exterior Image 6.jpg",
        ],
    },
    sunrooms: {
        title: "Sunrooms",
        images: [
            "./Media/Services Page/Sunrooms/Sunroom Image 1.jpg",
            "./Media/Services Page/Sunrooms/Sunroom Image 2.jpg",
            "./Media/Services Page/Sunrooms/Sunroom Image 3.jpg",
            "./Media/Services Page/Sunrooms/Sunroom Image 4.jpg",
            "./Media/Services Page/Sunrooms/Sunroom Image 5.jpg",
            "./Media/Services Page/Sunrooms/Sunroom Image 6.jpg",
        ],
    },
};

const urlParams = new URLSearchParams(window.location.search);
const categoryKey = urlParams.get("category");

const currentCategory = categories[categoryKey];

if (currentCategory) {
    document.getElementById("category-title").textContent = currentCategory.title;

    const gallery = document.getElementById("category-gallery");
    currentCategory.images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = `${currentCategory.title} Image`;
        imgElement.classList.add("gallery-image");
        gallery.appendChild(imgElement);
    });
} 
else {
    document.getElementById("category-title").textContent = "Category Not Found";
}