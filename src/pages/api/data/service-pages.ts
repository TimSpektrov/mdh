import auditImg from '@img/advantages/audit.jpg';
import img11 from '@img/promo-mat/1-1.jpg';
import img12 from '@img/promo-mat/1-2.jpg';
import img21 from '@img/promo-mat/2-1.jpg';
import img22 from '@img/promo-mat/2-2.jpg';
import img32 from '@img/promo-mat/3-2.jpg';
import img41 from '@img/promo-mat/4-1.jpg';
import img42 from '@img/promo-mat/4-2.jpg';
import img51 from '@img/promo-mat/5-1.jpg';
import img52 from '@img/promo-mat/5-2.jpg';
import img61 from '@img/promo-mat/6-1.jpg';
import img62 from '@img/promo-mat/6-2.jpg';
import img72 from '@img/promo-mat/7-2.jpg';
import img82 from '@img/promo-mat/8-2.jpg';
import structureImg from '@img/identity/structure.png';
import img31 from '@/components/blocks/sections/WorksList/assets/img/no-code/3-1.jpg';
import Poster from '@img/advantages/redesign.jpg';

const DesignPromoMaterials = {
  meta: {
    title: '',
    description: '',
  },
  hero: {
    title: 'дизайн промо-<br>материалов',
    description: '<span>Создадим</span>  целостный визуальный образ вашего бренда: от дизайна визиток до оформления социальных сетей.  <span>Поможем</span>  пользователям запомнить и полюбить ваш продукт.',
  },
  advantages: {
    image: {
      url: auditImg,
      alt: 'ПРОВОДИМ, ПОДГОТВАЛИВАЕМ, СОЗДАЕМ',
    },
    items: [
      {
        id: 1,
        title: 'ПРОВОДИМ',
        description: 'интервью, изучаем ваш брендбук и требования к стилю, шрифтам, контенту',
      },
      {
        id: 2,
        title: 'ПОДГОТВАЛИВАЕМ',
        description: 'материалы к печати, учитывая особенности продукта и требования типографии',
      },
      {
        id: 3,
        title: 'СОЗДАЕМ',
        description: 'дизайн нужных элементов и материалов в рамках вашего корпоративного стиля',
      },
    ]
  },
  workList: {
    title: 'Оформляем графические и печатные материалы',
    items: [
      {
        id: 1,
        title: 'Визитки',
        img1: img11,
        img2: img12,
      },
      {
        id: 2,
        title: 'Постеры',
        img1: img21,
        img2: img22,
      },
      {
        id: 3,
        title: 'Блокноты',
        img2: img32,
      },
      {
        id: 4,
        title: 'Фирменные бланки',
        img1: img41,
        img2: img42,
      },
      {
        id: 5,
        title: 'Конверты',
        img1: img51,
        img2: img52,
      },
      {
        id: 6,
        title: 'Презентации для пользователей',
        img1: img61,
        img2: img62,
      },
      {
        id: 7,
        title: 'Видео-ролики и презентации для инвесторов',
        img2: img72,
      },
      {
        id: 8,
        title: 'Профиль бизнеса в социальных сетях',
        img2: img82,
      },
    ],
  },
  work: {
    items: [
      {
        id: '30',
        title: 'PaySwap',
        desc: 'Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Сайт'
          },
          {
            id: '2',
            name: 'Айдентика'
          }
        ],
        image: 'payswap-2.png',
        light: true,
        showHome: true,
        showAbout: true,
        showIdentity: true,
        showDesign: true,
        published: false,
        slug: 'payswap'
      },
      {
        id: '80',
        title: 'Профсоюз работников АДА',
        desc: 'Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'profsoyuz-rabotnikov-ada.png',
        light: false,
        showHome: true,
        showIdentity: true,
        published: true,
        slug: 'profsoyuz-rabotnikov-ada'
      },
      {
        id: '60',
        title: 'Skringo',
        desc: 'Российский стартап, который связывает продавцов и покупателей на рынке товаров премиального сегмента.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'skringo.png',
        light: false,
        showHome: true,
        showAbout: true,
        showDesign: true,
        published: false,
        slug: 'skringo'
      },
      {
        id: '70',
        title: 'Open Teleport',
        desc: 'Первый в мире крупный маркетплейс, специализирующийся на аренде и продаже спутников и телепортов.',
        tags: [
          {
            id: '0',
            name: 'Сайт'
          }
        ],
        image: 'open-teleport.jpg',
        light: true,
        published: false,
        slug: 'open-teleport'
      },
    ],
  }
}

const Identity = {
  meta: {
    title: 'Разработка логотипа и фирменного стиля - заказать создание брендбука, цены студии MDH',
    description: 'Создадим целостный визуальный образ вашей компании от логотипа до полноценного брендбука. Разрабатываем фирменный стиль, логотип и другие элементы айдентики. Повышаем узнаваемость бренда.',
  },
  hero: {
    title: 'Айдентика',
    description: 'Транслируем ваши ценности через <span>визуальный стиль</span>',
    items: [
      'Исследуем рынок, конкурентов, специфику бизнеса.',
      'Создаем целостный визуальный образ вашей компании.',
      'Разрабатываем фирменный стиль, логотип и другие элементы айдентики.',
      'Повышаем узнаваемость бренда.',
    ]
  },
  structure: {
    title: 'Что входит в <span>айдентику',
    image: structureImg.src,
    items: [
      {
        id: 1,
        title: 'Логотип',
        description: 'Сформируем яркий имидж бренда в глазах вашей аудитории'
      },
      {
        id: 2,
        title: 'Фирменный стиль',
        description: 'Поможем вашему бренду выделиться среди конкурентов'
      },
      {
        id: 3,
        title: 'Руководство по использованию',
        description: 'Создадим подробную инструкцию, как правильно использовать логотип, сочетать фирменные цвета, шрифты и другие элементы стиля'
      },
    ],
  },
  complex: {
    text: 'Используем комплексный подход для достижения ваших <span>целей</span>',
    items: [
      {
        id: 1,
        name: 'АКТУАЛЬНАЯ',
        desc: 'красивая и коммерчески успешная айдентика',
        column: 1,
      },
      {
        id: 2,
        name: '100% уникальность',
        desc: 'разработанных элементов айдентики',
        column: 2
      },
      {
        id: 3,
        name: 'Показываем на примерах',
        desc: 'как использовать и сочетать все элементы',
        column: 1
      },
    ]
  },
  tariff: {
    title: '<span>Делаем всё,</span> чтобы продукт стал частью жизни пользователей',
    description: 'Для проекта мы собираем команду специалистов на каждый этап работы. Вам не нужно тратить время и ресурсы для дополнительного поиска сотрудников. Наша команда полностью покроет весь список задач по проекту.',
    rates: [
      {
        id: 0,
        uniqueId: '9',
        name: 'Лайт',
        desc: 'Для тех, кому нужно быстрое решение',
        price: 60000,
        popular: false,
        term: '5 дней',
        volume: '10-15 страниц брендбука',
        structure: [
          {
            id: '0',
            name: 'Логотип (1 вариант)',
            locked: false
          },
          {
            id: '1',
            name: 'Фирменный цвет',
            locked: false
          },
          {
            id: '2',
            name: 'Фирменный шрифт',
            locked: false
          },
          {
            id: '3',
            name: 'Примеры использования на носителях',
            locked: false
          },
          {
            id: '4',
            name: 'Фирменная графика',
            locked: true
          },
          {
            id: '5',
            name: 'Индивидуальное руководство по использованию фирменного стиля и элементов айдентики.',
            locked: true
          }
        ]
      },
      {
        id: 1,
        uniqueId: '10',
        name: 'Стандарт',
        desc: 'Разработка фирменной айдентики',
        price: 120000,
        popular: true,
        term: '14 дней',
        volume: '25-30 страниц брендбука',
        structure: [
          {
            id: '0',
            name: 'Логотип (до 3- х вариантов)',
            locked: false
          },
          {
            id: '1',
            name: 'Фирменная цветовая палитра',
            locked: false
          },
          {
            id: '2',
            name: 'Набор фирменных шрифтов',
            locked: false
          },
          {
            id: '3',
            name: 'Примеры использования на носителях',
            locked: false
          },
          {
            id: '4',
            name: 'Фирменная графика',
            locked: true
          },
          {
            id: '5',
            name: 'Индивидуальное руководство по использованию фирменного стиля и элементов айдентики.',
            locked: true
          }
        ]
      },
      {
        id: 2,
        uniqueId: "11",
        name: "Премиум",
        desc: "Целостный визуальный образ бренда",
        price: 200000,
        popular: false,
        term: "35 дней",
        volume: "50-60 страниц брендбука",
        structure: [
          {
            id: "0",
            name: "Логотип (до 3- х вариантов + комментарии)",
            locked: false
          },
          {
            id: "1",
            name: "Фирменная цветовая палитра",
            locked: false
          },
          {
            id: "2",
            name: "Набор фирменных шрифтов",
            locked: false
          },
          {
            id: "3",
            name: "Примеры использования на носителях",
            locked: false
          },
          {
            id: "4",
            name: "Фирменная графика",
            locked: false
          },
          {
            id: "5",
            name: "Индивидуальное руководство по использованию фирменного стиля и элементов айдентики.",
            locked: false
          }
        ]
      }
    ],
  },
  workList: {
    dark: true,
    items: [
      {
        "id": "30",
        "title": "PaySwap",
        "desc": "Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.",
        "tags": [
          {
            "id": "0",
            "name": "Приложение"
          },
          {
            "id": "1",
            "name": "Сайт"
          },
          {
            "id": "2",
            "name": "Айдентика"
          }
        ],
        "image": "payswap-new.webp",
        "light": true,
        "showHome": true,
        "showAbout": false,
        "showIdentity": true,
        "showDesign": true,
        "published": false,
        "slug": "payswap"
      },
      {
        "id": "80",
        "title": "Профсоюз работников АДА",
        "desc": "Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.",
        "tags": [
          {
            "id": "0",
            "name": "Приложение"
          },
          {
            "id": "1",
            "name": "Айдентика"
          }
        ],
        "image": "profsoyuz-rabotnikov-ada.webp",
        "light": false,
        "showHome": true,
        "showIdentity": true,
        "published": false,
        "slug": "profsoyuz-rabotnikov-ada"
      },
      {
        "id": "100",
        "title": "ERP-система социальной службы",
        "desc": "Система, которая позволяет хранить данные о сотрудниках и клиентах, планировать трудовой график и учитывать отработанное время.",
        "tags": [
          {
            "id": "0",
            "name": "Приложение"
          },
          {
            "id": "1",
            "name": "Айдентика"
          }
        ],
        "image": "epr-sistema-socialnoj-sluzhby.webp",
        "light": false,
        "showAbout": true,
        "showIdentity": true,
        "showDesign": true,
        "published": false,
        "slug": "erp-sistema-socialnoj-sluzhby"
      }
    ],
  }
}

const NoCode = {
  meta: {
    title: 'No code разработка приложений и сайтов - заказать приложение без написания кода в  MDH',
    description: 'Разработаем приложение или сайт для быстрого запуска с помощью No-code инструментов. Закажите разработку сайтов и приложений без программного кода. Звоните: +7 (926) 187 25 73.',
  },
  hero: {
    title: 'no-code<br>Разработка',
    description: '<span>Создадим</span>  сайт в сжатые сроки без программного кода, используя инструменты no-code разработки.  <span>Идеальное</span>  решение  для запуска MVP или полноценного продукта с базовым функционалом. ',
  },
  workList: {
    title: 'Создаем сайты различной сложности',
    items: [
      {
        id: 1,
        title: 'Лендинги',
        img1: img11,
        img2: img12,
      },
      {
        id: 2,
        title: 'Корпоративные сайты',
        img1: img21,
        img2: img22,
      },
      {
        id: 3,
        title: 'Многостраничные сайты',
        img1: img31,
        img2: img32,
      },
      {
        id: 4,
        title: 'Магазины',
        img1: img41,
        img2: img42,
      },
    ]
  },
  stages: {
    title: '4 шага — и ваш сайт готов',
    items: [
      {
        id: 1,
        title: 'Брифинг',
        description: 'Проводим интервью, знакомимся с брендом, собираем технические требования',
      },
      {
        id: 2,
        title: 'Получение макетов',
        description: 'Получаем дизайн-макеты и верстаем сайт на no-code площадке',
      },
      {
        id: 3,
        title: 'Создание сайта',
        description: 'Верстаем сайт на no-code площадке. Добавляем разделы и другие базовые функции',
      },
      {
        id: 4,
        title: 'Презентация сайта',
        description: 'Вносим финальные коррективы по собранному сайту и сдаем готовую работу в оговоренный срок',
      },
    ]
  },
  work: {
    items: [
      {
        id: '30',
        title: 'PaySwap',
        desc: 'Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Сайт'
          },
          {
            id: '2',
            name: 'Айдентика'
          }
        ],
        image: 'payswap-2.png',
        light: true,
        showHome: true,
        showAbout: true,
        showIdentity: true,
        showDesign: true,
        published: false,
        slug: 'payswap'
      },
      {
        id: '80',
        title: 'Профсоюз работников АДА',
        desc: 'Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'profsoyuz-rabotnikov-ada.png',
        light: false,
        showHome: true,
        showIdentity: true,
        published: true,
        slug: 'profsoyuz-rabotnikov-ada'
      },
      {
        id: '60',
        title: 'Skringo',
        desc: 'Российский стартап, который связывает продавцов и покупателей на рынке товаров премиального сегмента.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'skringo.png',
        light: false,
        showHome: true,
        showAbout: true,
        showDesign: true,
        published: false,
        slug: 'skringo'
      },
      {
        id: '70',
        title: 'Open Teleport',
        desc: 'Первый в мире крупный маркетплейс, специализирующийся на аренде и продаже спутников и телепортов.',
        tags: [
          {
            id: '0',
            name: 'Сайт'
          }
        ],
        image: 'open-teleport.jpg',
        light: true,
        published: false,
        slug: 'open-teleport'
      },
    ]
  },
}

const ReDesign = {
  meta: {
    title: '',
    description: '',
  },
  hero: {
    title: 'Редизайн',
    description: '<span>Обновим</span>  дизайн, стиль коммуникации и функционал продукта. <span>Внедрим</span>  новые механики взаимодействия с аудиторией.  <span>Поможем</span> бренду выделиться, а бизнесу — масштабироваться.',
  },
  advantages: {
    video: {
      url: '/assets/video/cases.mp4',
      poster_url: Poster.src,
    },
    items: [
      {
        id: 1,
        title: 'Дизайн',
        description: 'Создадим новый стиль, который привлечет пользователей и выделит вас на фоне конкурентов'
      },
      {
        id: 2,
        title: 'Юзабилити',
        description: 'Перестроим логику продукта, чтобы пользователи могли быстро найти нужную информацию',
      },
      {
        id: 3,
        title: 'Функционал',
        description: 'Внедрим новые опции, адаптируем проект под меняющиеся запросы рынка и пользователей',
      },
    ],
  },
  stages: {
    items: [
      {
        id: 1,
        title: 'Работаем',
        description: 'в рамках вашего фирменного стиля, сохраняя привычные пользователям элементы',
      },
      {
        id: 2,
        title: 'Исследуем',
        description: 'продукт, находим недоработки и предлагаем новые дизайн-решения',
      },
      {
        id: 3,
        title: 'Изучаем',
        description: 'потребности и поведение пользователей, плавно модифицируем ваш продукт',
      },
      {
        id: 4,
        title: 'Предложим',
        description: 'подходящие технические решения, чтобы оптимизировать работу сайта или приложения',
      },
    ],
  },
  feedback: {
    title: '<span>Предложим</span>  новые идеи и решения для редизайна вашего продукта'
  },
  work: {
    items: [
      {
        id: '30',
        title: 'PaySwap',
        desc: 'Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Сайт'
          },
          {
            id: '2',
            name: 'Айдентика'
          }
        ],
        image: 'payswap-2.png',
        light: true,
        showHome: true,
        showAbout: true,
        showIdentity: true,
        showDesign: true,
        published: false,
        slug: 'payswap'
      },
      {
        id: '80',
        title: 'Профсоюз работников АДА',
        desc: 'Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'profsoyuz-rabotnikov-ada.png',
        light: false,
        showHome: true,
        showIdentity: true,
        published: true,
        slug: 'profsoyuz-rabotnikov-ada'
      },
      {
        id: '60',
        title: 'Skringo',
        desc: 'Российский стартап, который связывает продавцов и покупателей на рынке товаров премиального сегмента.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'skringo.png',
        light: false,
        showHome: true,
        showAbout: true,
        showDesign: true,
        published: false,
        slug: 'skringo'
      },
      {
        id: '70',
        title: 'Open Teleport',
        desc: 'Первый в мире крупный маркетплейс, специализирующийся на аренде и продаже спутников и телепортов.',
        tags: [
          {
            id: '0',
            name: 'Сайт'
          }
        ],
        image: 'open-teleport.jpg',
        light: true,
        published: false,
        slug: 'open-teleport'
      },
    ]
  },
}

const UxAudit = {
  meta: {
    title: '',
    description: '',
  },
  hero: {
    title: 'UX-аудит',
    description: '<span>Проводим</span>  аудит вашего мобильного приложения или сайта. <span>Анализируем</span>  скорость и отказоустойчивость, удобство навигации и отзывчивость интерфейса.  <span>Предоставляем</span>  экспертные рекомендации для улучшения пользовательского опыта.',
  },
  advantages: {
    image: {
      url: auditImg,
      alt: 'Иссдледуем, Анализируем, выявляем',
    },
    items: [
      {
        id: 1,
        title: 'Исследуем',
        description: 'бизнес, проводим базовый или глубинный анализ рынка и конкурентов'
      },
      {
        id: 2,
        title: 'Анализируем',
        description: 'предоставленные вами данные: показатели, метрики и статистику',
      },
      {
        id: 3,
        title: 'Выявляем',
        description: 'проблемные зоны в интерфейсе и формируем гипотезы для их устранения',
      },
    ]
  },
  stages: {
    title: 'Как проходит UX-аудит',
    items: [
      {
        id: 1,
        title: 'Брифинг',
        description: '<ul><li>Определяем цель и задачи проекта </li><li>Изучаем рынок, внутренние процессы и возможности бизнеса</li><li>Погружаемся в проблему и ограничения продукта</li></ul>'
      },
      {
        id: 2,
        title: 'Аналитическое исследование',
        description: '<ul><li>Анализируем поле конкурентов и отбираем наиболее релевантных </li><li>Анализируем текущее состояние вашего продукта</li><li>Исследуем аудиторию и ключевые метрики </li><li>Анализируем почему логика продукта выстроена именно так, а не иначе</li></ul>'
      },
      {
        id: 3,
        title: 'Аудит и формирование гипотез',
        description: '<ul><li>Ищем узкие места в юзерфлоу </li><li>Проверяем интерфейс на соответствие запроса аудитории и бизнеса </li><li>Выстраиваем гипотезы о вариантах улучшения пользовательского опыта</li></ul>'
      },
      {
        id: 4,
        title: 'Проектирование',
        description: 'Иллюстрируем гипотезы прототипами интерфейсов в множестве вариаций',
      },
      {
        id: 5,
        title: 'Отчетность и презентация',
        description: '<ul><li>Формируем документацию отчета </li><li>Презентуем отчет на встрече с вами</li></ul>'
      },
    ]
  },
  work: {
    items: [
      {
        id: '30',
        title: 'PaySwap',
        desc: 'Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Сайт'
          },
          {
            id: '2',
            name: 'Айдентика'
          }
        ],
        image: 'payswap-2.png',
        light: true,
        showHome: true,
        showAbout: true,
        showIdentity: true,
        showDesign: true,
        published: false,
        slug: 'payswap'
      },
      {
        id: '80',
        title: 'Профсоюз работников АДА',
        desc: 'Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'profsoyuz-rabotnikov-ada.png',
        light: false,
        showHome: true,
        showIdentity: true,
        published: true,
        slug: 'profsoyuz-rabotnikov-ada'
      },
      {
        id: '60',
        title: 'Skringo',
        desc: 'Российский стартап, который связывает продавцов и покупателей на рынке товаров премиального сегмента.',
        tags: [
          {
            id: '0',
            name: 'Приложение'
          },
          {
            id: '1',
            name: 'Айдентика'
          }
        ],
        image: 'skringo.png',
        light: false,
        showHome: true,
        showAbout: true,
        showDesign: true,
        published: false,
        slug: 'skringo'
      },
      {
        id: '70',
        title: 'Open Teleport',
        desc: 'Первый в мире крупный маркетплейс, специализирующийся на аренде и продаже спутников и телепортов.',
        tags: [
          {
            id: '0',
            name: 'Сайт'
          }
        ],
        image: 'open-teleport.jpg',
        light: true,
        published: false,
        slug: 'open-teleport'
      },
    ]
  },
}