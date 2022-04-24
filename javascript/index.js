// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    // ...
    getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
      getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
        getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`        
          getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
            
             });
           });
         });
      });
});


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>` 
    return obtainInstruction ('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction ('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction ('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction ('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction ('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction ('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction ('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
.catch((err) => console.log(err));
// Iteration 3 using async/await
async function makeBroccoli() {
  await obtainInstruction ("broccoli", 0)
  document.querySelector("#broccoli").innerHTML += `<li>wash broccoli in cold water</li>`;
  await obtainInstruction ("broccoli", 1)
  document.querySelector("#broccoli").innerHTML += `<li>trim and cut the stalk in half, then finely slice it</li>`;
  await obtainInstruction ("broccoli", 2)
  document.querySelector("#broccoli").innerHTML += `<li>fill a pot with water, add a pinch of salt and bring to the boil</li>`;
  await obtainInstruction ("broccoli", 3)
  document.querySelector("#broccoli").innerHTML += `<li>once boiling, carefully lower the broccoli into the water</li>`;
  await obtainInstruction ("broccoli", 4)
  document.querySelector("#broccoli").innerHTML += `<li>cook for 3 to 4 minutes, or until tender</li>`;
  await obtainInstruction ("broccoli", 5)
  document.querySelector("#broccoli").innerHTML += `<li>drain, then leave to steam dry for a minute</li>`;
  await obtainInstruction ("broccoli", 6)
  document.querySelector("#broccoli").innerHTML += `<li>enjoy</li>`;
}
makeBroccoli();

// Bonus 2 - Promise all
Promise.all([obtainInstruction])
document.querySelector("#brusselsSprouts").innerHTML += `<li>wash brussels sprouts</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>cut off base and chop in half</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>toss in bowl with olive oil, balsamic vinegar and salt</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>preheat oven to 500 F</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>coat baking sheet with olive oil</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>roast in the oven for 20 minutes</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>place back in bowl and add salt and pepper</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>enjoy</li>`;