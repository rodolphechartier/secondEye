# Requirements

* Android SDK (API >= 26)
* ADB and Android drivers
* Java
* NodeJS
* Yarn (or NPM but Yarn is better)

# Packages

## Yarn

It's recommanded to use yarn:

    sudo npm i -g yarn

## Install packages

In the project directory, execute the following command (recommanded):

    yarn install

or with (deprecated):

    npm install


# Run

Run the project with this command, where `<platform>` can be `android` or `ios`:

    react-native run-<platform>

Exemple for android devices:

    react-native run-android

# DONE AND TODO

Task                | Description | Status
----                |----|----
Take picture        |Take a picture from app with the camera|Done
Get picture         |Take a picture from the device library|Done
Select detection    |Select the detection type for a picture|Done
Data flow           |Pass data between pages, and get it in the results page|TODO
API calls           |Add API call to results page and then display results|TODO
Login               |Add login page|TODO