import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

export default function CartButton() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge} onClick={toggleCartHandler}>
        {cartQuantity}
      </span>
    </button>
  );
}
