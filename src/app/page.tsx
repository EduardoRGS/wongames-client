import HomePage from './templates/Home'
import gameCardSliderMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import bannerMock from '@/components/BannerSlider/mock'

const homeMoke = {
  banners: bannerMock,
  newGames: gameCardSliderMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gameCardSliderMock,
  upcomingGames: gameCardSliderMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gameCardSliderMock,
  freeGamesHighlight: highlightMock,
  freeGames: gameCardSliderMock
}

export default function Home() {
  return <HomePage {...homeMoke} />
}
