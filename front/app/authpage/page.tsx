import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import AuthPage from '../_components/AuthPage';

export default function authpage() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <AuthPage/>
    </Layout>
    </div>
  )
}
