import React from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';
import { Brand } from '../brand/Brand';

import './index.sass';
import { FooterAzure } from './FooterAzure';

interface FooterProps {
    inverted?: boolean;
}

const Footer = (props: FooterProps) => {
    return (
        <div className='footer'>
            <Segment
                className='footer-segment'
                vertical
                inverted={props.inverted}>
                <Container className='footer-container'>
                    <Grid>
                        <Grid.Row columns='equal'>
                            <Grid.Column>
                                <Brand size={20} />
                                <p>
                                    Created with React and &#9829;{' '}
                                    <span>in Pforzheim</span>
                                </p>
                                <p>Copyright &copy; 2019 Samuel Oechsler</p>
                            </Grid.Column>
                            <Grid.Column>
                                <FooterAzure />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
};

export { Footer };
