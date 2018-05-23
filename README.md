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

The following fuctionalities are ready for demo:
- Display report list, report details;
- Create new reports;
- Add new birds in report details;
- In report details, filtering bird species by common/uncommon birds;
- In report details, sorting bird species by name or by taxonomic index;
- Login form, Edit Profile form, Logout.

The following functionalities will be added:
- Display images for birds.
- Display an indicator for common/uncommon birds.
- Validate bird's name according to database. For now, the add-species form works only if you input a valid bird name, i.e. a bird name that exists in the database.
- Search reports by bird names.

## To start the server

Recommended node version is 6.3.0+: `node --version`

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