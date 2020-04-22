# Personal website

[![Build Status](https://travis-ci.com/oechsler/oechsler.svg?branch=master)](https://travis-ci.com/oechsler/oechsler)

This repository contains the code for my personal website. The application is based on the Vue.js framework, uses TypeScript and can be built as a Docker image.

The resulting Docker image is used for deploying the website in a container.

## Building from Source

The application can be build either as standalone static site or bundled in a Caddy Docker image.

Building the standalone version requires an installation of `Node` and `Yarn`. First dependencies have to be resolved using the `yarn install` command from the cli. Once this is done building a release version can be invoked via `yarn build`. The output of the build is placed into the `/dist` directory relative to the project root.

The bundeled Docker version requires only an installation of `Docker`. A build can be invoked using the `docker build` command from the Docker cli. Changes to the configuration of the Caddy server can be made in the `Caddyfile` file located in the project root.

Copyright &copy; 2020 - Samuel Oechsler
