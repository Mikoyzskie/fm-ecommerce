import clsx from 'clsx';
import { useGlobalContext } from '../lib/Provider';
import CartItem from './CartItem';

interface ICart {
    isHidden: boolean;
}

export default function Cart({ isHidden }: ICart) {

    const { cartCount } = useGlobalContext()

    return (
        <div className={clsx(" flex-col lg:w-[360px] bg-white absolute -bottom-[17rem] right-2 left-2 lg:left-auto lg:-bottom-[15.5rem] lg:right-5 shadow-2xl rounded-lg z-10",
            isHidden ? "hidden" : "flex"
        )}>
            <div className="p-6 border-b">
                <span className="font-bold w-full">Cart</span>
            </div>
            <div className={clsx("w-full min-h-[190px] flex flex-col p-6 gap-6",
                cartCount > 0 ? "" : "items-center justify-center h-full"
            )}>
                {
                    cartCount > 0 ? <CartItem /> : <p className="font-bold text-slate-500">Your cart is empty.</p>

                }

            </div>
        </div>
    )
}