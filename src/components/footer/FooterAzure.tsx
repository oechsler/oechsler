import React from 'react';
import { Image } from 'semantic-ui-react';

import azure from '../../images/azure-logo.png';

const FooterAzure = () => {
    return (
        <div className='footer-azure'>
            <p>Delivered from the cloud by</p>
            <Image src={azure} href='https://azure.com' as='a' />
        </div>
    );
};

export { FooterAzure };
