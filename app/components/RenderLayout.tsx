import React from 'react'
import Layout1 from './DiffLayouts/Layout1';
import Layout2 from './DiffLayouts/Layout2';
import Layout3 from './DiffLayouts/Layout3';

const RenderLayout = (id:number) => {
    switch (id) {
        case 1:
            return <Layout1 />;
        case 2:
            return <Layout2 />;
        case 3:
            return <Layout3 />;
        default:
            return <Layout1 />;
    }
}

export default RenderLayout