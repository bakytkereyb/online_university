export interface Page {
  name: string;
  href: string;
  description?: string;
}

// Константы для каждой ссылки
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  FACULTIES: '/faculties',
  COURSES: '/courses',
  TEACHERS: '/teachers',
  STUDENTS: '/students',
  LIBRARY: '/library',
  SCHEDULE: '/schedule',
  NEWS: '/news',
  ADMISSION: '/admission',
  CONTACTS: '/contacts',
  PROFILE: '/profile'
} as const;

// Константы для категорий страниц
export const MAIN_MENU_PAGES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.COURSES,
  ROUTES.TEACHERS,
  ROUTES.CONTACTS
] as const;

export const USER_PAGES = [
  ROUTES.STUDENTS,
  ROUTES.LIBRARY,
  ROUTES.SCHEDULE,
  ROUTES.PROFILE
] as const;

export const PAGES: Page[] = [
  {
    name: 'Главная',
    href: ROUTES.HOME,
    description: 'Главная страница университета'
  },
  {
    name: 'О нас',
    href: ROUTES.ABOUT,
    description: 'Информация об университете'
  },
  {
    name: 'Факультеты',
    href: ROUTES.FACULTIES,
    description: 'Список факультетов и специальностей'
  },
  {
    name: 'Курсы',
    href: ROUTES.COURSES,
    description: 'Доступные онлайн курсы'
  },
  {
    name: 'Преподаватели',
    href: ROUTES.TEACHERS,
    description: 'Профили преподавателей'
  },
  {
    name: 'Студенты',
    href: ROUTES.STUDENTS,
    description: 'Студенческий портал'
  },
  {
    name: 'Библиотека',
    href: ROUTES.LIBRARY,
    description: 'Электронная библиотека'
  },
  {
    name: 'Расписание',
    href: ROUTES.SCHEDULE,
    description: 'Расписание занятий'
  },
  {
    name: 'Новости',
    href: ROUTES.NEWS,
    description: 'Университетские новости и объявления'
  },
  {
    name: 'Поступление',
    href: ROUTES.ADMISSION,
    description: 'Информация о поступлении'
  },
  {
    name: 'Контакты',
    href: ROUTES.CONTACTS,
    description: 'Контактная информация'
  },
  {
    name: 'Личный кабинет',
    href: ROUTES.PROFILE,
    description: 'Личный кабинет пользователя'
  }
];

// Утилитарные функции для работы со страницами
export const getPageByHref = (href: string): Page | undefined => {
  return PAGES.find(page => page.href === href);
};

export const getPagesByCategory = (category: string): Page[] => {
  // Можно расширить в будущем для категоризации страниц
  return PAGES;
};

export const getMainMenuPages = (): Page[] => {
  // Основные страницы для главного меню
  return PAGES.filter(page => MAIN_MENU_PAGES.includes(page.href as any));
};

export const getUserPages = (): Page[] => {
  // Страницы для авторизованных пользователей
  return PAGES.filter(page => USER_PAGES.includes(page.href as any));
}; 