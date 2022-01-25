# D&D Round Table

## Description

D&D Round Table is a web app for creating and organizing new Dungeons and Dragons groups to prepare your players for your first session. It utilizes Node.js, a MySQL database, and Handlbars for the views (along with heavy use of Bootstrap for the styling). D&D Round Table was built to give new players and Dungeon Master's a place to communicate effectively before they start playing, with information like meeting times, the current campaign, and links to Roll20, Discord, and the player's DnDBeyond pages. I practiced my skills with JavaScript models (using Sequelize), REST APIs (with Express), database creation (seed files, etc.), and creating views with Handlebars while creating this project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

If you wish to improve upon D&D Round Table or tweak it for your own uses, begin by forking this repository in GitHub for yourself, or download the files from this repository. Once you have the files set up locally on your own device, open your preferred editor (I used VSCode) and open a terminal in the outermost folder. Run "npm install" to download the appropriate packages (assuming your Node.js is up to date), and launch the server either using "npm start" or "nodemon server.js" (nodemon is best for development). From here, navigate to https://localhost:3001 in your preferred browser to view the application. Happy Hacking!

## Usage

To visit D&D Round Table, check out the deployed site here: https://ginseng-pirate-12.herokuapp.com/. I will attempt to keep this site as up to date ass possible, although the repository may be ahead at times.

First, you will want to create a new user for yourself. Begin by clicking "Sign Up" at the bottom of the login page. Enter your username, email, and password to create a new user. Once you've created a new user, select 'Login' to enter your username and password, and click 'Enter Realm' to navigate to the homepage. 

Currently, you can:
 - View your groups
 - Create a new group for yourself
 - Edit group information (if you are the DM)

Soon:
 - Add group by ID
 - Create a new Character as a player
 - Edit Character
 - Delete Group (if you are the DM)
 - Delete Character (if you are the owner)

## Credit
The GitHub Repository is at https://github.com/tjtahmas/Project-2

Ian Greenblott ([Zartender](https://github.com/Zartender) on GitHub) and Landon Hinkle ([llh9](https://github.com/llh9) on GitHub) helped create this project along with myself as part of The Ohio State University Full Stack Coding Bootcamp for our second project.

If you have any questions or comments about the project, feel free to contact me at tjtahmas@gmail.com

## License

MIT License

Copyright (c) 2021 Thomas Tahmassebi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---