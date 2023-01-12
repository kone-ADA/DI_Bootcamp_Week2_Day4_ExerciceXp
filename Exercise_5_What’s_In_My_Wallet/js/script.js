function changeEnough(itemPrice, amountOfChange){

    const parametres = [0.25, 0.10, 0.05, 0.01];

    let nouveauPrix = 0;

    // Verifier si amountOfChange est un array et a la meme taille que listOfCoefficients
    if(Array.isArray(amountOfChange)  && parametres.length != amountOfChange.length)
    {
        return console.log(`Veuillez fournir tableau de ${parametres.length} montant`);
    }

    for (let i = 0; i<amountOfChange.length; i++ ) {
        
        // recuperer le prix;
        let price =  Number(amountOfChange[i]);

        //Verifier si l'element est un nombre sinon on l'attribue 0
        if (isNaN(price)) {
            price = 0;            
        }

        // Calcul du prix avec les coefficients
        nouveauPrix = nouveauPrix +  price * parametres[i];

   }

   if (itemPrice <= nouveauPrix) {
        return console.log(true);
   }else{
    return  console.log(false); 
   }
}


// Run function
changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5]);