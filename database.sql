
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (100) UNIQUE NOT NULL,
    "access_level" INT DEFAULT '0'
);

CREATE TABLE "journal" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "date" DATE NOT NULL,
  "photo" VARCHAR (500),
  "entry" VARCHAR (1000)
);

SELECT * FROM "user";

INSERT INTO "user" ("username", "password", "email")
VALUES ('wells', 'MasterCav','wells19d@gmail.com');

INSERT INTO "user" ("username", "password", "email")
VALUES ('mccloud', 'Zoey','amy.mccloud@gmail.com');

INSERT INTO "journal" ("user_id","date","entry")
VALUES ('1', '2021/01/16','Micah''s Birthday. After work I helped Amy with Micahs cake. We didn''t want to spend a lot of money on it since we where taking him out for dinner. He really wanted something with Minecraft so Amy decided she wanted to make the cake herself. However, it didn''t cool properly, and it fell apart when she tried to get it out of the pan. After I got changed from work, I tried to help salvage what we could. We managed to turn it into a plains grass area, which actually turned out pretty decent. We then took the kids to Wings & Rings since Micah wanted to play games for his birthday. With Chucky Cheese shut down and no idea if they will ever re-open, this was his second choice. We met up with my mom, Bob, Tyler, and his mom. Overall the evening seemed to go well.');

INSERT INTO "journal" ("user_id","date","entry")
VALUES ('2', '2021/01/30','Due to Covid, we were limited on what we could do for the kids'' birthday''s this year so I bought out a single theater at the West Acres Cinema. It wasn''t all that expensive since they ran a special, $100 for 20 people. The kids each got to invite 3 friends to share the experince, however Amy delayed on telling some families, so Micah only had one friend come. It was ok for him, the two interacted with each other very easily. Paisley on the other hand had 3 friends come out. They did pretty well overall except for a few times we had to talk with them about getting loud or trying to stand on their seats.');

INSERT INTO "journal" ("user_id","date","entry")
VALUES ('1', '2021/01/19','I had my first video interview with the EDA and I think it went pretty well');

INSERT INTO "journal" ("user_id","date","entry")
VALUES ('1', '2021/01/22','I was accepted into the EDA. I will begin a 20 week boot camp starting March 8th - July 25th');

INSERT INTO "journal" ("user_id","date","entry")
VALUES ('2', '2021/02/10','Paisley''s Birthday');

INSERT INTO "journal" ("user_id","date","entry")
VALUES ('2', '2021/02/28','Due to Covid...');


-- Select Everyone
SELECT * FROM "user"
LEFT JOIN "journal" ON "user"."id" = "user_id";

-- Select One User
SELECT * FROM "user"
LEFT JOIN "journal" ON "user"."id" = "user_id"
WHERE "user"."id" = 1;

SELECT * FROM "user"
LEFT JOIN "journal" ON "user"."id" = "user_id"
WHERE "user"."id" = 2;