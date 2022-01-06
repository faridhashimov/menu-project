const btn = document.querySelector('.btn-wrapper'),
  sectionCenter = document.querySelector('.section-center');

const menu = [
  {
    id: 1,
    meal: 'breakfast',
    title: 'Buttermilk Pancakes',
    content:
      'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
    price: '$ 15.99',
    src: './img/item-1.jpeg',
  },
  {
    id: 2,
    meal: 'lunch',
    title: 'Diner Double',
    content:
      'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
    price: '$ 13.99',
    src: './img/item-2.jpeg',
  },
  {
    id: 3,
    meal: 'shakes',
    title: 'Godzilla Milkshake',
    content:
      'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    price: '$ 6.99',
    src: './img/item-3.jpeg',
  },
  {
    id: 4,
    meal: 'breakfast',
    title: 'Country Delight',
    content:
      'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.',
    price: '$ 20.99',
    src: './img/item-4.jpeg',
  },
  {
    id: 5,
    meal: 'lunch',
    title: 'Egg Attack',
    content:
      'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90"s pop-up',
    price: '$ 22.99',
    src: './img/item-5.jpeg',
  },
  {
    id: 6,
    meal: 'shakes',
    title: 'Oreo Dream',
    content:
      'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
    price: '$ 18.99',
    src: './img/item-6.jpeg',
  },
  {
    id: 7,
    meal: 'breakfast',
    title: 'Bacon Overflow',
    content:
      'Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
    price: '$ 8.99',
    src: './img/item-7.jpeg',
  },
  {
    id: 8,
    meal: 'lunch',
    title: 'American Classic',
    content:
      'On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    price: '$ 12.99',
    src: './img/item-8.jpeg',
  },
  {
    id: 9,
    meal: 'shakes',
    title: 'Quarantine Buddy',
    content:
      'Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    price: '$ 16.99',
    src: './img/item-9.jpeg',
  },
  {
    id: 10,
    meal: 'dinner',
    title: 'Steak Dinner',
    content:
      'Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    price: '$ 39.99',
    src: './img/item-10.jpeg',
  },
];

function createMenu(meal) {
  if (meal === 'all') {
    menu.forEach((item) => addElements(item));
  } else {
    menu
      .filter((item) => item.meal === `${meal}`)
      .forEach((item) => addElements(item));
  }
}

function addElements(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = `
  <div class="item__image">
      <img src="${item.src}" alt="">
  </div>
  <div class="item__info">
      <header class="info__header">
          <h4 class="item__title">${item.title}</h4>
          <h4 class="item__price">${item.price}</h4>
      </header>
      <div class="info__content">
          <p>${item.content}</p>
      </div>
  </div>
`;
  sectionCenter.appendChild(menuItem);
}

btn.addEventListener('click', (e) => {
  sectionCenter.innerHTML = ` `;
  let menuItem = e.target.classList[1];
  createMenu(`${menuItem}`);
});
