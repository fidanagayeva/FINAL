import React from 'react';
import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import ReadMore from "../_components/ReadMore";
import CareCards from '../_components/CareCards';
import CareText from '../_components/CareText';

export default function Care() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <CareText/>
    <CareCards/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
