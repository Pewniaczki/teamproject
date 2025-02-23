import React from 'react';

export type NavbarItemType = {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
  link: string;
  onClick?: () => void;
};
