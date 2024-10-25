import React from 'react';
import Layout from '../_featured/layout/layout';
import  Info from '../_components/Info';
import ReadMore from "../_components/ReadMore";
import AccessoriesCards from '../_components/AccessoriesCards';
import AccessoriesText from '../_components/AccessoriesText';

export default function Accessories() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <AccessoriesText/>
    <AccessoriesCards/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
