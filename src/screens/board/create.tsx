import React from 'react';
import { useAppStore } from 'stores/app';
import { ScreenScaffold } from 'components/screen';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const ScreenCreate: React.FC<{ onSubmit: () => Promise<any> }> = ({ onSubmit }) => {
    const app = useAppStore();
    
    return (
        <ScreenScaffold title="Create a board">
            
        </ScreenScaffold>
    )
}

export default ScreenCreate;