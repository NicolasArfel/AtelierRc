-- Revert atelier-rc:init from pg

BEGIN;

DROP TABLE IF EXISTS "client_has_favorite_furniture", "photo", "furniture", "project", "status", "user", "client";

DROP DOMAIN "phonenumber", "zipcode", "email";

COMMIT;
