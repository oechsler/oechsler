import React, { ReactNode } from 'react';
import { Header, Grid, Card, Image, Label } from 'semantic-ui-react';
import { ProjectsCard } from './ProjectsCard';

import './index.sass';
import { typeFilter } from '../../utils/typeFilter';

interface ProjectsProps {
    children?: ReactNode;
}

const Projects = (props: ProjectsProps) => {
    return (
        <div className='projects'>
            <Header as='h1'>Recent Projects.</Header>
            <Header as='h3'>
                Some of my <span>apps</span>, <span>scribbles</span> and{' '}
                <span>other stuff</span> that I've been part of
            </Header>
            <Card.Group centered itemsPerRow={3}>
                {typeFilter(props.children, [ProjectsCard])}
            </Card.Group>
        </div>
    );
};

Projects.Card = ProjectsCard;
export { Projects };
