# ng Bird Report

This project is to demostrate the following basic features of Angular 2+ (including Angular 4 and 5):
- Components, Templates and Data Binding
- Directives
- Forms (both template-based and reactive) and Validation
- Routing and Navigating
- Dependency Injection, Services
- Communicating with the Server Using HTTP, Observables, and Rx
- Pipes
- Lazily loading modules

## Actual Use

Ornithologists can submit reports of bird survey on this app. Bird data gathered this way is very valuable when composing bird atlases. 

## Project Status

The project is currently a work in progress. The following functionalities are yet to be implemented:
- Display images for birds.
- Display an indicator for common/uncommon birds.
- Validate bird's name according to database. For now, the add-species form works only if you input a valid bird name, i.e. a bird name that exists in the database.
- In report details, provide option for sorting birds according to names or taxonomy.
- In report details, provide option to filter common/uncommon birds.
- Search reports by bird names.

## Getting Started

Be sure you're running the recommended node version, which is 6.3.0+: `node --version`

To start the server:

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