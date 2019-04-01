## Ensure vehicle insurance app:

This is a proof of concept frontend of a vehicle insurance app. The main aim of this is to create an app
that is easy to modify through both json files and creating react components.

### Goals:

- Must be able to easily add and amend questions by modifying data files rather than JSX
- Must be able to easily add and amend pages by modifying data files rather than JSX
- Must be able to easily amend page layouts by modifying data files rather than JSX
- Must be able to easily add validation rules by writing a validation rule in isolation and referencing it in the question definition
- Must be easily extendible with custom JSX components that can be referenced in page layouts
- Must support multiple languages
- Must be able to switch between Car, Van and Bike question sets

### To run:

- Clone repo
- From data/mockApi run 'json-server --watch db.json --routes routes.json'
- From the root directory run 'yarn dev'
