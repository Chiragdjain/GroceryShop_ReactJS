import React, { useState, useContext, useEffect,useCallback } from "react";
import data from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  const clearAll =useCallback( () => {
    setCart([]);
    setItems(0);
  },[])

  const addToCart = (id, Category) => {
    if (cart.find((item) => item.id === id) != null) {
      alert("Item is already present in the cart");
    } else {
      let product = data[Category].find((item) => item.id === id);
      setCart([...cart, product]);
      setItems((items) => {
        return items + 1;
      });
      alert("Item is added in the cart");
    }
    
  };

  const Total = useCallback(() => {
    let t = 0;

    cart.map((item) => {
      t += Number(item.amount) * Number(item.Price);
      return null;
    });
    console.log("total", String(t).substring(0, 10));
    setTotal(String(t).substring(0, 7));
  }, [cart]);


  const removeItem = useCallback((id) => {
     let toDeleteItem= cart.find((item) => item.id === id)
     let a = toDeleteItem.amount;
      toDeleteItem.amount = 1;
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    setItems((items) => {
      return items - a;
    });
   
  },[cart])

  const increaseItem = useCallback((id, Category) => {
    console.log(id, Category);
    let newcart = cart.map((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      return item;
    });

    setCart(newcart);
    setItems((items) => {
      return items + 1;
    });
  },[cart]);

 

  const decreaseItem = useCallback(
    (id) => {
      let newitems = [];
      cart.map((item) => {
        if (item.id === id) {
          if (item.amount !== 1) {
            item.amount -= 1;
            newitems.push(item);
          }
        } else {
          newitems.push(item);
        }
        return null;
      });
      setCart(newitems);
      setItems((items) => {
        return items - 1;
      });
    },
    [cart]
  );

  useEffect(() => {
    Total();
  }, [increaseItem, decreaseItem, clearAll, removeItem,Total]);

  return (
    <AppContext.Provider
      value={{
        cart,
        increaseItem,
        decreaseItem,
        clearAll,
        removeItem,
        total,
        items,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
