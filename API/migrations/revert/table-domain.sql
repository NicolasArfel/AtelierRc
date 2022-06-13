-- Revert atelier-rc:table-domain from pg

BEGIN;

DROP TABLE "furniture_photo";

ALTER TABLE "project_photo"
  RENAME TO  "photo";

ALTER TABLE "photo"
  DROP COLUMN  "project_id" INT NOT NULL REFERENCES "project" ("id");

ALTER TABLE "furniture"
  ALTER COLUMN "slug" TYPE TEXT;

ALTER TABLE "project"
  ALTER COLUMN "slug" TYPE TEXT;

DROP DOMAIN slug;

COMMIT;
