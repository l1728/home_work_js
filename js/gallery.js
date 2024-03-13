const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


// Вибираємо контейнер для галереї
const galleryContainer = document.querySelector('ul.gallery');


// Генеруємо розмітку для кожного елемента галереї та додаємо до контейнера
const galleryItemsMarkup = images
    .map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
  </li>`)
    .join('');

// Додаємо розмітку елементів галереї до контейнера
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);


// Забороняє стандартну поведінку посилання (тобто завантаження зображення), коли воно клікнуте
const galleryLinks = document.querySelectorAll('.gallery-link');
galleryLinks.forEach(link => {  // Метод forEach використовується в даному випадку для перебору кожного посилання в колекції galleryLinks та застосовує обробник подій (функцію зворотного виклику), яка забороняє стандартну поведінку посилань при їх кліку.
    link.addEventListener('click', function (event) {
        event.preventDefault();
    });
});


// Делегування
// Отримаємо посилання на ul елемент галереї.
// Додаємо обробник подій для кліка на ul елементі.
// У функції обробника подій перевіряємо, чи було клікнуто на елемент галереї (елемент з класом "gallery-link").
// Якщо так, ми отримуємо посилання на велике зображення з дата-атрибуту data-source та робимо потрібні дії з цим посиланням (наприклад, виводимо в консоль).

// Отримуємо посилання на ul елемент галереї (вже є)
// Додаємо обробник подій для кліка на ul елементі
galleryContainer.addEventListener('click', function(event) {
    // Перевіряємо, чи було клікнуто на елемент галереї (елемент з класом "gallery-link")
    if (event.target.classList.contains("gallery-link")) {
        // Отримуємо посилання на велике зображення з дата-атрибуту data-source
      const largeImageSrc = event.target.dataset.sourse;
      console.log(largeImageSrc);
        
        // Робимо потрібні дії з посиланням на велике зображення
        console.log('Посилання на велике зображення:', largeImageSrc);
    }
});
