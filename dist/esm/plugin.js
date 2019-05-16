import { Plugins } from '@capacitor/core';
const { FirebaseUserID } = Plugins;
export class FirebaseUID {
    sendUserID(options) {
        return FirebaseUserID.sendUserID(options);
    }
}
//# sourceMappingURL=plugin.js.map