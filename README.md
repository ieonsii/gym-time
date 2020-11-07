# Development Instructions

## Prerequisites

### Docker

Follow [official guide](https://docs.docker.com/docker-for-mac/install/) to install Docker Desktop on Mac. Assign at least 1GB (ideally 2GB) memory to it.

### NodeJS and Yarn

This project requires NodeJS v14.7.0. [N](https://github.com/tj/n) or [NVM](https://github.com/nvm-sh/nvm) package can help to manage multiple versions on the same machine across other projects.

[Yarn](https://classic.yarnpkg.com/lang/en/) should be use for packages management and script running.

## Local Database

On the project root (`/gym-time`), run

```
docker-compose up -d
```

to start a local MongoDB instance for development. To verify the container, run

```
docker ps
```

It should show

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
95dbbda4e24b        mongo:latest        "docker-entrypoint.s…"   40 hours ago        Up 40 hours         0.0.0.0:27017->27017/tcp   mongodb
```

## Commit Guide

When commiting, finish the following sentence: "When commited it will...."

## Folder Structure

Root directory contains the main folder, `apps`. `apps` is for projects that can be individually run on server, container or serverless function.

## API

Prior to starting the api app, the .env file will need to be setup in the api directory

```
MONGO_URI=The mongodb connection string

SENDGRID_API_KEY=sendgrid api key
SENDGRID_FROM_ADDRESS=sendgrid from address
SENDGRID_FROM_NAME=sendgrid from name

MAILGUN_API_KEY=mailgun api key
MAILGUN_DOMAIN=mail gun domain
MAILGUN_FROM_ADDRESS=mailgun from address
```

API in `apps` will then need to be installed via

```
yarn install
```

and then started with

```
yarn start
```

## Frontend

Frontend in `apps` will need to be installed via

```
yarn install
```

and then started with

```
yarn start
```

## Tech Design

### API

The API utilises `express` to post customer data after signing up with `mongoose`. During the sign up process it will send an email via `sendgrid` and if sendgrid api check is not successful it will attempt to send with `mailgun`

### Frontend

The Frontend utilises `react` via `create-react-app`, styled with `material-ui`. `react-hook-form` is used to faciliate the form function with submitting and validation
