import React from 'react';
import { Header, Grid, Card, Image, Label } from 'semantic-ui-react';
import { ProjectCard } from './ProjectCard';

import './index.sass';

import azureblob from '../../images/project-azureblob.jpg';
import baresharp from '../../images/project-baresharp.jpg';
import dotfiles from '../../images/project-dotfiles.jpg';

const Projects = () => {
    return (
        <div className='projects'>
            <Header as='h1'>Recent Projects.</Header>
            <Header as='h3'>
                Some of my <span>apps</span>, <span>scribbles</span> and{' '}
                <span>other stuff</span> that I've been part of
            </Header>
            <Card.Group centered itemsPerRow={3}>
                <ProjectCard
                    link='https://github.com/Boxwrapper/azureblob'
                    image={azureblob}
                    title='Azure Blob'
                    description='Library used for abstraction of Azure Blob Storage in my golang projects.'
                    tags={['Go', 'GitHub']}
                />
                <ProjectCard
                    link='https://github.com/Boxwrapper/dotfiles'
                    image={dotfiles}
                    title='Dotfiles'
                    description='Automatic install and maintainance of user configs and packages.'
                    tags={['Shell', 'GitHub']}
                />
                <ProjectCard
                    link='https://github.com/Boxwrapper/BareSharp'
                    image={baresharp}
                    title='Bare Sharp'
                    description='Cross-Platform 2d sprite framework living on top of MonoGame.'
                    tags={['C#', 'GitHub']}
                />
            </Card.Group>
        </div>
    );
};

export { Projects };
