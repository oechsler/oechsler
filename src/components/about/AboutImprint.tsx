import React from 'react';

interface AboutImprintProps {
    name: string;
    street: string;
    number: number;
    zip: number;
    city: string;

    mail: string;
    phone: string;
}

export const AboutImprint = (props: AboutImprintProps) => {
    return (
        <div className='about-imprint'>
            <p>
                <strong>{props.name}</strong>
                <span>
                    {props.street} {props.number}
                </span>
                <span>
                    {props.zip} {props.city}
                </span>
            </p>
            <p>
                <span>
                    Mail: <a href={'mailto:' + props.mail}>{props.mail}</a>
                </span>
                <span>
                    Phone:{' '}
                    <a href={'tel:' + props.phone.replace(/\s/g, '')}>
                        ‪{props.phone}‬
                    </a>
                </span>
            </p>
        </div>
    );
};
