import { Server } from 'socket.io';
export declare class WebSocketServer {
    private io;
    constructor(httpServer: any);
    private setupListeners;
    getSocketInstance(): Server;
    emitToAll(event: string, data: any): void;
    emitToSocket(socketId: string, event: string, data: any): void;
}
