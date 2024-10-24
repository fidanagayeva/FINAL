import Layout from "../_featured/layout/layout";
import {Info} from "../_components/Info";
import ReadMore from "../_components/ReadMore";
import PLNTSimg from "../_components/PLNTSimg";


export default function PLNTSdoc() {
  return (
    <div className="bg-background">
      <Layout>
      <Info/>
      <PLNTSimg/>
      <ReadMore />
      </Layout>
    </div>
  );
}
