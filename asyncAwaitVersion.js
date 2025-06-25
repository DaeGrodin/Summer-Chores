function mowYard(name) {
   return new Promise ((resolve) => {
     setTimeout(() => {
       console.log(`${name} finished mowing the yard.`);
       resolve();
     }, 2000);
  });
}

function weedEat(name) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() < 0.7) {
             console.log(`${name} finished using the weedeater.`);
             resolve();
          } else {
             console.log(`${name} fell asleep after mowing the yard.`);
             reject();
          }
       }, 1500);
    });
}

function trimHedges(name) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() < 0.7) {
             console.log(`${name} finished trimming the hedges.`);
             resolve();
          } else {
             console.log(`${name} fell asleep after weedeating the yard.`);
             reject();
          }
       }, 1000);
    });   
}

function collectWood(name) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => { 
          if (Math.random() < 0.7) {
              console.log(`${name} finished collecting wood.`);
              resolve();
          } else {
              console.log(`${name} fell asleep after trimming the hedges.`);
              reject();
          }
       }, 2500);
    });
}

function waterGarden(name) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() < 0.7) {
              console.log(`${name} finshed watering the garden`);
              resolve();
           } else {
              console.log(`${name} fell asleep after collecting wood`);
              reject();
           }
       }, 500);
    });
}

async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} finished all their chores!`);  

    } catch(error) {
        console.log(error);
    }
}