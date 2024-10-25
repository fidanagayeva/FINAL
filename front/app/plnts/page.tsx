import Layout from "../_featured/layout/layout";
import {Info} from "../_components/Info";
import ReadMore from "../_components/ReadMore";
import PLNTSimg from "../_components/PLNTSimg";
import PLNTSallText from "../_components/PLNTSallText";
import PLNTScard from "../_components/PLNTScard";
import PLNTSprb from "../_components/PLNTSprbText";


export default function PLNTSdoc() {
  return (
    <div className="bg-background">
      <Layout>
      <Info/>
      <PLNTSimg/>
      <PLNTSallText/>
      <PLNTScard/>
      <PLNTSprb/>
      <ReadMore />
      </Layout>
    </div>
  );
}
