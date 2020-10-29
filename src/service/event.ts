export const WEBSOCKET_HOST = `wss://event.ourspaces.app/api/v1/socket`;
class EventService {
    constructor() {}

    shouldRetry: boolean = true;
    retryBucket: number = 0;

    token?: string;
    socket?: WebSocket;
    attachEvents() {
        if (!this.socket)
            return;

        this.socket.addEventListener('close', (ev) => {
            console.log("[socket] close: ", JSON.stringify(ev))
            this.socket = undefined;
            if (this.retryBucket < 10) {
                this.retryBucket += .8;
            }
        });
    }

    getSocket(token?: string): WebSocket {
        if (this.socket) {
            return this.socket;
        }
        if (!token) {
            return new WebSocket(WEBSOCKET_HOST);
        }
        return new WebSocket(WEBSOCKET_HOST, ["Bearer", token]);
    }

    setToken(s: string) {
        this.token = s;
    }

    open() {
        this.socket = this.getSocket(this.token);
        return this.socket;
    }

    auth() {

    }
}