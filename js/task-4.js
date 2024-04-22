function getShippingCost(country) {
    let price;
    switch(country) {
        case 'China':
            price = 100;
            console.log(`Shipping to ${country} will cost ${price} credits`);
            break;
        case 'Chile':
            price = 250;
            console.log(`Shipping to ${country} will cost ${price} credits`);
            break;
        case 'Australia':
            price = 170;
            console.log(`Shipping to ${country} will cost ${price} credits`);
            break;
        case 'Jamaica':
            price = 120;
            console.log(`Shipping to ${country} will cost ${price} credits`);
            break;
        default:
             console.log('Sorry, there is no delivery to your country');
    }
}
getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost('China');
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");
