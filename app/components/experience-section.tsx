import { memo } from 'react'
import { Smartphone, Database, Code, Landmark } from 'lucide-react'

const ExperienceCard = memo(function ExperienceCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
}: {
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: any
}) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="mb-4 sm:mb-0">
          <h3 className="experience-title">{title}</h3>
          <p className="experience-subtitle">{subtitle}</p>
        </div>
        <div className="experience-icon">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </div>
      </div>

      <p className="experience-description">{description}</p>

      <div className="experience-features">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-dot" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

export default memo(function ExperienceSection() {
  const experiences = [
    {
      title: 'BOLDER - BORROWING PROTOCOL',
      subtitle: 'NEXT.JS • TYPESCRIPT • VIEM • WAGMI • LIQUITY V2',
      description:
        'Building a borrowing protocol using Liquity v2 contracts with Next.js, TypeScript, Viem, and Wagmi. Implementing SOLID principles and scalable architecture for enhanced maintainability.',
      features: [
        'UNDER CONTRUCTION...',
      ],
      icon: Landmark,
    },
    {
      title: 'RENEW APPLICATION',
      subtitle: 'REACT NATIVE • TYPESCRIPT • MOBILE DEVELOPMENT',
      description:
        'Religious application engineered for Android platform utilizing React Native Expo framework. Integrated comprehensive Bible API for seamless biblical reference insertion during devotional composition.',
      features: [
        'PDF GENERATION & TEXT SHARING IMPLEMENTATION',
        'ADMOB INTEGRATION: +58 BANNER REQUESTS (BETA)',
        'MULTILINGUAL SUPPORT: SPANISH • ENGLISH',
        'DEVELOPMENT CYCLE: 30 DAYS',
      ],
      icon: Smartphone,
    },
    {
      title: 'WALLET RECOVERY SOLUTION',
      subtitle: 'NEXT.JS • FLASHBOTS • BLOCKCHAIN INTEGRATION',
      description:
        'Advanced blockchain solution for fund recovery from compromised wallets affected by sweeper bot contamination. Leverages Flashbots technology for secure transaction execution on Ethereum networks.',
      features: [
        'ETHEREUM MAINNET • SEPOLIA TESTNET SUPPORT',
        'ETHERS.JS • INFURA • ETHERSCAN API',
        'AUTOMATED FUND RECOVERY PROTOCOL',
        '10% SERVICE FEE BUSINESS MODEL',
      ],
      icon: Database,
    },
    {
      title: 'ETHGLOBAL BOGOTÁ 2022',
      subtitle: 'HACKATHON • SOLIDITY • IPFS • SMART CONTRACTS',
      description:
        'Led development of anonymous talent recruitment platform with integrated digital certification system. Implemented Solidity smart contracts and IPFS for secure, verifiable credential issuance.',
      features: [
        'ANONYMOUS RECRUITMENT NETWORK ARCHITECTURE',
        'BLOCKCHAIN-BASED CERTIFICATION SYSTEM',
        'SOLIDITY SMART CONTRACT DEVELOPMENT',
        'IPFS INTEGRATION FOR CREDENTIAL STORAGE',
      ],
      icon: Code,
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="section-bg-alt" />
      <div className="section-container">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
})
