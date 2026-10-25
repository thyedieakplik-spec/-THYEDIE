const budget_client = 20000;
const prix_cahier = 1500;
const quantite_cahier = 4;
const prix_stylo = 500;
const quantite_stylo = 3;
const montant_cahier = prix_cahier * quantite_cahier;
const montant_stylo = prix_stylo * quantite_stylo;
const montant_totalA = montant_cahier + montant_stylo; 
console.log ("montant cahier:", montant_cahier," FCFA");
console.log ("montant stylo:",montant_stylo," FCFA" );
console.log ("budget:",budget_client," FCFA");

if (montant_totalA <= budget_client) {
    console.log ("budget suffisant");
} 
else  {
    console.log("achat insuffisant")
}


console.log("")
console.log("montant total:", montant_totalA);
console.log("budget:", budget_client);


let t = 1;
for (let t = 1;
    t < 6;
    t++) {
console.log ("achat numero ",t)
    };