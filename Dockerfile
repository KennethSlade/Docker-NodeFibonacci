FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs npm
#add symbolic link because Debian installs 'node' under the 'nodejs' moniker
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

WORKDIR /src

ADD ./src .

RUN npm install

EXPOSE 4000

CMD ["node", "/src/index.js"]