import React from 'react';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './components';
import style from './style';

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className={`${style.paddingX} ${style.flexCenter}`}>
				<div className={`${style.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<div className={`${style.flexStart} bg-primary`}>
				<div className={`${style.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
				<div className={`${style.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
