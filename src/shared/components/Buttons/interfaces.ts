export type ButtonInterface = {
  text?: string;
  iconName?: string;
  isActive?: boolean;
  size?: 1 | 2 | 3 | 4 | 5;
  a11yLabel: string;
  a11yHint: string;
  onPressHandler: () => void;
  onLongPressHandler?: () => void;
  onPressOutHandler?: () => void;
};
