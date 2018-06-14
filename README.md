# ng Bird Report

This project is to demostrate the following basic features of Angular 5+ :
- Components, Templates and Data Binding
- Directives
- Reactive Forms and Template-driven Forms
- Form Validation (both built-in validators and custom validators)
- Routing and Navigating
- Services and Dependency Injection
- Communicating with the Server Using HTTP, Observables, and RxJS
- Pipes (both built-in and custom)
- Lazily loading modules

## Actual Use

This project can develop into a full-blown bird reporting platform where ornithologists and bird-watchers submit bird survey reports. Bird data gathered this way is very valuable when composing bird atlases.

## Project Status

The following fuctionalities are ready for demo:
- Display report list and report details;
- Create new reports;
- Add new birds in reports;
- In report details, filtering bird species by common/uncommon birds;
- In report details, sorting bird species by name or by taxonomic index;
- Login form, Edit Profile form, Logout.

The following functionalities will be added:
- Display an indicator for common/uncommon birds.
- Search reports by bird names.
- Automated testing.

## How to start the server
There are three different ways to start the server. The first way requires Docker, whereas the other two requires node (recommended node version is 8.x or higher: `node --version`).

**Option 1 To Run Using Docker**
```
docker-compose up
```
It will take quite a while to download and build for the first time.

When the server is up, navigate to http://localhost:8181/

To test Login, please use nzhou/anything

**Option 2**
```
npm install
npm run build
npm run server
```
Navigate to http://localhost:8181/

To test Login, please use nzhou/anything

**Option 3**
```
npm install
npm run server
```
Then in another terminal, run:
```
npm start
```
Navigate to http://localhost:4200/

To test Login, please use nzhou/anything