export interface IMenuTree {
  item?: IMenuItem;
  children: Map<string, IMenuItem>;
}

export interface IUrl {
  uri: string;
  routerLink: string;
  fragment: string;
}

export interface IMenuItem {
  label?: string;
  routerLink: string;
  icon?: string;
  fragment?: string;
  command?: any;
  parent?: string;
  children?: IMenuItem[];
  fragments?: IMenuItem[];
  active?: boolean;
  disabled?: boolean;
}

export type TMenuPosition = 'horizontal' | 'vertical';
