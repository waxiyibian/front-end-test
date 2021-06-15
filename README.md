# FrontEndTest

This page describes home test for front-end developers.

## 1. The assignment

We'd like you to create an SPA page to present your own resume. the data of the
resume shall include but not limited to following content:

* Basic profile information:
  > `name, age, gender, avatar, phone, email, address.`

* Technical profile information:
  > the technical competence you focus on and master, such as  
  `development language, software framework, network protocol, data structure, algorithm, data base, design patterns.` etc.

* Working experience:

  > * Your role and job responsibility in the project
  > * Important and highlighted output you've done to the project
  > * How this project experience help you to grow up in technical competence

* Education history:

  > * college, major, degree
  > * any award gained

## 2. Instructions

* Clone this repository
* Completion this exercise according to the requirements below, all **optional**  
  requirement could be skipped, however, please finish them as much as possible.
* Compress the project top directory into a zip and submit it.
  > PS. please do not include the `node_modules` directory in the submitted zip.

## 3. Requirements

### 3.1 SCM requirements

* Keep the revision history of development well organized with git.
* Write a .gitignore that is suitable for your project development.
* Write shell scripts to build the project, start local debug environment,  
  or deploy to a production environment.
  
### 3.2 Feature requirements

* Typescript shall be used as the development language
* React or React based framework shall be used
* All object used in source codes shall have corresponding  
  type defined, e.g: a typescript interface describe the resume data object:

```typescript
  interface BasicProfile {
      name: String
      gender: 'male'|'female'|'unknown'

      // some optional field
      age?: number
      phone?: String

      // define more fields according to your own design
  }

  interface WorkExperience {
      // define the fields according to your own design
  }

  interface Resume {
      // unique ID for this resume, its value depends on the backend implementation.
      // e.g.: it could the the national ID or user email address, phone, etc...
      id: string
      basicProfile: BasicProfile
      workExperienceList: WorkExperience[]

      // define more fields according to your own design
  }
```

* The data of the resume shall be fetched through http API.
  * you can use mockjs or related mock framework to intercept the ajax requests and  
    return the mock data when using local development environment
  * (optional) write a simple backend http service to return the resume data.  
    you can write the http server with any lanugage and framework, e.g.:  
    pytnon flask, nodejs, perl, golang, java, php-fpm, etc.
  * (optional) use a database to store the resume data, you can use  
    any database, such as mysql, postgresql, monodb, redis, rocksdb,  
    elapsticsearch etc, the simple http server above shall read the  
    data from the database.

* The "working experience" could be presentd in time sequencing order (most early first)  
  or reversed time order (most recent first) dynamically, by turning on/off a switch, or click a button.

* Add a icon buttion with "back to top" function. The page will scroll to very beginning after click it.

### 3.3 Deploy requirements

* Use local development environment and mock data to run the SPA
* (optional) Use docker-compose with a customized yaml to deploy the bundled services:

  * web server: nginx or apache with built SPA assets: js, css, images.
  * database server used to store the resume data
  * backend http service.
