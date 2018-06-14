FROM node:9-alpine
COPY . /ng-bird-report

WORKDIR /ng-bird-report/
RUN npm install && \
    npm run build

CMD [ "sh", "-c", "npm run server" ]