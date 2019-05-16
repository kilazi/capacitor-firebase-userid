// import '@capacitor/core';

// declare module '@capacitor/core' {
//   interface PluginRegistry {
//     FirebaseUserID?: FirebaseUserIDPlugin;
//   }
// }

declare global {
  interface PluginRegistry {
    FirebaseUserID?: FirebaseUserIDPlugin;
  }
}

export interface FirebaseUserIDPlugin {
  // echo(options: { value: string }): Promise<{value: string}>;
  sendUserID(options: {value: string}): Promise<any>;
}
