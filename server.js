const favoritefood = process.env.FAVORITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Microservices rock: ${favoritefood}`);
    await sleep(5000);
  }
}

main();
