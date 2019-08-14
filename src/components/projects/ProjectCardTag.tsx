import React from 'react';
import { Label } from 'semantic-ui-react';
import { ProjectCardTagColors } from './ProjectCardTagColors';
import { ProjectCardTagLabels } from './ProjectCardTagLabels';

interface ProjectCardTagProps {
    label: ProjectCardTagLabels;
}

const ProjectCardTag = (props: ProjectCardTagProps) => {
    const label = props.label;
    const color = ProjectCardTagColors[label];

    const labelsToDeviconName = (label: ProjectCardTagLabels) => {
        const labelMap: Record<string, string> = {
            'C#': 'visualstudio',
            GitHub: 'github_badge',
            Shell: 'terminal',
            iOS: 'apple',
            macOS: 'apple',
        };
        const result = labelMap[label];

        return (result ? result : label).toLocaleLowerCase();
    };

    return (
        <Label color={color}>
            <i className={`devicons devicons-${labelsToDeviconName(label)}`} />
            {label}
        </Label>
    );
};

export { ProjectCardTag };
