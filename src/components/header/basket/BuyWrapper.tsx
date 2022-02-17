import React from "react";
import s from'./basket.module.css'

type BuyWrapperType = {
	Promo:number
	finalPrice: number
}

const BuyWrapper:React.FC<BuyWrapperType> = (props) => {
	if(props.Promo){
		return<div className={s.finalPriceWrapper}>
			<div className={s.fprice}>Итоговая цена товара:<div className={s.ffpr}> {props.finalPrice / 100 * 70}грн</div></div>
			<div className={s.carts}><p>Оплатить с помощью:</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mastercard_logo.svg/1200px-Mastercard_logo.svg.png" alt="" /></div>
		</div>
	}
		return<div className={s.finalPriceWrapper}>
			<div className={s.fprice}>Итоговая цена товара:<div className={s.ffpr}> {props.finalPrice}грн</div></div>
			<div className={s.carts}><p>Оплатить с помощью:</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mastercard_logo.svg/1200px-Mastercard_logo.svg.png" alt="" /></div>
		</div>
}

export default BuyWrapper