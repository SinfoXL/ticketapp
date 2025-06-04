import http from 'http';
import { WebSocketServer } from './ws-server';
export declare const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
export declare const socketServer: WebSocketServer;
