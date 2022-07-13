const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  console.log();
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.JSON_RPC_URL
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJsonKey = await ethers.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );
  console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedJsonKey.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
