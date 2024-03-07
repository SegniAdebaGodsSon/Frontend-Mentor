interface Plan {
	title: string;
	img: string;
	price: {
		monthly: {
			amount: number;
			discount: string;
		};
		yearly: {
			amount: number;
			discount: string;
		};
	};
}

interface AddOn {
	title: string;
	description: string;
	price: {
		monthly: number;
		yearly: number;
	};
}
