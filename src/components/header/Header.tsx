import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountOfPizza } from "../../redux/main-selectors";
import s from "./header.module.css"

const Header:React.FC = () => {
	const count = useSelector(getCountOfPizza)

	if(count < 10 ){
	return <header className={s.header__wrapper}>
		<div className={s.logoDiv}><Link to='/'><img src='https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D1%80%D0%B8%D0%B8-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-125450493.jpg'/></Link></div>
		<div className={s.menuDiv}>
			<ul>
				<li><Link to='/'>ГЛАВНАЯ</Link></li>
				<li><Link to='/menu'>МЕНЮ</Link></li>
				<li><Link to='/contacts'>КОНТАКТЫ</Link></li>
				<li><Link to='/basket'><img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-red-shopping-cart-icon-png-free-image_2284820.jpg" alt="" />
					<div className={s.count}>{count}</div></Link>
				</li>
			</ul>
		</div>
	</header>
	} else {
			return <header className={s.header__wrapper}>
		<div className={s.logoDiv}><Link to='/'><img src='https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D1%80%D0%B8%D0%B8-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-125450493.jpg'/></Link></div>
		<div className={s.menuDiv}>
			<ul>
				<li><Link to='/'>ГЛАВНАЯ</Link></li>
				<li><Link to='/menu'>МЕНЮ</Link></li>
				<li><Link to='/contacts'>КОНТАКТЫ</Link></li>
				<li><Link to='/basket'><img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-red-shopping-cart-icon-png-free-image_2284820.jpg" alt="" />
					<div className={s.count10}>{count}</div></Link>
				</li>
			</ul>
		</div>
	</header>
	}
}

export default Header