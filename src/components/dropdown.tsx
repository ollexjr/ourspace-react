import React from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// Helper
//const StringIsNumber = value: string => isNaN(Number(value)) === false;

// Turn enum into array
export function EnumToArray(e: any) {
    return Object.keys(e)
        .map(key => e[key]);
}


export interface ButtonDropdownItem {
    label: string,
    icon: any,
    key?: string,
    onClick?: () => any
}

export const DropdownEnum: React.FC<{
    icon?: any,
    title: string,
    labels: Array<ButtonDropdownItem>,
    //labels: Array<string>,
    values: Array<number>,
    value: number,
    onSelect: (key: number) => void
}> = ({ title, values, value, labels, onSelect }) => {
    //const history = useHistory();
    return (
        <DropdownButton
            variant="outline-muted"
            //onSelect={(key, event) => onSelect(key)
            id="dropdown-basic-button"
            title={labels[value].label}>
            <Dropdown.Header>{title}</Dropdown.Header>
            {values.map(t => labels[t] &&
                <Dropdown.Item eventKey={labels[t].key} onClick={() => onSelect(t)}>
                    {labels[t].icon && <FontAwesomeIcon icon={labels[t].icon} />}
                    {labels[t].label ?? t}
                </Dropdown.Item>
            )}
        </DropdownButton>
    )
}


export interface DropDownItem {
    label: string,
    key: string,
}

export const Dropdown2: React.FC<{
    items: Array<DropDownItem>,
    onSelected: (key: number) => void,
    value: number
}> = ({ items }) => {
    const set = (t: string | null, e: any): void => {
        //store.filters.sortTime = t!
    }
    return (
        <DropdownButton variant="outline-white" id="dropdown-basic-button" title={""}>
            <Dropdown.Header>Time span</Dropdown.Header>
            {items.map((t) => <Dropdown.Item eventKey={t.key} onSelect={set}>{t.label}</Dropdown.Item>)}
        </DropdownButton>
    )
}

const CustomToggle = React.forwardRef<{}, { onClick: (e: any /*React.MouseEvent<HTMLAnchorElement, MouseEvent>*/) => any }>(({ children, onClick }, ref) => (
    <Button
        //
        variant="outline"
        ref={ref as any}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        <FontAwesomeIcon icon={faEllipsisV} />
    </Button>
));

export const ButtonDropdown: React.FC<{
    //values: Array<any>,
    //onSelect: (key: number) => any,
    items: Array<ButtonDropdownItem>
}> = ({ items }) => {
    return (
        <Dropdown
            title=""
        //variant="white"
        >
            <Dropdown.Toggle className="text-center" variant="white" as={CustomToggle} />
            <Dropdown.Menu>
                {items.map((e) => (
                    <Dropdown.Item eventKey={e.label} onSelect={e.onClick}>
                        <FontAwesomeIcon className="ml-2" icon={e.icon ?? undefined} />
                        {e.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
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