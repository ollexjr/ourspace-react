import React from 'react';
import { Form } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { useAppStore } from 'stores/app';

export const AppSettingsForm: React.FC = observer(() => {
    const app = useAppStore();
    return (
        <div>
            <Form.Check
                //onChange={() => }
                onChange={(v: any) => app.UIconstrainContainer = !app.UIconstrainContainer} // v.currentTarget.value}
                checked={!app.UIconstrainContainer}
                type="switch"
                id="app-fullwidth"
                label="Full width"
            />

            <Form.Check
                onChange={(v: any) => app.UIconstrainContainer = !app.UIconstrainContainer} // v.currentTarget.value}
                checked={!app.UIconstrainContainer}
                type="switch"
                id="app-fullwidth"
                label="Show event debug"
            />
        </div>
    )
})

export const BoardSettingsForm = () => {

}

export const ThreadSettingsForm = () => {

}

export const SidebarSettings: React.FC = () => {
    return (
        <AppSettingsForm />
    )
}