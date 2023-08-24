export interface NavigationItem {
  label: string;
  route: string;
  hidden?: boolean;
}

export interface NavigationOptions {
  responsiveBreakpoint?: number;
  maxInnerWidth?: number;
}
