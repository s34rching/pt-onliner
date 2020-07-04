module.exports = {
  list: {
    sections: {
      catalog: { title: 'Каталог' },
      offers: { title: 'Объявления' },
    },
    order: {
      popular: { label: 'популярные' },
      cheap: { label: 'дешевые' },
      expensive: { label: 'дорогие' },
      new: { label: 'новые' },
      reviewed: { label: 'с отзывами' },
    },
    filters: {
      manufacturer: {
        name: 'Производитель',
        options: {
          intel: { name: 'Intel' },
          amd: { name: 'AMD' },
        },
      },
    },
  },
  product: {
    status: {
      active: { serviceName: 'active', label: null },
      outOfStock: { serviceName: 'outOfStock', label: 'Нет в наличии' },
      offSale: { serviceName: 'offSale', label: 'Снят с продажи' },
    },
    sections: {
      description: { title: 'Описание и фото' },
      offers: { title: 'Предложения продавцов' },
      reviews: { title: 'Отзывы покупателей' },
      addUsedOffer: { title: 'Разместить объявление' },
      topics: { title: 'Обсуждение на форуме' },
    },
  },
  shop: {
    workingHours: { label: 'Магазин сегодня работает с' },
  },
  search: {
    nothingFound: 'Ничего не найдено',
  },
};
