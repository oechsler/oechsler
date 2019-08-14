import React, { ReactNode } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { AboutLang } from './AboutLang';
import { AboutImprint } from './AboutImprint';
import { typeFilter } from '../../utils/typeFilter';

import './index.sass';

interface AboutProps {
    children?: ReactNode;

    content: ReactNode;
}

const About = (props: AboutProps) => {
    return (
        <div className='about'>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <Header as='h1'>About me.</Header>
                        <p>{props.content}</p>
                        <Header as='h3'>Languages</Header>
                        <Grid className='about-langs'>
                            <Grid.Row>
                                {typeFilter(props.children, [AboutLang])}
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {typeFilter(props.children, [AboutImprint])}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

About.Lang = AboutLang;
About.Imprint = AboutImprint;
export { About };
