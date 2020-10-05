import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// Helper
//const StringIsNumber = value: string => isNaN(Number(value)) === false;

// Turn enum into array
export function EnumToArray(e: any) {
    return Object.keys(e)
        .map(key => e[key]);
}

export const DropdownEnum: React.FC<{
    icon?: any,
    title: string,
    labels: Array<string>,
    values: Array<number>,
    value: number,
    onSelect: (value: number) => void
}> = ({ title, values, value, labels, onSelect }) => {
    //const history = useHistory();
    return (
        <DropdownButton variant="outline-muted" id="dropdown-basic-button" title={labels[value]}>
            <Dropdown.Header>{title}</Dropdown.Header>
            {values.map(t => <Dropdown.Item onClick={() => onSelect(t)}>{labels[t] ?? t}</Dropdown.Item>)}
        </DropdownButton>
    )
}


export interface DropDownItem {
    label: string,
    key: string,
}

export const DropDown: React.FC<{ items: Array<DropDownItem>, onSelected: (key: number) => void, value: number }> = ({ items }) => {
    const set = (t: string | null, e: any): void => {
        //store.filters.sortTime = t!
    }
    return (
        <DropdownButton variant="outline-muted" id="dropdown-basic-button" title={""}>
            <Dropdown.Header>Time span</Dropdown.Header>
            {items.map((t) => <Dropdown.Item eventKey={t.key} onSelect={set}>{t.label}</Dropdown.Item>)}
        </DropdownButton>
    )
}

/*
export const ThreadFilterTime: React.FC = observer(() => {
    const store = useBoardStore();
    return (
        <DropDown
            items={[]}
            value={store.filters?.sortDirection ?? 0}
            onSelected={(k) => store.filters.sortDirection = k} />
    )
})*/