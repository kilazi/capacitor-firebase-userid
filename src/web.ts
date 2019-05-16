import { WebPlugin } from '@capacitor/core';
import { FirebaseUserIDPlugin } from './definitions';

export class FirebaseUserIDPluginWeb extends WebPlugin implements FirebaseUserIDPlugin {
  constructor() {
    super({
      name: 'FirebaseUserIDPlugin',
      platforms: ['web']
    });
  }

  async sendUserID(options: {value: string}): Promise<any> {
    return Promise.resolve(options.value);
  }
}

const FirebaseUserIDPlugin = new FirebaseUserIDPluginWeb();

export { FirebaseUserIDPlugin };
