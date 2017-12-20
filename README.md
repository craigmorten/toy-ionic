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

To start the application on an android device run `ionic cordova run android --device`. Note that you will have to have enabled developer settings for the device and enabled USB debugging, e.g. [http://www.syncios.com/android/how-to-debug-samsung-galaxy-j2-j3-j5-j7.html](http://www.syncios.com/android/how-to-debug-samsung-galaxy-j2-j3-j5-j7.html).
