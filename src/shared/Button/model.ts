export type ButtonProp = {
  children: React.ReactNode;
  style?: { [key: string]: string };
  size?: "small" | "medium";
  disabled?: true;
  onClick?: () => void;
  cart?: boolean;
  increment?: () => void;
  decrement?: () => void;
  counter?: number;
};
