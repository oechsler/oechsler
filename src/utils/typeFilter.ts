import React, { ReactNode, ReactElement } from 'react';

export type FilteredNode = {} | null | undefined;

export const typeFilter = (
    children: ReactNode,
    filters: ReactNode[],
    include = false,
): FilteredNode[] | null => {
    const filtered = React.Children.map(children as ReactElement, (elem) => {
        // Evaluate each element with each filter
        let filterValidated = false;
        filters.forEach((filter) => {
            if (filterValidated || filter == null) return;
            filterValidated = elem.type.toString() === filter.toString();
        });

        // Return the element if the filter is valid
        if (include) return !filterValidated ? elem : null;
        return filterValidated ? (elem as ReactNode) : null;
    });

    // Return undefined if the element array is empty
    return filtered.length > 0 ? filtered : null;
};
