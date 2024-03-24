import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContextProp, cartContextValues } from "./model";

export const cartContext = createContext<null | cartContextValues>(null);

export const useCart = () => useContext(cartContext) as cartContextValues;

const CartContextProvider: FC<CartContextProp> = ({ children }) => {
  const [cart, setCart] = useState<{ counter: number }>({ counter: 0 });
  const [counter, setCounter] = useState<number>(1);

  const [toggleChange, setToggleChange] = useState<boolean>(false);

  const [totalCount, setTotalCount] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
  };

  const addToCart = () => {
    setCart(prevCart => {
      cartTotalCount(counter);
      return { counter: counter };
    });
  };

  const handleToggleChange = (toggle: boolean) => {
    const amountToAdd = 12;
    if (toggle) {
      setCounter(12);
      setCart(prevCart => {
        cartTotalCount(12);
        return { counter: 12 };
      });
    } else {
      setCounter(0);
      setCart(prevCart => {
        cartTotalCount(0);
        return { counter: 0 };
      });
    }
  };

  const cartTotalCount = (counterValue: number) => {
    const totalCount = counterValue * 122566;
    setTotalCount(totalCount);
  };

  useEffect(() => {
    cartTotalCount(cart.counter);
  }, [cart.counter]);

  const values = {
    counter,
    toggleChange,
    totalCount,
    increment,
    decrement,
    setToggleChange,
    addToCart,
    handleToggleChange,
    cartTotalCount,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
