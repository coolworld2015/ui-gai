# UI GAI
git clone https://github.com/coolworld2015/ui-gai.git
-------------------------------------------------------------------------------------------------
npm i
-------------------------------------------------------------------------------------------------
npm run watch
-------------------------------------------------------------------------------------------------
npm run release
-------------------------------------------------------------------------------------------------
npm run tdd
-------------------------------------------------------------------------------------------------
npm prune
-------------------------------------------------------------------------------------------------
git config user.name "coolworld2015"
-------------------------------------------------------------------------------------------------
git config user.email "wintermute2015@ukr.net"
-------------------------------------------------------------------------------------------------
Requirements:
-------------------------------------------------------------------------------------------------
{Node.js,Android: Android SDK}
-------------------------------------------------------------------------------------------------
npm i cordova -g
-------------------------------------------------------------------------------------------------
cordova create android_test
-------------------------------------------------------------------------------------------------
cd android_test
-------------------------------------------------------------------------------------------------
cordova platform add android
-------------------------------------------------------------------------------------------------
cordova build android
-------------------------------------------------------------------------------------------------
cd platforms\android\build\outputs\apk
-------------------------------------------------------------------------------------------------
Move apk to Genymotion for running in VM
-------------------------------------------------------------------------------------------------
D:\android_test\config.xml add <icon src="logo.png" />
-------------------------------------------------------------------------------------------------
For Google AdMob use AdMob Plugin Pro
-------------------------------------------------------------------------------------------------
https://github.com/floatinghotpot/cordova-admob-pro
-------------------------------------------------------------------------------------------------
cordova plugin add cordova-plugin-inappbrowser
-------------------------------------------------------------------------------------------------