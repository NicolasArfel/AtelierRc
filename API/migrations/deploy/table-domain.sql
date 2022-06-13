-- Deploy atelier-rc:table-domain to pg

BEGIN;

CREATE DOMAIN slug AS TEXT
  CHECK(
    VALUE ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'
  )
;

ALTER TABLE "project"
  ALTER COLUMN "slug" TYPE slug;

ALTER TABLE "furniture"
  ALTER COLUMN "slug" TYPE slug;

ALTER TABLE "photo"
  ADD COLUMN  "project_id" INT NOT NULL REFERENCES "project" ("id");

ALTER TABLE "photo"
  RENAME TO "project_photo";

CREATE TABLE "furniture_photo"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "position" INT NOT NULL,
    "photo_credit" TEXT,
    "cover_photo" BOOLEAN,
    "furniture_id" INT NOT NULL REFERENCES "furniture" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
