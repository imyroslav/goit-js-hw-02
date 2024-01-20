function makeTransaction(quantity, pricePerDroid, customerCredits)
{
    let priceTotal = quantity*pricePerDroid;
    if(priceTotal > customerCredits)
    { return "Insufficient funds!"; }
    else { 
        return `You ordered ${quantity} droids worth ${priceTotal} credits!`
    }
}

