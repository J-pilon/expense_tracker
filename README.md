# CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation
 * Configuration
 * Startup
 * Dependencies


# INTRODUCTION
------------

Welcome to Expense Tracker! As a user, you can view all your previous expenses, add new expenses, and delete unwanted ones.


# INSTALLATION
------------
1. clone from repository to your local machine: [expense tracker repo](https://github.com/J-pilon/expense_tracker)
```sh
git clone git@github.com:J-pilon/expense_tracker.git
```

2. Install dependencies
```sh
npm install
```

# CONFIGURATION
-------------

Configure MySQL database
  * username = renaissance
  * password = 1234
  * database = expense_tracker
  * table = expenses

# STARTUP
-------------

Open two terminals. One terminal will be opened with expense_tracker/api and the other with expense_tracker/client.

Use ``` npm start ``` to start the node server and to start the react application.

# DEPENDENCIES

* mysql
* morgan
* cors
* express
* react
* axios
