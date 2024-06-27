import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Actualités",
    path: "/actualites",
    newTab: false,
  },
  {
    id: 2,
    title: "Le club",
    path: "/le-club",
    newTab: false,
  },
  {
    id: 33,
    title: "Boutique",
    path: "/boutique",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/support",
    newTab: false,
  },
  {
    id: 4,
    title: "Masculin",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Sénior",
        path: "/masculin/senior",
        newTab: false,
      },
      {
        id: 42,
        title: "U 20",
        path: "/masculin/u-20",
        newTab: false,
      },
      {
        id: 43,
        title: "U 17",
        path: "/masculin/u-17",
        newTab: false,
      },
      {
        id: 44,
        title: "U 15",
        path: "/masculin/u-15",
        newTab: false,
      }
    ],
  },
  {
    id: 5,
    title: "Médias",
    path: "/medias",
    newTab: false,
  },
];
export default menuData;
