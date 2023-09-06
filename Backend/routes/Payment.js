const shortid = require('shortid')
const Razorpay = require('razorpay')


class Payment {
    constructor(app, connection) {
        

        this.payment(app, connection);
    }

     payment(app, connection) {
        app.post("/razorpay", async (req, res) => {
            const payment_capture = 1
	const amount = 700
	const currency = 'INR'
    const razorpay = new Razorpay({
        key_id: 'rzp_test_T9hgdBwhGxqcxx',
        key_secret: 'NfKBn6GD7W4tLi89h80X2SRF'
    })

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
    }
}

module.exports = Payment;