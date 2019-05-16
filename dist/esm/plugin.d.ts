import { FirebaseUserIDPlugin } from './definitions';
export declare class FirebaseUID implements FirebaseUserIDPlugin {
    sendUserID(options: {
        value: string;
    }): Promise<any>;
}
