# Prototype of CellFabrik website

This is a static website based on React and Aframe.
Changes of the content are introduced through pull requests (pages are in content folder, navigation in App.js)

# setting up

To build the project you have to install nodejs ( https://nodejs.org/en/download/ )  and yarn ( https://classic.yarnpkg.com/en/docs/install/#debian-stable ). \
After than run:

### `yarn install`

to install all required dependencies. 
And

### `yarn start`

To run the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Before pushing changes to the website do not forget to do:

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### publish:

Run the following commands:
```bash
git add --all
git commit -am "change description"
git push
```
to update the website.