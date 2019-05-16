import { Plugins } from '@capacitor/core';
import { FirebaseUserIDPlugin } from './definitions';

const { FirebaseUserID } = Plugins;

export class FirebaseUID implements FirebaseUserIDPlugin {
    sendUserID(options: {value: string}): Promise<any> {
        return FirebaseUserID.sendUserID(options);
    }
}