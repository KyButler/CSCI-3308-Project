# CSCI-3308-Project

Team Number - 203-1
Team Name - Rocket Scientists
Team Members -  Kyran Butler, Jia Jian, Qiuyang Fu, Tahmina Ahmad, Justin Chen, Sahil Shah
Application Name - Chat Application

![Image of Chat App](/logo.png)

### Repo Organization

* Chat-Application
  * client
    * all client related files, such as pages and styles.
    * so this package.json had dependencies related to the client
  * the rest is server related, so this package.json had dependencies related to the server
  * the readme contained in this folder is generated on creation of the react app, unmodified.
* Milestone-Submissions
  * all of the milestones
* Team-Meeting-Logs
  * mostly unused meeting logs, communication was facilitated in Discord making this not necessary
* .gitignore - files to ignore
* README.md - this file
* logo.png - logo

### How to Run

* Must have NPM and Postgres installed
  * Download repository
  * Run `npm install` in root
  * Run `npm install` in client
  * Create a postgres DB called `chatapp`
  * Run `npx sequelize db:migrate` (or NPM, NPX works for me) 
  * Make a file called `.env` (many things go here, but at least:)
`SECRET=e879742b62b6b3020da1bce7ea4abb06051541462afa92348cccbae87cac693740c64094031783a74c06eec9c35e1cbeb520c1f9327bda1cbfe716ff50620269`
`PG_PASSWORD=insertpostgrespasswordhere`
  * Run `npm start` in root to start server
  * Run `npm start` in client to startup react
  
### CI

 * Heroku was used, however because the code is not in the root of the repository, it was difficult to do CI. Instead, manual pushes were initiated using the Chat-Application folder as the root to Heroku. 
 * link is:
 `j.mp/kyranchat`
