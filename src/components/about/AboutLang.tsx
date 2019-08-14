import React from 'react';
import { Grid } from 'semantic-ui-react';

interface AboutLangProps {
    lang: string;
}

export const AboutLang = (props: AboutLangProps) => {
    return (
        <Grid.Column>
            <i className={'devicons devicons-' + props.lang} />
        </Grid.Column>
    );
};
