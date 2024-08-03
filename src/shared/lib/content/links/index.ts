export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "+7 777 288 6600", href: "tel:+77772886600" },
];

export const navigation: NavLink[] = [
  { label: "Что такое Джинтропин?", href: "/main" },
  { label: "Q/A", href: "questions" },
  { label: "ПРОВЕРИТЬ ОРИГИНАЛЬНОСТЬ", href: "/legit" },
  { label: "КОНТАКТЫ", href: "/contacts" },
];
