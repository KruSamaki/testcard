// Click show or hide
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("ul");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

// New items store in js
const newsData = [
  {
    title: "លោកប្រធានការិយាល័យអប់រំស្រុកសំឡូត ជួបសំណេះសំណាលជាមួយលោកគ្រូអ្នកគ្រូ នៃសាលាអនុវិទ្យាល័យសាមគ្គី",
    content: "លោកប្រធានការិយាល័យអប់រំនៃរដ្ឋបាលស្រុកសំឡូត បានជួបសំណេះសំណាលជាមួយលោកគ្រូអ្នកគ្រូនៃសាលាអនុវិទ្យាល័យសាមគ្គី។",
    author: "My Langdy",
    date: "06-June-2024",
    images: ["images-post/9.jpg", "images-post/10.jpg","images-post/11.jpg"]
  },
  {
    title: "កិច្ចប្រជុំពាក់ព័ន្ធគ្រឿងញៀន ក្មេងទំនើង និងសន្ដិតសុខសណ្ដាប់ធ្នាប់សង្គម",
    content: "នៅថ្ងៃទី៥ ខែមិថុនា ឆ្នាំ២០២៤ លោកអភិបាលរងនៃគណៈអភិបាលស្រុកសំឡូត និងក្រុមកាងារបានចុះពិនិត្យ និងណែនាំការងារពាក់ព័ន្ធ គ្រឿងញៀន ក្មេងទំនើង និងសន្តិសុខសុវត្ថិភាពសង្គម ជាមួយលោកគ្រូ អ្នកគ្រូនៃអនុវិទ្យាល័យសាមគ្គី ។",
    author: "My Langdy",
    date: "05-June-2024",
    images: ["images-post/6.jpg","images-post/7.jpg","images-post/8.jpg"]
  },
  {
    title: "សកម្មភាពចាក់ដីពង្រីកទីធ្លាសាលារៀន",
    content: "នៅថ្ងៃទី១១ ខែឧសភា ឆ្នាំ២០២៤ លោកមេឃុំស៊ុង លោកមេភូមិចំការចេក និងក្រុមការងារបានកៀងគរថវិកាពីប្រជាជនក្នុងការស្ដារអាងយកដីចាក់ពង្រីកទីធ្លាសាលារៀនអនុវិទ្យាល័យសាមគ្គី បានសរុបចំនួន ៥០០ឡាន។",
    author: "My Langdy",
    date: "2024-May-12",
    images: ["images-post/1.jpg", "images-post/2.jpg","images-post/3.jpg","images-post/4.jpg","images-post/5.jpg"]
  },
  
  
];


const newsContainer = document.getElementById("news-container");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDate = document.getElementById("popup-date");
const popupAuthor = document.getElementById("popup-author");
const popupContent = document.getElementById("popup-content");
const popupImages = document.getElementById("popup-images");
const closeButton = document.querySelector(".close-button");
const loadingText = document.getElementById("loading-text");

newsData.forEach(item => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");

  const img = document.createElement("img");
  img.src = item.images[0];
  newsItem.appendChild(img);

  const titleElement = document.createElement("h3");
  titleElement.textContent = item.title +" - " + item.date;
  newsItem.appendChild(titleElement);


  const contentElement = document.createElement("p");
  contentElement.textContent = item.content.slice(0, 100) + "..."; // Show the first 100 characters of the content
  newsItem.appendChild(contentElement);

  newsItem.addEventListener("click", () => showPopup(item));
  newsContainer.appendChild(newsItem);
});

function showPopup(item) {
  loadingText.style.display = "block";
  setTimeout(() => {
    popup.style.display = "block";
    popupTitle.textContent = item.title;
    popupDate.textContent = item.date;
    popupAuthor.textContent = item.author;
    popupContent.textContent = item.content;

    popupImages.innerHTML = "";
    item.images.forEach(imageUrl => {
      const img = document.createElement("img");
      img.src = imageUrl;
      popupImages.appendChild(img);
    });

    loadingText.style.display = "none";
  }, 2000); // Show loading text for 2 seconds
}

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});


// Course
const courses = [
  {
    title: "វគ្គសិក្សា វិទ្យាសាស្រ្ដកុំព្យូទ័រ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_5Qo9VcOWVp0BA0GhynQougAPh7bVafVWg&s",
    description: "វគ្គនេះផ្ដល់ជូនអ្នកសិក្សាអំពីជំនាញយ៉ាងសកម្មដល់សាលា និងសហគមន៍សូមអរគុណ។"
  },
  {
    title: "វគ្គនឹងក្លាយជាសេដ្ឋី",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_5Qo9VcOWVp0BA0GhynQougAPh7bVafVWg&s",
    description: "ធ្វើយ៉ាងណាឱ្យអ្នកក្លាយជាសេដ្ឋដូចក្ដីប្រាថ្នា និងមានបានយ៉ាងមានប្រសិទ្ធិភាពបំផុត។"
  },
  {
    title: "វគ្គភាសាបរទេស",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_5Qo9VcOWVp0BA0GhynQougAPh7bVafVWg&s",
    description: "បន្ថែមឱ្យអ្នកមានជំនាញភាសាយ៉ាងខ្លាំង"
  }
];

function showCourseDetails(index) {
  const popup = document.getElementById("course-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImage = document.getElementById("popup-image");
  const popupDescription = document.getElementById("popup-description");

  popupTitle.textContent = courses[index].title;
  popupImage.src = courses[index].image;
  popupDescription.textContent = courses[index].description;

  popup.style.display = "block";
}

function closeCourseDetails() {
  const popup = document.getElementById("course-popup");
  popup.style.display = "none";
}

