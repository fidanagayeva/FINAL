import Layout from "../_featured/layout/layout";
import {Info} from "../_components/Info";
import PLNTS from "../_components/PLNTS";
import PlntsText from "../_components/PlntsText";
import PlntsLife from "../_components/PlntsLife";
import ReadMore from "../_components/ReadMore";


export default function HomePage() {
  return (
    <div className="bg-background">
      <Layout>
      <Info/>
      <PLNTS/>
      <PlntsText/>
      <PlntsLife/>
      <ReadMore />
      </Layout>
    </div>
  );
}
