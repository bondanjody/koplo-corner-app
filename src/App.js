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
import sewuKutoPng from './assets/sewukuto.png';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [finalResult, setFinalResult] = useState({}); 
  
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
      lyrics: `<p>Yen ono salah ning uripku<p>(If there's fault in my life)<p>Kulo nyuwun pangapuramu<p>(I'm asking for your forgiveness)<p>Aku sih pingin lanjut<p>(I'm still willing to continue)<p>Senajan wis kebacut<p><p>Tak akoni aku sing luput<p>(I admit, I was wrong)<br><br><p>Udan udano sing gede<p>(Rain, please be a heavy rain)<p>Gelintirno eluhku iki<p>(Take out all of my tears)<p>Gowono mili<p>(Take it away by your stream)<p>Ojo mbok gowo bali<p>(Never bring it back)<p>Salahku sing wingi uwis tak getuni<p>(My mistakes in the past that I regret)<br><br><p>Bridge : <p>Bubar, ora tak baleni<p>(Dispersed, I won't do it again)<p>Remuk redam ati iki<p>Koyo ngene wong kelangan<p><p>Rasane ora karuan<p>Mergo salah dalan<br><br><p>Reff : <p>Lintang sewengi<p>(One night star)<p>Cukup sewengi iki<p>(Just for tonight)<p>Ra bakal tak nduweni<p>(Will never be mine)<p>Mung ngeridu ati<p>Tresno mung sak kedep moto<p>(Love just for a twinkling of an eye)<p>Kowe teko amung dadi goda<p>(You came just to be a temptation)<br><br><p>Gebyar netramu<p>(Your great sight)<p>Mung pandelengan semu<p>(Just a sight of illusion)<p>Ngluluhke atiku<p>(Make my heart melted)<p>Ninggal tatu jeru<p>(Left a deep hole)<p>Aku lan kowe cukup<p>(Me and you, enough)<p>Cukup sewengi wae<p>(Enough just for a night)<br><br><p>Back to Bridge`
    },
    {
      chartNumber: '3',
      artist: 'Didi Kempot',
      title: 'Sewu Kuto',
      titleTranslation: 'A Thousand Cities',
      image: sewuKutoPng,
      lyrics: ''
    }
  ];

  const hideTrendingContent = () => {
    setShowModal(false);
  }

  const getChartNumber = chartNum => {
    const filteredTrendingContent = songTrendingDatas.filter(data => data.chartNumber===chartNum);
    setFinalResult(() => {
      const [newData] = filteredTrendingContent;
      return {...newData};
    })
    setShowModal(true);
  }

  return <Fragment>
    {showModal && <ContentContainer lyricsData={finalResult} onHide={hideTrendingContent} />}
    <Header />
    <Trending songData={songTrendingDatas} onGetChartNum={getChartNumber} />
    <Fyi />
    <Genre />
    <Footer />
    
  </Fragment>
}

export default App;
