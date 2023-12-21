# Todolist Backend 

## Get Started

- Clone repository
  ```
  git clone https://github.com/danielcm585/todolist-backend.git
  cd todolist-backend
  ```

- Install dependencies
  ```
  npm install
  ```

- Setup database server environment
  - Creating `.env` file in form of `.env.sample`
  - Initialize database 
    - Run mysql 
      ```
      mysql -u <username> -p
      ```
    - Create database
      ```
      create database todolist;
      ```

- Complete the environment variables
  - Copy from `.env.sample`
    ```
    cp .evn.sample .env
    ```
  - Fill in the variables with the correct configurations

- Start app
  ```
  npm start
  ```