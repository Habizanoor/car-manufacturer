import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useToolDetail from '../../hooks/useToolDetail';
import PurchasePage from './PurchasePage';

const Purchase = () => {
    
    const { purchaseId } = useParams();
    const [perchase, setPurchase] = useToolDetail(purchaseId);

    return (
        <div>
            <PurchasePage perchase={perchase}></PurchasePage>
        </div>
    );
};

export default Purchase;