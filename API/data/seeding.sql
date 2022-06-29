BEGIN;

TRUNCATE client, "user", status, project, furniture, project_photo, furniture_photo, client_has_favorite_furniture RESTART IDENTITY CASCADE;

INSERT INTO client (email, firstname,  lastname, password, address, zip_code, city, phone_number, role) VALUES
('moine.veronique@test.com', 'Véronique', NULL, 'motdepassetest', NULL, '75020', NULL, NULL, 'admin');

INSERT INTO "user" (email, firstname,lastname, password, role) VALUES
('romaincaillon.archi@gmail.com', 'Romain', 'Caillon', '$2a$10$AA9o95ZQRuwDdZXqOWD5keaGGWiuYaX7BWmwQbSZh8dKoTbJCEXke', 'admin'),
('test@gmail.com', 'test', 'test', '$2a$10$R0RAJ./z4neyjSvCwI.GpeRd3FhuthZywl.BdqXJMtpuaQXXkgxvy', 'user');

INSERT INTO status (label) VALUES
('Phase d''étude'),
('Phase chantier'),
('Chantier livré');
 
INSERT INTO project (name, slug, location, date, program, surface_area, type, client, design, photo_credit, user_id, status_id) VALUES
('Lamarck', 'lamarck','Île-de-France, Paris 18', '2022', 'Conception d’une cuisine fermée dans un Immeuble Art Déco', '25m²', 'Appartement', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,3 ),
('Junot', 'junot','Île-de-France, Paris 18', '2022', 'Rénovation d’un duplex dans un immeuble Art Déco. Relier deux appartements/lots au sein d’une même copropriété. Revoir l’agencement/l’organisation du R+4 dans sa globalité. Conception d’un escalier permettant d’accéder au R+5', '80m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon', 1, 2),
('Voltaire', 'voltaire','Île-de-France, Paris 11', '2022', 'Rénovation/restructuration de l’entrée et de la cuisine d’un appartement parisien', '15m²', 'Appartement', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,1),
('Test', 'test','Île-de-France, Paris 11', '2022', 'Rénovation/restructuration', '15m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon',1 ,2),
('La Villa Jasmin', 'la-villa-jasmin','Île-de-France, Andrésy', '2021', 'Rénovation complète d’une maison meulière Chantier livré en Juillet 2021', '160m²', 'Maison', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,3),
('Saint-Maur', 'saint-maur','Île-de-France, Saint-Maur-des-Fossés', '2022', 'Rénovation complète d’un appartement situé sous les combles', '60m2', 'Appartement', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,2);

INSERT INTO furniture (name, slug, type, designer, editor, date, dimensions, condition, description, availability, price, user_id) VALUES
('Kay Bojesen Singe', 'kay-bojesen-singe', 'Objet de décoration','Bojesen, Kay','Anonyme', NULL,'15 x 15 x 20 cm (Largeur x Profondeur x Hauteur)', 'Bon état', NULL, FALSE, NULL, 1),
('Pierre Cardin Bar roulant', 'pierre-cardin-bar-roulant', 'Meuble','Cardin, Pierre et Carré, Alain','Anonyme','Circa 1970','70 x 70cm (Diamètre x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Hans Nagel Bougeoirs modulables Nagel s22 et Coupelles Nagel s200', 'hans-nagel-bougeoirs-modulables-nagel-s22-et-coupelles-nagel-s200', 'Objet de décoration','Nagel, Hans','Nagel','Circa 1960_1970','Dimensions d’un bougeoir : 10.2 x 6.5cm (Diamètre x Hauteur) Dimensions d’une coupelle : 13,8 x 5cm (Diamètre x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Alvar Aalto chaise modèle 68', 'alvar-aalto-chaise-modele-68', 'Meuble','Aalto, Alvar','Artek','Circa 1930','45.5 x 45 x 69.5cm (Largeur x Profondeur x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Charles Dudouyt chaise basse paillée', 'charles-dudouyt-chaise-basse-paillee', 'Meuble','Dudouyt, Charles','Anonyme','Circa 1950_1960','48 x 42 x 70cm (Largeur x Profondeur x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Eero Saarinen chaise « conference »', 'eero-saarinen-chaise-conference', 'Meuble','Saarinen, Eero','Knoll','Circa 1960','57 x 58 x 81cm (Largeur x Profondeur x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Odelberg Olsen chaise de travail n°T60 U', 'odelberg-olsen-chaise-de-travail-n-t60-u', 'Meuble','Olsen, Odelberg','Knoll International','Circa 1947','38 x 47 x 78.7cm (Largeur x Profondeur x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Fontoni & Geraci chaise pliante « Elios »', 'fontoni-geraci-chaise-pliante-elios', 'Meuble','Fontoni & Geraci','Anonyme','Circa 1970','50 x 46.5 x 83cm (Largeur x Profondeur x Hauteur)', 'Bon état', NULL, FALSE, NULL, 1),
('Marcel Breuer chaises b32', 'marcel-breuer-chaises-b32', 'Meuble','Breuer, Marcel','Thonet','Circa 1970','47 x 53 x 81cm (Largeur x Profondeur x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1),
('Arne Jacobsen chaises série 7','arne-jacobsen-chaises-serie-7', 'Meuble','Jacobsen, Arne','Fritz Hansen','Circa 1955','45 x 45 x 76cm (Largeur x Profondeur x Hauteur)', 'Excellent', NULL, FALSE, NULL, 1);

INSERT INTO project_photo (name, position, photo_credit, cover_photo, project_id) VALUES
('lamarck_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 1),
('lamarck_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_5.jpg', 5, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_6.jpg', 6, 'image ©Romain-Caillon', FALSE, 1),
('junot_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 2),
('junot_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 2),
('junot_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 2),
('junot_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 2),
('voltaire_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 3),
('voltaire_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 3),
('voltaire_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 3),
('voltaire_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 3),
('voltaire_pers_5.jpg', 5, 'image ©Romain-Caillon', FALSE, 3),
('test_pers_4.jpg', 1, 'image ©Romain-Caillon', TRUE, 4),
('Villa-Jasmin_Photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 5),
('Villa-Jasmin_Photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 5),
('Villa-Jasmin_Photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 5),
('Villa-Jasmin_Photo_4.jpg', 4, 'photo ©Romain-Caillon', FALSE, 5),
('Villa-Jasmin_Photo_5.jpg', 5, 'photo ©Romain-Caillon', FALSE, 5),
('Villa-Jasmin_Photo_6.jpg', 6, 'photo ©Romain-Caillon', FALSE, 5),
('saint-maur_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 6),
('saint-maur_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_pers_5.jpg', 5, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_pers_6.jpg', 6, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_pers_7.jpg', 7, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_1.jpg', 8, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_2.jpg', 9, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_3.jpg', 10, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_4.jpg', 11, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_5.jpg', 12, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_6.jpg', 13, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_7.jpg', 14, 'image ©Romain-Caillon', FALSE, 6),
('saint-maur_photo_8.jpg', 15, 'image ©Romain-Caillon', FALSE, 6);

INSERT INTO furniture_photo (name, position, photo_credit, cover_photo, furniture_id) VALUES
('kaybojesen_singe_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 1),
('kaybojesen_singe_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 1),
('kaybojesen_singe_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 1),
('pierrecardin_barroulant_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 2),
('pierrecardin_barroulant_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 2),
('pierrecardin_barroulant_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 2),
('pierrecardin_barroulant_photo_4.jpg', 4, 'photo ©Romain-Caillon', FALSE, 2),
('pierrecardin_barroulant_photo_5.jpg', 5, 'photo ©Romain-Caillon', FALSE, 2),
('nagel_bougeoirs_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 3),
('alvaraalto_chaise68_photo_3.jpg', 1, 'photo ©Romain-Caillon', FALSE, 4),
('alvaraalto_chaise68_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 4),
('alvaraalto_chaise68_photo_1.jpg', 2, 'photo ©Romain-Caillon', TRUE, 4),
('charlesdudouyt_chaisepaille_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 5),
('charlesdudouyt_chaisepaille_photo_2.jpg', 1, 'photo ©Romain-Caillon', FALSE, 5),
('charlesdudouyt_chaisepaille_photo_3.jpg', 1, 'photo ©Romain-Caillon', FALSE, 5),
('eerosaarinen_chaiseconference_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 6),
('eerosaarinen_chaiseconference_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 6),
('odelbergolsen_chaiset60_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 7),
('odelbergolsen_chaiset60_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 7),
('odelbergolsen_chaiset60_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 7),
('odelbergolsen_chaiset60_photo_4.jpg', 4, 'photo ©Romain-Caillon', FALSE, 7),
('eliosfontoni_chaisepliante_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 8),
('eliosfontoni_chaisepliante_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 8),
('eliosfontoni_chaisepliante_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 8),
('marcelbreuer_chaisesb32_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 9),
('marcelbreuer_chaisesb32_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 9),
('marcelbreuer_chaisesb32_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 9),
('arnejacobsen_chaisesserie7_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 10),
('arnejacobsen_chaisesserie7_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 10),
('arnejacobsen_chaisesserie7_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 10);

COMMIT;






