export interface ExperienceItem {
  title: string
  stack: string[]
  description: string
  bullets?: string[]
  status?: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "BOLDER | BORROWING PROTOCOL",
    stack: ["NEXT.JS", "TYPESCRIPT", "VIEM", "WAGMI", "LIQUITY V2"],
    description:
      "Building a borrowing protocol using Liquity v2 contracts with Next.js, TypeScript, Viem, and Wagmi. Implementing SOLID principles and scalable architecture for enhanced maintainability.",
    status: "UNDER CONSTRUCTION...",
  },
  {
    title: "WALLET RECOVERY SOLUTION",
    stack: ["NEXT.JS", "FLASHBOTS", "BLOCKCHAIN INTEGRATION"],
    description:
      "Advanced blockchain solution for fund recovery from compromised wallets affected by sweeper bot contamination. Leverages Flashbots technology for secure transaction execution on Ethereum networks.",
    bullets: [
      "ETHEREUM MAINNET • SEPOLIA TESTNET SUPPORT",
      "ETHERS.JS • INFURA • ETHERSCAN API",
      "AUTOMATED FUND RECOVERY PROTOCOL",
      "10% SERVICE FEE BUSINESS MODEL",
    ],
  },
  {
    title: "RENEW APP",
    stack: ["REACT NATIVE", "TYPESCRIPT", "MOBILE DEVELOPMENT"],
    description:
      "Religious application engineered for Android platform utilizing React Native Expo framework. Integrated comprehensive Bible API for seamless biblical reference insertion during devotional composition.",
    bullets: [
      "PDF GENERATION & TEXT SHARING IMPLEMENTATION",
      "ADMOB INTEGRATION: +58 BANNER REQUESTS (BETA)",
      "MULTILINGUAL SUPPORT: SPANISH • ENGLISH",
      "DEVELOPMENT CYCLE: 30 DAYS",
    ],
  },
  {
    title: "ETHGLOBAL BOGOTÁ 2022",
    stack: ["HACKATHON", "SOLIDITY", "IPFS", "SMART CONTRACTS"],
    description:
      "Led development of an anonymous talent recruitment platform with an integrated digital certification system. Implemented Solidity smart contracts and IPFS for secure, verifiable credential issuance.",
    bullets: [
      "ANONYMOUS RECRUITMENT NETWORK",
      "BLOCKCHAIN-BASED CERTIFICATION SYSTEM",
      "SOLIDITY SMART CONTRACT DEVELOPMENT",
      "IPFS INTEGRATION FOR CREDENTIAL STORAGE",
    ],
  },
]
