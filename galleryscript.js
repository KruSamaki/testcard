const imageData = [
    {
      src: "images-post/p05.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/p6.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/9.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/p7.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/p5.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/k1.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/k2.jpg",
      caption: "2024",
      year: "2024"
    },
    {
      src: "images-post/k3.jpg",
      caption: "2024",
      year: "2024"
    }
  ];

  const gallery = document.querySelector('.gallery');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  const closeButton = document.querySelector('.close-button');
  const saveButton = document.querySelector('.save-button');
  const yearFilter = document.querySelector('#year-filter');

  function renderGallery(filteredImages) {
    gallery.innerHTML = '';

    filteredImages.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.caption;
      img.classList.add('gallery-image');

      const caption = document.createElement('div');
      caption.classList.add('gallery-caption');
      caption.textContent = image.caption;

      galleryItem.appendChild(img);
      galleryItem.appendChild(caption);
      gallery.appendChild(galleryItem);

      galleryItem.addEventListener('click', () => {
        modalContent.src = image.src;
        modal.style.display = 'block';
      });
    });
  }

  function populateYearFilter() {
    const years = new Set(imageData.map(image => image.year));
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });
  }

  yearFilter.addEventListener('change', () => {
    const selectedYear = yearFilter.value;
    const filteredImages = selectedYear === 'all' ? imageData : imageData.filter(image => image.year === selectedYear);
    renderGallery(filteredImages);
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  saveButton.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = modalContent.src;
    downloadLink.download = 'image.jpg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  populateYearFilter();
  renderGallery(imageData);