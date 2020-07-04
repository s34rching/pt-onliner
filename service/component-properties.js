module.exports = {
  list: {
    sections: {
      catalog: { title: 'Каталог' },
      offers: { title: 'Объявления' },
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
  search: {
    nothingFound: 'Ничего не найдено',
  },
};
