declare global {
    interface PluginRegistry {
        FirebaseUserID?: FirebaseUserIDPlugin;
    }
}
export interface FirebaseUserIDPlugin {
    sendUserID(options: {
        value: string;
    }): Promise<any>;
}
