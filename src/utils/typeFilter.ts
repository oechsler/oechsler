import React, { ReactNode, ReactElement } from 'react';

export default (
    children: ReactNode,
    filters: any[],
    negate: boolean = false
): any => {
    let filtered = React.Children.map(children as ReactElement, (elem) => {
        // Evaluate each element with each filter
        let valid = false;
        filters.forEach((filter) => {
            if (valid) return;
            valid = elem.type.toString() === filter.toString();
        });

        // Return the element if the filter is valid
        if (negate) return !valid ? elem : null;
        return valid ? elem : null;
    });
    // Return undefined if the element array is empty
    return filtered.length > 0 ? filtered : undefined;
};
