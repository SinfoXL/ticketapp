export declare class GraphQLServer {
    private apolloServer;
    url: string;
    constructor();
    start(): Promise<void>;
}
