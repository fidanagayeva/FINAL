import Layout from "../_featured/layout/layout";
import Info from "../_components/Info";
import Infobg from "../_components/Infobg";
import PLNTS from "../_components/PLNTS";
import HPCA from "../_components/HPCA";
import ReleasesCards from "../_components/ReleasesCards";
import PlntsText from "../_components/PlntsText";
import PlntsLife from "../_components/PlntsLife";
import ReadMore from "../_components/ReadMore";
import Plantofthemonth from "../_components/Plantofthemonth";
import CareWatering from "../_components/CareWatering";
import InstaCards from "../_components/InstaCards";
import YellowSwiper from "../_components/YellowSwiper";
import Baby from "../_components/Baby";
import Rare from "../_components/Rare";
import Packing from "../_components/Packing";


export default function HomePage() {
  return (
    <div className="bg-background">
      <Layout>
      <Info/>
      <PLNTS/>
      <PlntsText/>
      <HPCA />
      <ReleasesCards/>
      <PlntsLife/>
      <Infobg/>
      <Plantofthemonth/>
      <CareWatering/>
      <InstaCards/>
      <YellowSwiper/>
      <Infobg/>
      <Baby/>
      <Rare/>
      <Packing/>
      <ReadMore />
      </Layout>
    </div>
  );
}
