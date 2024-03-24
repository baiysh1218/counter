import { Dispatch, SetStateAction } from "react";

export type cartContextValues = {
  counter: number;
  toggleChange: boolean;
  totalCount: number;
  increment: () => void;
  decrement: () => void;
  setToggleChange: Dispatch<SetStateAction<boolean>>;
  addToCart: () => void;
  handleToggleChange: (toggle: boolean) => void;
  cartTotalCount: (counterValue: number) => void;
};
export type CartContextProp = {
  children: React.ReactNode;
};
