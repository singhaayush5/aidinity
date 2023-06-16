const razorpay = require("razorpay");

exports.createPayment = async (req,res) => {
    try{
       const rzp = new razorpay({
        key_id: "rzp_test_uZGiUOHM6LJi8D",
        key_secret: "VLdliukzmz6rPwVfedSWxSA3"
       });

       const {order_id, amount, payment_capture, currency} = req.body;

       const options = {
        amount: amount*100,
        currency: currency,
        receipt: order_id,
        payment_capture: payment_capture
       };

       const order = await rzp.orders.create(options);

       if (!order) return res.status(400).json("some error!");

       res.status(200).json({success: true, data: order});
    }catch(err){
        console.log(err);
    }
}

exports.cardDetails = async (req,res,next) => {
    try{
        const rzp = new razorpay({
            key_id: "rzp_test_uZGiUOHM6LJi8D",
            key_secret: "VLdliukzmz6rPwVfedSWxSA3"
           });

        const {razorpay_payment_id} = req.body;

        const order = await rzp.payments.fetch(razorpay_payment_id);
        if(!order) return res.status(401).json("some errors!");
        res.status(200).json({success: true, data: order});
    }catch(err){
        console.log(err);
    }
}