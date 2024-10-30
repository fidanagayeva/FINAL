import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import InspirationImg from '../_components/InspirationImg';
import Highlightedblogs from '../_components/Highlightedblogs';
import BlogSwip from '../_components/BlogSwip';

export default function Inspiration() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <InspirationImg/>
    <Highlightedblogs/>
    <BlogSwip/>
    </Layout>
    </div>
  )
}
