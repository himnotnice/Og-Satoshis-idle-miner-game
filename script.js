 ```javascript
 let resources = 0;
 let ordinalMiner = {
     name: "Ordinal Miner",
     production: 1,
     owned: 1, // Start with one for initial generation
     cost: 10
 };
 let inscriptionCrafter = {
     name: "Inscription Crafter",
     production: 5,
     owned: 0,
     cost: 50
 };

 function updateResources() {
     resources += (ordinalMiner.production * ordinalMiner.owned) + (inscriptionCrafter.production * inscriptionCrafter.owned);
     document.getElementById("resources").innerText = "Resources: " + resources + " sat";
 }
 setTimeout(updateResources, 3000); // Use setTimeout for initial call

 function buyOrdinalMiner() {
     if (resources >= ordinalMiner.cost) {
         resources -= ordinalMiner.cost;
         ordinalMiner.owned++;
         document.getElementById("ordinalMinerOwned").innerText = ordinalMiner.owned;
         updateResourcesDisplay();
         ordinalMiner.cost = Math.ceil(ordinalMiner.cost * 1.1); // Increase cost by 10%
     } else {
         alert("Not enough resources to buy Ordinal Miner.");
     }
 }

 function buyInscriptionCrafter() {
     if (resources >= inscriptionCrafter.cost) {
         resources -= inscriptionCrafter.cost;
         inscriptionCrafter.owned++;
         document.getElementById("inscriptionCrafterOwned").innerText = inscriptionCrafter.owned;
         updateResourcesDisplay();
         inscriptionCrafter.cost = Math.ceil(inscriptionCrafter.cost * 1.1); // Increase cost by 10%
     } else {
         alert("Not enough resources to buy Inscription Crafter.");
     }
 }

 function updateResourcesDisplay() {
     document.getElementById("resources").innerText = "Resources: " + resources + " sat";
 }

 document.getElementById("mineButton").addEventListener("click", function() {
     resources += 1;
     document.getElementById("resources").innerText = "Resources: " + resources + " sat";
 });

 window.onload = function() {
     document.getElementById("ordinalMinerOwned").innerText = ordinalMiner.owned;
     document.getElementById("inscriptionCrafterOwned").innerText = inscriptionCrafter.owned;
     updateResourcesDisplay();
     // Start the interval after initial load
     const intervalId = window.setInterval(updateResources, 3000);
 };