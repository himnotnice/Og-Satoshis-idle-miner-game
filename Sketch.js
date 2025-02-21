 ```javascript
 let sats = 0;
 let hp = 0;
 let cg = 0;
 let upgradeMultiplier = 1;

 let miners = [
   { name: "Satoshi", satsPerSec: 1, cost: 10, level: 1, x: 50, y: 100, active: true, color: "#FFD700" },
   { name: "Hashiko", satsPerSec: 2, hpPerSec: 1, cost: 50, level: 0, x: 50, y: 200, active: false, color: "#FF4500" },
   { name: "Gemini", satsPerSec: 0, cgPerSec: 0.1, cost: 100, level: 0, x: 50, y: 300, active: false, color: "#00CED1" }
 ];

 function setup() {
   createCanvas(600, 400);
   textAlign(CENTER);
   textSize(16);
   frameRate(30);
   console.log("Setup complete, canvas created"); // Confirm setup runs

   setInterval(() => {
     miners.forEach(miner => {
       if (miner.active) {
         sats += (miner.satsPerSec || 0) * miner.level * upgradeMultiplier;
         hp += (miner.hpPerSec || 0) * miner.level * upgradeMultiplier;
         cg += (miner.cgPerSec || 0) * miner.level * upgradeMultiplier;
       }
     });
     console.log("Resources updated:", sats, hp, cg); // Confirm accumulation
   }, 1000);
 }

 function draw() {
   background(50);
   fill(255);
   text(`Satoshis: ${Math.floor(sats)}`, width / 2, 30);
   text(`Hashpower: ${Math.floor(hp)}`, width / 2, 50);
   text(`Crypto Gems: ${cg.toFixed(1)}`, width / 2, 70);
   text(`Upgrade Multiplier: ${upgradeMultiplier}x`, width / 2, 90);

   miners.forEach(miner => {
     fill(miner.active ? miner.color : 100);
     ellipse(miner.x, miner.y, 40, 40);
     fill(255);
     text(miner.name, miner.x, miner.y - 20);
     text(`Lv.${miner.level}`, miner.x, miner.y + 5);

     let buttonX = miner.x + 60;
     let buttonY = miner.y - 10;
     fill(miner.active ? 0 : 150);
     rect(buttonX, buttonY, 100, 20);
     fill(255);
     text(miner.active ? `Upgrade (${miner.cost} Sats)` : `Hire (${miner.cost} Sats)`, buttonX + 50, buttonY + 15);

     let stats = [];
     if (miner.satsPerSec) stats.push(`${miner.satsPerSec * miner.level} Sats/s`);
     if (miner.hpPerSec) stats.push(`${miner.hpPerSec * miner.level} HP/s`);
     if (miner.cgPerSec) stats.push(`${(miner.cgPerSec * miner.level).toFixed(1)} CG/s`);
     text(stats.join(", "), miner.x + 60, miner.y + 30);
   });

   fill(200);
   rect(width - 150, height - 40, 120, 30);
   fill(0);
   text(`Upgrade All (50 HP)`, width - 90, height - 20);
 }

 function mousePressed() {
   console.log("Mouse clicked at:", mouseX, mouseY); // Confirm click detection
   miners.forEach(miner => {
     let buttonX = miner.x + 60;
     let buttonY = miner.y - 10;
     if (mouseX > buttonX && mouseX < buttonX + 100 && mouseY > buttonY && mouseY < buttonY + 20) {
       if (!miner.active && sats >= miner.cost) {
         sats -= miner.cost;
         miner.active = true;
         miner.level = 1;
         console.log(`${miner.name} hired`);
       } else if (miner.active && sats >= miner.cost) {
         sats -= miner.cost;
         miner.level++;
         miner.cost = Math.floor(miner.cost * 1.5);
         console.log(`${miner.name} upgraded to level ${miner.level}`);
       }
     }
   });

   if (mouseX > width - 150 && mouseX < width - 30 && mouseY > height - 40 && mouseY < height - 10 && hp >= 50) {
     hp -= 50;
     upgradeMultiplier += 0.5;
     console.log("Multiplier upgraded to", upgradeMultiplier);
   }
 }
