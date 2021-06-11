
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (100) UNIQUE NOT NULL,
    "access_level" VARCHAR (6) DEFAULT 'Member'
);

CREATE TABLE "journal" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "date" DATE NOT NULL,
  "photo" VARCHAR (500),
  "entry" VARCHAR (1000)
);