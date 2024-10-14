import Layout from "../_featured/layout/layout";
import {Info} from "../_components/Info";
import PLNTS from "../_components/PLNTS";
import ReadMore from "../_components/ReadMore"


export default function HomePage() {
  return (
    <div>
      <Layout>
      <Info/>
      <PLNTS/>
      <ReadMore />
      </Layout>
    </div>
  );
}
