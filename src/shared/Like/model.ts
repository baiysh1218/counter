export type LikeProp = {
  onClick?: () => void;
  children?: React.ReactNode;
  style?: { [key: string]: string };
  size: "small" | "medium";
};
