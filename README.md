![](https://www.teguharief.com/img/teguh-arief.png)

# Backend Starter

Starter kit for developing backend with NestJS, MySQL, TypeORM, JWT auth, and Swagger. And implement AuthGuard, and UploadedFile.

## Installation

### From source

```
git clone git@github.com:teguharifudin/Backend-Starter.git
```
```
cd Backend-Starter
```

### Database

User
```
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    username varchar(255),
    password varchar(255),
    email varchar(255),
    role varchar(255),
    PRIMARY KEY (id)
);
```
For the first time, you need to insert:
```
INSERT INTO `user` (`id`, `name`, `username`, `password`, `role`, `email`) VALUES
(1, 'Teguh', 'teguh', '1234', 'admin', 'teguh.arifudin@gmail.com');
```

Product
```
CREATE TABLE product (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255),
    file varchar(255) NOT NULL,
    created datetime NOT NULL,
    updated datetime,
    price varchar(255) NOT NULL,
    adminId int NOT NULL,
    PRIMARY KEY (id)
);
```

#### Developing

```
npm run start
```
```
npm run build
```

Then run the app at http://localhost:3000/api

Go to POST auth/login and put
```
{
    "username": "teguh",
    "password": "1234"
}
```

## Contributing

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/teguharifudin/Backend-Starter/issues) to report any bugs or file feature requests.
