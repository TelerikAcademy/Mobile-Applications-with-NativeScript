<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Setup NativeScript Environment
## Windows, Linux, OS X

<div class="signature">
    <p class="signature-course">Mobile Applications with NativeScript</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents
-  Using Telerik App Builder
-  Setup the NativeScript CLI on Windows
    - node.js
    - Java and Android SDK
    - Genymotion, avd or Android Device
-  Creating and deploying project
-  NativeScript Development in Sublime Text

<!-- section start -->
<!-- attr: { class:'slide-section', id:'coming-next', showInPresentation: true } -->
<!-- # Telerik Platform
## Telerik App Builder -->

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Telerik App Builder
-   Removes the complexity of NativeScript development
-   You don't need to install any additional SDKs on your computer
    -   Just create Telerik account and you are ready to develop NativeScript Applications
    - [Telerik Platform Site](http://www.telerik.com/platform)
-   App Builder lets you create the applications right in the browser
-   There are even App Builder clients for Visual Studio, Sublime Text, CLI and desktop

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Setup the environment
## Windows, Linux or OS X -->


<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Windows Setup-->


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Setup environment in Windows
-   Node.js 0.10.x, 0.12.x or 4.2.x
-   You will have to install Java (JDK8 or later) and Android SDK on your computer
    - This can be done via the official sites [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html), [Android SDK](http://developer.android.com/sdk/installing/index.html)
    - or via [chocolatey](https://chocolatey.org/)




<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Windows

`1.` Open an administrator command prompt and paste this in order to install chocolatey and than restart the command prompt
```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```
`2.` Installing Java SDK:
- Installs JDK

```
choco install jdk8
```
- Sets the environment variable

```cm
SETX JAVA_HOME "Path to the jdk* install folder" /M
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Windows

`3.` Installing Android SDK
- Installs SDK

```
choco install android-sdk
```

- Sets the environment variable

```
SETX ANDROID_HOME "Path to the Android SDK install folder" /M
```
- Restart command prompt
- Install the required Android SDKs and the Local Maven repository for Support Libraries
```
echo yes | "%ANDROID_HOME%\tools\android" update sdk --filter tools,platform-tools,android-23,build-tools-23.0.2,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Windows

`4.` Device or emulator

- [https://www.genymotion.com/](https://www.genymotion.com/)
- [avd manager](http://developer.android.com/tools/help/avd-manager.html)
- Or you can use your android device

`5.` Install the NativeScript CLI

- In command prompt run following command

```
npm i -g nativescript
```

`6.` Finally to check if everything is ok run  in command prompt

```
tns doctor
```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Linux Setup-->


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Ubuntu

`0.`   Node.js 0.10.x, 0.12.x or 4.2.x

`1.` If you are running on a 64-bit system, install the runtime libraries for the ia32/i386 architecture.
```
sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libstdc++6:i386
```

`2.` Install the G++ compiler.

```
sudo apt-get install g++
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Ubuntu
`3.` Installing Java SDK:
- Installs JDK

```
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

- Choose java installation

```
sudo update-alternatives --config java
```

- Sets the environment variable

```
export JAVA_HOME=$(update-alternatives --query javac | sed -n -e 's/Best: *\(.*\)\/bin\/javac/\1/p')
```


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Ubuntu

`4.` Installing Android SDK
- Installs SDK - go to [Android Downloads](https://developer.android.com/sdk/index.html#Other.).
In the SDK Tools Only section download the package for Linux.
After the download completes, unpack the downloaded archive.

- Sets the environment variable

```
export ANDROID_HOME=Path to Android installation director
```


`5.` Install the required Android SDKs and the Android Support Repository.

```
sudo $ANDROID_HOME/tools/android update sdk --filter tools,platform-tools,android-22,build-tools-22.0.1,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Ubuntu
`6.` Device or emulator

- [https://www.genymotion.com/](https://www.genymotion.com/)
- [avd manager](http://developer.android.com/tools/help/avd-manager.html)
- Or you can use your android device

`7.` Install the NativeScript CLI

- In terminal run following command

```
sudo npm install nativescript -g --unsafe-perm
```

`8.` Finally to check if everything is ok run in terminal

```
tns doctor
```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # OS X Setup-->


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in OS X

`0.`   Node.js 0.10.x, 0.12.x or 4.2.x

`1.` Install Homebrew to simplify the installation process.
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

`2.` Install the latest Node.js 0.10.x, or 0.12.x, or 4.2.x

```
brew install homebrew/versions/node012
```


`3.` Install and configure CocoaPods.

```
sudo gem install cocoapods
pod setup
```

`4.` Install dependencies for iOS development.
- Xcode 5 or later and Command Line Tools for Xcode

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in OS X
`5.` Installing Java SDK:
- Installs JDK
Go to [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and click Download for JDK.

- Sets the environment variable

```
export JAVA_HOME=$(/usr/libexec/java_home)
```


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in Ubuntu

`6.` Installing Android SDK
- Installs SDK

```
brew install android-sdk
```

- Sets the environment variable

```
export ANDROID_HOME=Path to Android installation directory
```

- Install required tools

```
android update sdk --filter tools,platform-tools,android-22,build-tools-22.0.1,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 36px;' } -->
# Setup environment in OS X
`7.` Device or emulator

- [https://www.genymotion.com/](https://www.genymotion.com/)
- Or you can use your android device

`8.` Install the NativeScript CLI

- In terminal run following command

```
npm i -g nativescript
```

`9.` Finally to check if everything is ok run in terminal

```
tns doctor
```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Create you first project
## prepare->build->deploy->{N}-->


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Create you first project
- Create the project

```
tns create <App name> [--path <Directory>] [--appid <App ID>] [--copy-from <Directory>]
```

- Project structure

```
MyApp/
├── app
│   ├── app.css
│   ├── app.js
│   ├── bootstrap.js
│   ├── main-page.js
│   ├── main-page.xml
│   ├── App_Resources
│   │   └── ...
│   └── tns_modules
│       └── ...
└── platforms
    └── ...
```
<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Create you first project

- Add a new target platform to your project.

```
tns platform add <Platform>
```

- Prepare the project
    - IMPORTANT: Always run prepare <Platform> before running build <Platform>, deploy <Platform>, or emulate <Platform>. This ensures that the NativeScript CLI will build an application package with your latest code and resources.

```
tns prepare <Platform>
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Create you first project
- Build the project for the target platform

```
tns build <Platform>
```

- Deploy the project to a device

```
tns deploy <Platform>
```

- If you do not have any physical devices

```
tns emulate <Platform>
```

- And finally all in one solution **prepare->build->deploy**

```
tns run <Platform>
tns run <Platform> --emulator
```

<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 40px;' } -->
# Livesync

- NativeScript CLI can synchronizes changes from your project to an already deployed application on device.

```
tns livesync <Platform> --watch
tns livesync <Platform> --watch --emulator

```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Development Workflow for Sublime Text-->


<!-- attr: { class:'slide', hasScriptWrapper:true, style: 'font-size: 38px;' } -->
# Sublime text Workflow
- Open Preferences->Browse Packages
- In folder User create a new file with name:

```
nativescript.sublime-build
```

- Paste this text in the file (Windows specific).

```
{
  "working_dir": "${project_path}",
  "cmd": ["tns","livesync", "android","--watch"],
  "shell": true
}
```

- Tools -> Build system -> nativescript
- Now you can build your NativeScript application right in Sublime. How cool is that.



<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section',showInPresentation: true } -->
<!-- # Questions
## Mobile Applications with NativeScript -->
[link to the forum](http://telerikacademy.com/Forum/Category/62/ios-mobile-apps)
