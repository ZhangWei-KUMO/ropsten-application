const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = '0xBbEf28c201Da8Ba38A175041283fe375cDb44987';
const contract = require('../artifacts/contracts/First.sol/First.json')

const AlchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten",API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY,AlchemyProvider);
const contract_instance = new ethers.Contract(CONTRACT_ADDRESS,contract.abi,signer);

async function main(){
    const store = await contract_instance.store(200);
    const intNum = await contract_instance.retrieve();
    console.log(intNum)
}

main()