import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'LEA-BNB LP',
    lpAddresses: {
      97: '0x5F4e94ad206e836941B106FB36a141Af334C767B',
      56: '0xbf20623eC2f2386446fB11F51001301669B9A8d3',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '0x72B8Eb75ecAB5bB8a75adE4605F3ca4C3E73ab63',
      56: '0x0e505a3296a8048132A2d31815F44cEc37aB485D',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'LEA-BUSD LP',
    lpAddresses: {
      97: '0x1a9e2f5404040e178E663D3853982dA1321A46e0',
      56: '0x0DF910D3ab7CAFE09f30377Feaa4643DE300474f',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '0x72B8Eb75ecAB5bB8a75adE4605F3ca4C3E73ab63',
      56: '0x0e505a3296a8048132A2d31815F44cEc37aB485D',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'CAKE-WBNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 4,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LEA',
    lpAddresses: {
      97: '0x1a9e2f5404040e178E663D3853982dA1321A46e0',
      56: '0x0DF910D3ab7CAFE09f30377Feaa4643DE300474f',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '0x72B8Eb75ecAB5bB8a75adE4605F3ca4C3E73ab63',
      56: '0x0e505a3296a8048132A2d31815F44cEc37aB485D',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0x4a6ccbe26c62aa118da6f83ad41d0f49c66194f8',
      56: '0x0DF910D3ab7CAFE09f30377Feaa4643DE300474f', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x78867bbeef44f2326bf8ddd1941a4439382ef2a7',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 7,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
