export const handlePayment = (email, amount) => {
    const handler = PaystackPop.setup({
        key: process.env.PAYSTACK_PUBLIC_API_KEY,
        email: email,
        amount: amount * 100,
        currency: 'USD',
        callback: (response) => {
            //this happens after the payment is completed successfully
            var reference = response.reference;
            alert('Payment complete! Reference: ' + reference);
            // Make an AJAX call to your server with the reference to verify the transaction
        },
        onClose: () => {
            alert('Transaction was not completed, window closed.');
        },
    });
    handler.openIframe();
}
