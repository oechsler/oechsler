import React from 'react';
import { Hero } from '../../components/hero/Hero';
import { Navigation } from '../../components/navigation/Navigation';
import { Elevator } from '../../components/elevator/Elevator';
import { Page } from '../../components/page/Page';
import { About } from '../../components/about/About';
import { Projects } from '../../components/projects/Projects';
import moment from 'moment';

// Background image assets
import thumbOverview from '../../images/thumb-overview.jpg';
import thumbPlank from '../../images/thumb-plank.jpg';

// Project card mage assets
import projectAzureblob from '../../images/project-azureblob.jpg';
import projectBaresharp from '../../images/project-baresharp.jpg';
import dotfiles from '../../images/project-dotfiles.jpg';

export const Home = () => {
    const renderElevatorStatus = () => {
        return (
            <span>
                Student, developer&nbsp;
                <a
                    href='http://medialesson.de'
                    target='_blank'
                    rel='noopener noreferrer'>
                    @medialesson
                </a>
            </span>
        );
    };

    const renderElevatorButtons = () => {
        return [
            <Elevator.Button
                icon='github'
                href='http://github.com/Boxwrapper'
                description='Fork me on GitHub'
                inverted
            />,
            <Elevator.Button
                icon='xbox'
                href='http://live.xbox.com/de-DE/Profile?gamertag=MuratYilderim'
                description='Add me on Xbox Live'
                inverted
            />,
        ];
    };

    const renderAboutContent = () => {
        return (
            <span>
                <strong>I'm a computer science student</strong> at
                Baden-Wuerttemberg Cooperative State University in Karlsruhe and
                work for medialesson GmbH in Pforzheim. During my spare time I
                like to create awesome apps, you can find a selection of my
                already released projects below, other stuff can be found on
                GitHub.
            </span>
        );
    };

    const renderAboutLanguages = () => {
        return [
            <About.Lang lang='react' />,
            <About.Lang lang='sass' />,
            <About.Lang lang='go' />,
            <About.Lang lang='swift' />,
            <About.Lang lang='visualstudio' />,
            <About.Lang lang='docker' />,
        ];
    };

    const renderAboutImprint = () => {
        return (
            <About.Imprint
                name='Samuel Oechsler'
                street='Spichernstraße'
                number={22}
                zip={75173}
                city='Pforzheim'
                mail='you@oechsler.me'
                phone='07231 4709400'
            />
        );
    };

    const renderProjectCards = () => {
        return [
            <Projects.Card
                link='https://github.com/Boxwrapper/azureblob'
                image={projectAzureblob}
                title='Azure Blob'
                description='Library used for abstraction of Azure Blob Storage in my golang projects.'
                tags={['Go', 'GitHub']}
            />,
            <Projects.Card
                link='https://github.com/Boxwrapper/dotfiles'
                image={dotfiles}
                title='Dotfiles'
                description='Automatic install and maintainance of user configs and packages.'
                tags={['Shell', 'GitHub']}
            />,
            <Projects.Card
                link='https://github.com/Boxwrapper/BareSharp'
                image={projectBaresharp}
                title='Bare Sharp'
                description='Cross-Platform 2d sprite framework living on top of MonoGame.'
                tags={['C#', 'GitHub']}
            />,
        ];
    };

    return (
        <div>
            <Hero
                background={{
                    blur: 8,
                    color: '#fda900',
                    image: thumbOverview,
                    opacity: 0.1,
                }}>
                <Navigation>
                    <Navigation.Item href='#about' text='About me.' />
                    <Navigation.Item href='#projects' text='Recent Projects.' />
                </Navigation>
                <Elevator
                    image='https://secure.gravatar.com/avatar/760c95a88c6d3a3607c12730ca89c792?size=1024'
                    name='Samuel Oechsler'
                    age={moment().diff('1998-11-21', 'years', false)}
                    status={renderElevatorStatus()}
                    inverted>
                    {renderElevatorButtons()}
                </Elevator>
            </Hero>
            <Page anchor='about'>
                <About content={renderAboutContent()}>
                    {renderAboutLanguages()}
                    {renderAboutImprint()}
                </About>
            </Page>
            <Page background={thumbPlank} height={200} />
            <Page anchor='projects' textAlign='center'>
                <Projects>{renderProjectCards()}</Projects>
            </Page>
        </div>
    );
};
