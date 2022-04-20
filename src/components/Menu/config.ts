import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.hopperswap.io/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.hopperswap.io/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  {
    label: 'Socials',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/hopperswap',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/hopper_swap',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/hopperswap',
      },
      {
        label: 'Github',
        href: 'https://github.com/hopperswap/hopperswap',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/hopper_swap/',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/user/hopperswap',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@hopperswap',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/54hdTjqCrt',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Info',
        href: 'https://hopper-swap-dex.gitbook.io/hopper-swap/',
      },
      {
        label: 'Road Map',
        href: '',
      },
      {
        label: 'NFT (Soon..)',
        href: '',
      },
      {
        label: 'LaunchPad (Soon..)',
        href: '',
      },
      {
        label: 'Prediction (Soon..)',
        href: '',
      },
    ],
  },

  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
