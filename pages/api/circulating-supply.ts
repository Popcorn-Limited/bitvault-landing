import { NextApiRequest, NextApiResponse } from "next";
import { createPublicClient, erc20Abi, http } from "viem";
import { mainnet } from "viem/chains";

const POP_ADDRESS = "0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
const TREASURY_ADDRESS = "0x93A32401D3E1425AD7b3E118816A1B900E714d18"
const POPSTAR_ADDRESS = "0x6B1741143D3F2C4f1EdA12e19e9518489DF03e04"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let response;
  try {
    const client = createPublicClient({
      chain: mainnet,
      transport: http(process.env.ETH_RPC_URL)
    })

    const [popSupply, treasuryBalance, popstarBalance] = await client.multicall({
      contracts: [
        {
          address: POP_ADDRESS,
          abi: erc20Abi,
          functionName: "totalSupply"
        },
        {
          address: POP_ADDRESS,
          abi: erc20Abi,
          functionName: "balanceOf",
          args: [TREASURY_ADDRESS]
        },
        {
          address: POP_ADDRESS,
          abi: erc20Abi,
          functionName: "balanceOf",
          args: [POPSTAR_ADDRESS]
        },
      ],
      allowFailure: false
    })

    // @ts-ignore
    response = BigInt((popSupply - treasuryBalance - popstarBalance) / parseUnits("1")).toString()
  } catch (err) {
    return res.status(400).send({ error: err });
  }

  res.setHeader("Cache-Control", "s-maxage=43200");
  return res.json({ success: true, circulatingSupply: response });
}
