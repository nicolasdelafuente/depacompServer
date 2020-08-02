import app from "./app";
import "@babel/polyfill";

async function main() {
  await app.listen(8080);
}

main();
