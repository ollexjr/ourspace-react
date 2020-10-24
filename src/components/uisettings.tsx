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

            <small>Dev settings</small>

            <Form.Check
                onChange={(v: any) => app.UIshowEventDebug = !app.UIshowEventDebug} // v.currentTarget.value}
                checked={app.UIshowEventDebug}
                type="switch"
                id="app-event-debug"
                label="Show event debug"
            />

            <Form.Check
                onChange={(v: any) => app.UIanimatedHeader = !app.UIanimatedHeader} // v.currentTarget.value}
                checked={app.UIanimatedHeader}
                type="switch"
                id="app-animated-header"
                label="Animated header"
            />

            <Form.Check
                onChange={(v: any) => app.UIdarkTheme = !app.UIdarkTheme} // v.currentTarget.value}
                checked={app.UIdarkTheme}
                type="switch"
                id="app-theme"
                label="Dark Mode"
            />
        </div>
    )
})

export const SidebarSettings: React.FC = () => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <AppSettingsForm />
            </div>
        </div>
    )
}