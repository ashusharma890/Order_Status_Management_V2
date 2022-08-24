const executeOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-id-input').value = ''

    if(orderId.length >2)
    {
	    createOrderCard(orderId)
	    document.getElementById(orderId).innerText = 'Order Placed'
    
	    chefReceived(orderId)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderId).innerText = 'Package Delivered')
		.catch((err) => console.log(err))
    }
    else
    {
        alert("Kindly enter valid a Order ID");
    }
}