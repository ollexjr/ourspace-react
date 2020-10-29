export const WEBSOCKET_HOST = `wss://event.ourspaces.app/api/v1/socket`;

self.addEventListener(
    "ping",
    function (e: any) {
        self.postMessage('pong');
    },
    false
);