export const selectCategoryImage = (catName: string): string => {
  switch (catName) {
    case 'Недвижимость':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_4.png';
    case 'Транспорт':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_1.png';
    case 'Электроника':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_6.png';
    case 'Бытовая техника':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_110.png';
    case 'Личные вещи':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_5.png';
    case 'Для дома и дачи':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_2.png';
    case 'Животные':
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/cat_35.png';
    default:
      return 'https://www.avito.st/s/avito/components/category_tree/28x22/mall.png';
  }
};
