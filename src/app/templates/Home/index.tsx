'use client'

import Menu from '@/components/Menu'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Heading from '@/components/Heading'
import { BannerProps } from '@/components/Banner'
import GameCardSlider from '@/components/GameCardSlider'
import Highlight, { HighlightProps } from '@/components/Highlight'
import BannerSlider from '@/components/BannerSlider'
import { GameCardProps } from '@/components/GameCard'
import * as S from './styles'


export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGamesHighlight,
  freeGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading $lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>
    </S.SectionNews>


    <S.SectionMostPopular>
      <Container>
        <Heading $lineLeft lineColor="secondary">
          Most Popular
        </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
      </Container>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Container>
        <Heading $lineLeft lineColor="secondary">
          Upcoming
        </Heading>
          <GameCardSlider items={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} />
      </Container>
    </S.SectionUpcoming>


    <S.SectionFreeGames>
      <Container>
        <Heading $lineLeft lineColor="secondary">
          Free Games
        </Heading>
          <Highlight {...freeGamesHighlight} />
          <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>


    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
