import { useState } from "react";

export function helper(data: Array<any>) {
  const sections: { [key: string]: any[] } = {};

  for (const item of data) {
    const brand = item.brand;

    if (!sections[brand]) {
      sections[brand] = [];
    }
    sections[brand].push(item);
  }
  const sectionsArray = Object.keys(sections).map((brand) => ({
    name: brand,
    items: sections[brand],
  }));

  return sectionsArray;
}
