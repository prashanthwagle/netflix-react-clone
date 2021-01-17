# About

A Netflix Clone using React, Redux, firebase and styled-components

# Description

I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

I used compound components (just a design pattern) to build my components, and there's over 10 examples as to how these are used. The styling is all handled via styled components. Using compound components made my actual dumb components really easy to test. Used indexing and treeshaking for proper organization of files which implies better maintainability and readability.

# Demo

![image](https://github.com/prashanthwagle/netflix-react-clone/blob/master/screenshots/Netflix%20Clone.gif)


# How to Run?

1. Clone the repository and navigate to the repository. (cd netflix-react-clone)
2. Install the dependencies (npm install)
3. Create a new folder 'lib' inside 'src'. (mkdir src/lib)
4. Create a file firebase.prod.js inside lib and fill in the following structure

```
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

```

5. Create a firebase project and get the project-credentials and fill them in the config object.
6. Start the prokect (npm start)
7. Enjoy!

##### More Coming Soon. Currently in Development
