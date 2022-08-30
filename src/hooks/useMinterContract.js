import { useContract } from "./useContract";
import HeritageNFTAbi from "../contracts/HeritageNFT.json";
import HeritageNFTContractAddress from "../contracts/HeritageNFT-address.json";

export const useMinterContract = () =>
  useContract(HeritageNFTAbi.abi, HeritageNFTContractAddress.HeritageNFT);