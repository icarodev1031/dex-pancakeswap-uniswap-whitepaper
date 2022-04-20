import React from 'react'
import { Card, CardBody, Heading, Text, Button } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Block = styled.div`
  margin-bottom: 16px;
`
const globalAny: any = global

const TwitterCard = () => {
  const TranslateString = useI18n()

  const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
    const tokenAdded = await globalAny.window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: `https://hopperswap.io/images/egg/2.png`,
        },
      },
    })

    return tokenAdded
  }

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Quick links
        </Heading>
        <Block>
          <Button fullWidth onClick={() => window.open('https://exchange.hopperswap.io/#/swap', '_self').focus()}>
            Buy Hopper Token
          </Button>
        </Block>
        <Block>
          <Button fullWidth onClick={() => registerToken('0x0e505a3296a8048132A2d31815F44cEc37aB485D', 'LEA', 18)}>
            Add Hopper to Metamask
          </Button>
        </Block>
        {/* <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'GooseFinance'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
            width: "400"
          }}
        /> */}
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
