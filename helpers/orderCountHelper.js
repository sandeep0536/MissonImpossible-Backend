let adminmodel = require('../model/adminModel');

exports.getOrdersCount = async (amount = 0) => {
	const result = await adminmodel.getNormalOrderedQuantity();
	if (result.status) {
		const orders = result.data.total_ordered_quantity;
		const remaining = 1253-(parseInt(orders) + parseInt(amount));
		if ((parseInt(orders) + parseInt(amount)) <= 1253) {
			return { status: true, message: "total orders quantity", data: orders };
		} else {
			return { status: false, message: `Exceeds maximum supply of NFT,remaning ${remaining} NFT`, data: orders };
		}

	} else {
		return { status: false, message: "something went wrong", data: 0 };
	}
}

exports.getPreSaleOrdersCount = async (amount = 0) => {
	const result = await adminmodel.getPreSaleOrderedQuantity();
	if (result.status) {
		const orders = result.data.total_ordered_quantity;
		const remaining = 200-(parseInt(orders) + parseInt(amount));
		console.log("orders ", orders);
		if ((parseInt(orders) + parseInt(amount)) <= 200) {
			return { status: true, message: "total PreSale orders quantity", data: orders };
		} else {
			return { status: false, message: `Exceeds maximum supply of PreSale order,remaning ${remaining} NFT`, data: orders };
		}

	} else {
		return { status: false, message: "something went wrong", data: 0 };
	}
}



exports.getWhiteListOrdersCount = async (amount = 0) => {
	const result = await adminmodel.getWhiteListOrderedQuantity();
	if (result.status) {
		const orders = result.data.total_ordered_quantity;
		const remaining = 500-(parseInt(orders) + parseInt(amount));
		console.log("orders ", orders);
		if ((parseInt(orders) + parseInt(amount)) <= 500) {
			return { status: true, message: "total whitelist users orders quantity", data: orders };
		} else {
			return { status: false, message: `Exceeds maximum supply of total whitelist users orders,${remaining} NFT`, data: orders };
		}

	} else {
		return { status: false, message: "something went wrong", data: 0 };
	}
}