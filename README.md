
## Title: Round Table 

Dungeons and Dragons Campaign, Character, and Group 


## Description

Dungeons & Dragons "D&D", can be an intimidating game for any new player. We set out to make an app to simplify the basics necessary to play D&D and implement those basics in Dungeons and Dragons Beyond (See Below Link).

## References

Click [here](https://www.dndbeyond.com/) to visit a more immersive website for everything dungeons and dragons.

## DEPLOYED Site

Click [here](https://ginseng-pirate-12.herokuapp.com/) to visit our deployed Heroku website.

## Our Working Repo

Click [here](https://github.com/tjtahmas/Project-2) to visit our deployed Heroku website.

## Contributors/Partners

[Landon Hinkle](https://github.com/llh9), (https://www.linkedin.com/in/landon-hinkle-7b5907137/)

[TJ Tahmassebi](https://github.com/tjtahmas), (https://www.linkedin.com/in/thomas-tahmassebi-79880714a/)

[Ian Greenblott](https://github.com/zartender), (https://www.linkedin.com/in/greenblott)

## Overview of Technology 

Rather than hardcode the HTML for many, many pages, we can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. This is the **View** layer in the MVC framework. The template engine we utilized is Handlebars.js.

The **Model** is the data layer of the application. It is concerned with the structure of the database and the logic used to retrieve that data. We implemented Sequelize as the ORM for querying the database.

Last but not least is the **Controller**. Think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update, or delete data, and then returns the results of that query to the user via the View layer.


## Key Technologies In App

* [Model-View-Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

* [Sequelize model](https://sequelize.org/master/class/lib/model.js~Model.html)

* [Handlebars.js](https://www.npmjs.com/package/express-handlebars)

  * [Expressions](https://handlebarsjs.com/guide/expressions.html)

  * [Built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

  * [Partials](https://handlebarsjs.com/guide/partials.html#basic-partials)

  * [Custom helpers](https://www.npmjs.com/package/express-handlebars#helpers)


## Technologies for future updates


* Sessions and Cookies

  * [express-session](https://www.npmjs.com/package/express-session)

  * [connect-session-store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize) 

  * [Express.js session cookie](https://github.com/expressjs/session#cookie)

* [Express.js middleware](https://expressjs.com/en/guide/using-middleware.html)


## Screenshots

[Creating Character](screenshots/image-create-character.png)

[Group Info](screenshots/image-group-info.png)

[Login:Before Form](screenshots/image-round-table-login-1.png)

[Form Gen](screenshots/image-round-table-login-2.png)