const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  console.log();
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "e951e0c13fbc2878a72be7ba7334e3a934ddd9d8660954d8a915eebccfb9e486",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying , please wait .....");
  const contract = await contractFactory.deploy();

  const transactionReceipt = await contract.deployTransaction.wait(1);
  //   console.log("Deployment Completion Successfully!");
  //   console.log("here is the deployment tranaction");
  //   console.log(contract.deployTransaction);
  //   console.log("here is the tranaction receipt");
  //   console.log(transactionReceipt);

  console.log("Lets deploy with only transaction data!");
  const tx = {
    nonce: 4 ,
    gasPrice:"20000000000",
    gasLimit:1000000,
    to:null,
    value:0,
    data:

  };
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
