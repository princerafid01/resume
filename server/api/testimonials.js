import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Syed Tousiful Haque',
      content: {
        en: 'I have been working with Mahmud Rafid for the last year and found him to be a great team player. He is well versed in using Laravel and Vue frameworks and has in-depth knowledge of their working process. He is an astute problem solver; he helped me solve several problems. He is always open to learning and can quickly adapt to any change. For example, I remember we had to change our frontend framework from Vue to React, and Rafid learned the framework very quickly and started contributing to our project.',
        tr: 'Richard kurumsal bir kimlik yaratmak için işe alındı. Yapılan işten çok memnun kaldık. Çok fazla tecrübesi var ve müşterinin ihtiyaçları konusunda çok endişeli. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut workels dolore magnarels alia.',
      },
      image: '/images/avatar-1.png',
    },
  ]
})
