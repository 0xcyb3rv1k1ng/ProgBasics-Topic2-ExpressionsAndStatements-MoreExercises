function main(priceOfWhiskey, amountOfBeer, amountOfWine, amountOfRakia, amountOfWhiskey) {
    var priceOfRakia = 0.00;
    var priceOfWine = 0.00;
    var priceOfBeer = 0.00;
    var totalAmountForRakia = 0.00;
    var totalAmountForWine = 0.00;
    var totalAmountForBeer = 0.00;
    var totalAmountForWhiskey = 0.00;
    var totalAmountOfMoney = 0.00;
    priceOfRakia = priceOfWhiskey / 2; //25
    priceOfWine = priceOfRakia - (0.4 * priceOfRakia); //15
    priceOfBeer = priceOfRakia - (0.8 * priceOfRakia); //5
    totalAmountForRakia = amountOfRakia * priceOfRakia; //162.50
    totalAmountForWine = amountOfWine * priceOfWine; //52.50
    totalAmountForBeer = amountOfBeer * priceOfBeer; //50
    totalAmountForWhiskey = amountOfWhiskey * priceOfWhiskey; //50
    totalAmountOfMoney = totalAmountForRakia + totalAmountForWine + totalAmountForBeer + totalAmountForWhiskey; //315
    console.log(totalAmountOfMoney.toFixed(2));
}
main(50, 10, 3.5, 6.5, 1);