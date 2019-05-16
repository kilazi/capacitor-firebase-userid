#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>
//#import <FirebaseCore/FirebaseCore.h>
//#import <FirebaseAnalytics/FirebaseAnalytics.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FirebaseUserID, "FirebaseUserID",
           CAP_PLUGIN_METHOD(sendUserID, CAPPluginReturnPromise);
)
