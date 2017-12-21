# toy-ionic

A toy example of an ionic application with some (perhaps unnecessary) extras bundled in.

## Usage

### Prerequisites

- Node version <= 8.0.0 (due to node-sass implementation bug, ref: [https://github.com/ionic-team/ionic/issues/11947](https://github.com/ionic-team/ionic/issues/11947)). For instance Node v6.12.2 Boron is proven to work.
- npm
- Ionic: `npm install -g ionic`
- Cordova: `npm install -g cordova`
- Android SDK (preferably through Android Studio) [see instructions by Ionic](https://ionicframework.com/docs/v1/ionic-cli-faq/#android-sdk). 
- Gradle `brew install gradle`

See the [Ionic Installation Guide](https://ionicframework.com/docs/intro/installation/) for more information on setup.

### Getting started

To start the application in the browser with development tools run `ionic serve --lab`

To start the application on an android device connected by USB, run `ionic cordova run android --device`. Note that you will have to have enabled developer settings for the device and enabled USB debugging, e.g. [http://www.syncios.com/android/how-to-debug-samsung-galaxy-j2-j3-j5-j7.html](http://www.syncios.com/android/how-to-debug-samsung-galaxy-j2-j3-j5-j7.html).

There is also the option to collect logs from the device and implement live reloading. First ensure both the phone and computer are connected to the same wifi network. Then run `ionic cordova run android --device -cl --debug`. Logs will be displayed in the ionic cli logs.

Alternatively, you can also use applications such as 'Ionic view' to run and view applications on devices (such as for iOS).

### Tests

Units tests are run using Karma. You can run unit tests using `npm test`.

End to end tests are run using Protractor. You can run e2e tests using `npm run e2e`.