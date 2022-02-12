import React from "react";
import s from "./header.module.css"

const Header:React.FC = () => {
	return <header className={s.header__wrapper}>
		<div className={s.logoDiv}><img src='https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D1%80%D0%B8%D0%B8-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-125450493.jpg'/></div>
		<div className={s.menuDiv}>
			<ul>
				<li>ГЛАВНАЯ</li>
				<li>МЕНЮ</li>
				<li>КОНТАКТЫ</li>
				<li><img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-red-shopping-cart-icon-png-free-image_2284820.jpg" alt="" />
					<div className={s.count}>0</div>
				</li>
			</ul>
		</div>
	</header>
}

export default Header