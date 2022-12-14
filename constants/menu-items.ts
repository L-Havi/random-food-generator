import React from "react";
import { Dashboard, OutdoorGrill, RamenDining } from "@styled-icons/material";

import {
  Food,
  FoodToast,
  FoodPizza,
  FoodGrains,
  Info,
  DrinkMargarita,
} from "@styled-icons/fluentui-system-regular";

import { Sushi } from "@styled-icons/crypto";

import { Dice } from "@styled-icons/fa-solid";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Main Menu",
    icon: Dashboard,
    url: "/",
  },
  {
    name: "Roll for...",
    icon: Dice,
    url: "/roll-a-food",
    subItems: [
      {
        name: "BBQ",
        icon: OutdoorGrill,
        url: "/bbq",
      },
      {
        name: "Cocktail",
        icon: DrinkMargarita,
        url: "/cocktail",
      },
      {
        name: "Pasta",
        icon: FoodGrains,
        url: "/pasta",
      },
      {
        name: "Pizza",
        icon: FoodPizza,
        url: "/pizza",
      },
      {
        name: "Ramen",
        icon: RamenDining,
        url: "/ramen",
      },
      {
        name: "Sandwich",
        icon: FoodToast,
        url: "/sandwich",
      },
      {
        name: "Sushi",
        icon: Sushi,
        url: "/sushi",
      },
    ],
  },
  {
    name: "About",
    icon: Info,
    url: "/about",
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
