import { Signer, ethers } from "ethers";
import web3Modal from "web3modal";


//INTERNAL IMPORT
import ERC20ABI from "./abi.json";

export const ERC20ABI = ERC20ABI;


export const V3_SWAP_ROUTER_ADDRESS =
  "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";



//Fetch the contract
const fetchTokenContact = (Signer, ADDRESS)=> new ethers.Contract(ADDRESS, ERC20_ABI, Signer)



export const web3Provider = async () =>{
  try{
    const web3modal = new web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection) ;

  

    return provider;
  } catch(err) {
    console.log(error);
  }
}


export const CONNECTING_CONTRACT = async(ADDRESS)=>{
  try {
    //TEST_ACCOUNT_FORK
const TEST_ACCOUNT = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";

const provider = await web3Provider();
  const network = await provider.getNetwork();

  const signer = provider.getSigner();
  const contract = fetchTokenContact(signer, ADDRESS);

  //USER ADDRESS
  
  const balance = await contract.balanceOf(TEST_ACCOUNT);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const supply = await contract.totalSupply();
  const decimal = await contract.decimal();
  const address = await contract.address;

  const token = {
    address: address,
    name: name,
    symbol: symbol,
    decimal: decimal,
    supply: supply.utils.formatEther(supply.toString()),
    balance: supply.utils.formatEther(balance.toString()),
    chainId: 1,
    //chainId: network.chainId
  };

  return token;

  } catch (error) {
    console.log(error);
    
  }
}
