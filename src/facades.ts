import { Plugins } from '@capacitor/core';
import { FirebaseUserIDPlugin } from './definitions';


const plugin: FirebaseUserIDPlugin = Plugins.FirebaseUserID;

/**
 * Call the sendUID method to send the UserID to Firebase Analyticss
 * @param value The internal UID
 */
export const sendUserID = (value?: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        plugin.sendUserID({ value: value }).then(res => {
            resolve(res);
        }, err => {
            reject(err);
        })
    })
}