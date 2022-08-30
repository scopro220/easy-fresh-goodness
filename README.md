
# Easy Fresh Goodness

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

![Express](https://img.shields.io/badge/Express-404D59?style=flat&logo=express&logoColor=61DAFB)

![Node](https://img.shields.io/badge/Node-43853D?style=flat&logo=node.js&logoColor=white)

![React_Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)

![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)

Website: [Easy Fresh Goodness](http://easy-fresh-goodness.vercel.app/)

Hosted on [Vercel](https://vercel.com/)
## API Reference

### Get recipes

```http
  GET /api/search
```

| Parameter    | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| NONE | n/a | n/a |

#### Reponse

```http
  Status: 200 OK
```
### Get recipe

```http
  GET /api/recipe/:recipeid
```

| Parameter    | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| `recipeid` | `string` | **Required**. Fetch item of recipeid |

#### Reponse

```http
  Status: 200 OK
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file set to the backend address.

`SPOONACULAR_API_KEY`


## Features

- Search 
- Quick search
- Individual Recipe Pages
    - Step by step instructions
    - Nutrition
    - Ingredients


## NPM Packages
- [react](https://reactjs.org/)
- [bootstrap](https://getbootstrap.com/)
- [reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- [react-router](https://reactrouter.com/)
- [node](https://nodejs.org/en/)
- [express](https://expressjs.com/)
## Screenshots

Landing Page

![Imgur](https://i.imgur.com/6JSyax3.png)

Search Page

![Imgur](https://i.imgur.com/gs0gf2z.png)

Search Results Page

![Imgur](https://i.imgur.com/XAhdQVG.png)

Recipe Page

![Imgur](https://i.imgur.com/SibQn9k.png)
## Author

- [Scott Provence](https://www.github.com/scopro220)
