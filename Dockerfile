# docker build -t docker-aurelia-materialize .
# docker run -it --rm --name md-bridge docker-aurelia-materialize
# docker run -d --name md-bridge -p 9000:9000 docker-aurelia-materialize

FROM node:latest

RUN mkdir -p /tmp/bridge
WORKDIR /tmp/bridge

ADD build ./build/
ADD src ./src/
ADD vendor ./vendor/
ADD images ./images/
ADD styles ./styles/
ADD config.js .
ADD gulpfile.js .
ADD index.html .
ADD package.json .
ADD run.sh .

RUN pwd
RUN ls
RUN chmod +x /tmp/bridge/run.sh

EXPOSE 9000
RUN /tmp/bridge/run.sh
