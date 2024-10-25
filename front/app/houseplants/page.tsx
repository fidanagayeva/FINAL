import React from 'react';
import Layout from '../_featured/layout/layout';
import { Info } from '../_components/Info';
import ReadMore from "../_components/ReadMore";

export default function Houseplants() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
