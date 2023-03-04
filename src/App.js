import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Trending from "./components/Layout/Trending";
import Fyi from "./components/Layout/Fyi";
import Genre from "./components/Layout/Genre";
import Footer from "./components/Layout/Footer";
import ContentContainer from "./components/Layout/ContentContainer";
import critoMustahilPic from './assets/crito-mustahil.png';
import lintangSewengiPic from './assets/lintang-sewengi.png';
import mangkuPurelPic from './assets/mangku-purel.png';

function App() {
  const [showModal, setShowModal] = useState(false);
  const songTrendingDatas = [
    {
      chartNumber: '1',
      artist: 'Denny Caknan',
      title: 'Crito Mustahil',
      titleTranslation: 'Impossible Story',
      image: critoMustahilPic,
      lyrics: `<p>Aku wis tau<p>(I have known)<p>Ngrasakne jerune kedanan<p>(To feel )<p>Ngrasakne bundase kelaran<p>(To feel the wound of hurt)<p>Ngrasakne nangisi ning ra ketaran<p>(To feel the endless tears)<br><br><p>Aku ngiyani<p>(I said yes)<p>Omongmu seng kesel jalani<p>(To your words that are tired of going through this)<p>Misal memang keputusanmu<p>(If that's your decision)<p>Tak lilak-lilakne kelangan awakmu<p>(I'm willing to lose you)<br><br><p>Bridge:<p>Mung pengen ngandani<p>(Just wanna tell)<p>Sadar aku du seleramu saiki<p>(Realizing I'm not your taste now)<p>Mung pengen negesi<p>(Just to make sure)<p>Ati- ati yen kangen kabari<p>(Be careful, let me know if you miss me)<br><br><p>Reff :<p>Ra maksane, niat gandeng mu ro aku<p>(Not forcing, my intention to be with you)<p>Cerito iki, cerito mustahil nggo aku<p>(This story, it's impossible story for me)<p>Karep ati mastekne kabeh senengmu<p>(My heart's desire, confirms all your desires)<p>Ning sanding mu ra bakal ngilang<p>(Beside you will not disappear)<p>Kembang ngipi saben wengi<p>(Dream flowers every night)<p>Ra nyongko luput tak nduweni<p>(I don't think I got it wrong)<p>Mugo lungo ku , nglegakne atimu<p>(May my leaving satisfy you)<br><br><p>Back to Bridge`
    },
    {
      chartNumber: '2',
      artist: 'Ndarboy Genk',
      title: 'Lintang Sewengi',
      titleTranslation: 'One Night Star',
      image: lintangSewengiPic,
      lyrics: ''
    },
    {
      chartNumber: '3',
      artist: 'Niken Salindry',
      title: 'Mangku Purel',
      titleTranslation: 'Got a Slut on You',
      image: mangkuPurelPic,
      lyrics: ''
    }

  ]
  return <Fragment>
    {showModal && <ContentContainer lyricsData={songTrendingDatas} />}
    <Header />
    <Trending songData={songTrendingDatas} />
    <Fyi />
    <Genre />
    <Footer />
  </Fragment>
}

export default App;
