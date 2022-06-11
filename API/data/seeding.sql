BEGIN;

TRUNCATE client, "user", status, project, furniture, client_has_favorite_furniture RESTART IDENTITY;

INSERT INTO client (email, firstname,  lastname, password, address, zip_code, city, phone_number) VALUES
('moine.veronique@test.com', 'Véronique', NULL, 'motdepassetest', NULL, '75020', NULL, NULL);

INSERT INTO "user" (email, firstname,lastname, password) VALUES
('romaincaillon.archi@gmail.com', 'Romain', 'Caillon', 'atelierrc');

INSERT INTO status (label) VALUES
('Phase d''étude'),
('Phase chantier'),
('Chantier livré');
 
INSERT INTO project (name, slug, location, date, program, surface_area, type, client, design, photo_credit, user_id, status_id) VALUES
('Lamarck', 'lamarck','Île-de-France, Paris 18', '2022', 'Conception d’une cuisine fermée dans un Immeuble Art Déco', '25m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon',1 ,3 ),
('Junot', 'junot','Île-de-France, Paris 18', '2022', 'Rénovation d’un duplex dans un immeuble Art Déco. Relier deux appartements/lots au sein d’une même copropriété. Revoir l’agencement/l’organisation du R+4 dans sa globalité. Conception d’un escalier permettant d’accéder au R+5', '80m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon', 1, 2),
('Voltaire', 'voltaire','Île-de-France, Paris 11', '2022', 'Rénovation/restructuration de l’entrée et de la cuisine d’un appartement parisien', '15m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon',1 ,1);

INSERT INTO furniture (name, slug, type, condition, description, availability, price, user_id) VALUES
('Singe vintage', 'singe-vintage', 'Objet de décoration', 'Bon état', 'Singe vintage en teck style Kay Bojesen', FALSE, NULL, 1),
('Fauteuil en bois courbé', 'fauteuil-en-bois-courbe', 'Meuble', 'Bon état', 'Fauteuil en bois courbé, assise cannée dit « B9 », ou « Le Corbusier » ,Jacob et Josef Kohn', FALSE, NULL, 1);

COMMIT;




