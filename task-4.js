function getShippingCost(country) {
    switch (country) {
        case 'China':
            return `Shipping to ${country} will cost ${price} credits`;

        
        case 'Chile':
            return `Shipping to ${country} will cost ${price} credits`;
          
            
        case 'Australia':
            return `Shipping to ${country} will cost ${price} credits`;
           

        case 'Jamaica':
            return `Shipping to ${country} will cost ${price} credits`;
    

        default:
            return `Sorry, there is no delivery to your country`;
    }
}


country('China') = price(100);
country('Chile') = price(250);
country('Australia') = price(170);
country('Jamaica') = price(120);



console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"