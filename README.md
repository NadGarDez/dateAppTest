# Getting Started with Lecafé Expo Project

Thank you for checking out the Lecafé Expo project! Below are the instructions to get it up and running on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

* **Node.js:** Ensure you have Node.js (version 18 or later recommended) installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).
* **npm** or **yarn:** Node.js comes with npm (Node Package Manager) by default. You can also use yarn, which can be installed globally using `npm install --global yarn`.
* **Expo CLI:** The Expo Command Line Interface is essential for working with Expo projects. Install it globally using either npm or yarn:

    ```bash
    npm install --global expo-cli
    # or
    yarn global add expo-cli
    ```
* **A Mobile Development Environment (Optional but Recommended for Running on Devices/Simulators):**
    * **iOS:** If you want to run Lecafé on an iOS simulator or a physical iOS device, you'll need to have Xcode installed (available on macOS via the App Store).
    * **Android:** To run Lecafé on an Android emulator or a physical Android device, you'll need to have the Android Studio and its SDKs installed. You can download Android Studio from [https://developer.android.com/studio](https://developer.android.com/studio).

## Installation

Follow these steps to install the Lecafé project dependencies:

1.  **Clone the Repository:** If you haven't already, clone this repository to your local machine using Git:

    ```bash
    git clone <repository_url>
    cd lecafe
    ```

    Replace `<repository_url>` with the actual URL of this GitHub repository.

2.  **Install Dependencies:** Navigate to the `lecafe` directory in your terminal and install the required npm or yarn packages.

    * **Using npm:**

        ```bash
        npm install
        ```

    * **Using yarn:**

        ```bash
        yarn install
        ```

    This command will download and install all the necessary libraries and dependencies listed in the `package.json` file.

## Running the Lecafé Expo Project

Once the dependencies are installed, you can run the Lecafé project in several ways:

1.  **Run on an Expo Go App (Recommended for Quick Testing):**

    * Make sure you have the Expo Go app installed on your iOS or Android device. You can find it on the App Store (iOS) and Google Play Store (Android).
    * In your terminal, within the `lecafe` directory, run:

        ```bash
        npx expo start
        # or
        yarn start
        ```

    * This will open the Expo Developer Tools in your web browser.
    * **To view Lecafé on your device:**
        * **Scan the QR code:** Use the Expo Go app on your device to scan the QR code displayed in the browser or terminal. The app will then open Lecafé.
        * **Run on a simulator/emulator:** If you have Xcode or Android Studio set up, you can press `i` (for iOS simulator) or `a` (for Android emulator) in the terminal where Expo is running.

2.  **Run on iOS Simulator:**

    * Ensure you have Xcode installed.
    * In your terminal, within the `lecafe` directory, run:

        ```bash
        npx expo run:ios
        # or
        yarn ios
        ```

    * This command will build the iOS app for Lecafé and open it in the iOS simulator.

3.  **Run on Android Emulator:**

    * Ensure you have Android Studio and an Android emulator configured.
    * In your terminal, within the `lecafe` directory, run:

        ```bash
        npx expo run:android
        # or
        yarn android
        ```

    * This command will build the Android app for Lecafé and open it in your running Android emulator.

## Development

As you make changes to the Lecafé project files, the Expo Go app or the simulator/emulator should automatically reload the application (hot reloading).

## Further Information

* **Expo Documentation:** For more detailed information about Expo and its features, refer to the official documentation: [https://docs.expo.dev/](https://docs.expo.dev/)
* **Expo CLI Reference:** Learn more about the Expo CLI commands: [https://docs.expo.dev/more/expo-cli/](https://docs.expo.dev/more/expo-cli/)

Enjoy brewing with Lecafé!