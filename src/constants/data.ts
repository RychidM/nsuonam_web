import images from './images';

const cediSymbol  = '\u20B5';

const starters = [
  {
    title: 'Chilli Crab Crust',
    price: `${cediSymbol} 187`,
    tags: 'Contains Shellfish',
  },
  {
    title: 'Guinea Fowl Balls',
    price: `${cediSymbol} 140`,
    tags: 'No Shellfish',
  },
  {
    title: 'Popcorn Shrimps',
    price: `${cediSymbol} 176`,
    tags: 'Contains Shellfish',
  },
  {
    title: 'Smoked Shark Quiche',
    price: `${cediSymbol} 176`,
    tags: 'No Shellfish',
  },
  {
    title: 'Crispy Calamari',
    price: `${cediSymbol} 165`,
    tags: 'Contains Shellfish',
  },
];

const gelatoes = [
  {
    title: 'Tiger Nuts Treats',
    price:  `${cediSymbol} 200`,
    tags: '3 scoops served with plantain churros',
  },
  {
    title: "Sassy Hibiscus & Chilli",
    price: `${cediSymbol} 200`,
    tags: ' 3scoops served with chocolate cookies',
  },
  {
    title: 'Palm Wine Bliss',
    price: `${cediSymbol} 200`,
    tags: '3 scoops served with roasted mango',
  },
  {
    title: 'Sweetcorn Delights',
    price: `${cediSymbol} 200`,
    tags: '3 scoops served with palm nut tuiles',
  },
  {
    title: 'Chocolate Brownie',
    price: `${cediSymbol} 132`,
    tags: 'Ashanti dark chocolate brownie | candied fruits | Madagascar vanilla custard',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { starters, gelatoes, awards };
