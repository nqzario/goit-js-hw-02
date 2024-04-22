function checkForSpam(message) {
    const includesSpam = message.toLowerCase().includes('spam');
    const includesSale = message.toLowerCase().includes('sale');
    const banWords = includesSale || includesSpam;
    console.log(banWords);
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");