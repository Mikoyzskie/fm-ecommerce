import clsx from 'clsx';

interface ICart {
    isHidden: boolean;
}

export default function Cart({ isHidden }: ICart) {
    return (
        <div className={clsx(" flex-col lg:w-[360px] bg-white absolute -bottom-[17rem] right-2 left-2 lg:left-auto lg:-bottom-[15.5rem] lg:right-5 shadow-2xl rounded-lg z-10",
            isHidden ? "hidden" : "flex"
        )}>
            <div className="p-6 border-b">
                <span className="font-bold w-full">Cart</span>
            </div>
            <div className="w-full min-h-[190px] flex items-center justify-center">
                <p className="font-bold text-slate-500">Your cart is empty.</p>
            </div>
        </div>
    )
}