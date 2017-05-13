USE apartmentsite_db;

INSERT INTO contractors (business_name, doing_business_as_name, street_address, city, zip_code, naics, primary_naics_description, createdAt, updatedAt)

VALUES 
('TIMOTHY ANDREW SMITH', 'TAS PLUMBING', '16435 CHICAGO AVENUE', 'RIVERSIDE', '92504-6011', 235110, 'Plumbing, Heating, and Air-Conditioning Contractors (1997 NAICS)', 0, 0),
('CHAPMAN AIR SYSTEM', 'W.R. ROBBINS', '1927 AVENIDA PLAZA REAL', 'OCEANSIDE', '92056-6024', 235110, 'Plumbing, Heating, and Air-Conditioning Contractors (1997 NAICS)', 0, 0),
('SAN PEDRO SIGN CO /C', 'SAN PEDRO ELECTRIC SIGN COMPANY', '701 LAKME AVENUE', 'WILMINGTON', '90744-5943', 235210, 'Painting and Wall Covering Contractors (1997 NAICS)', 0, 0),
('BRUCE E MEEKS', 'BRUCE MEEKS AND ASSOCIATES', '5191 LLANO DRIVE', 'WOODLAND HILLS', '91364-2901', 541320, 'Landscape architecture services', 0, 0),
('REGINALD WYATT JR', 'EASICLEAN CARPET CARE', '3595 DIXIE LANE', 'RIVERSIDE', '92503-4607', 561740, 'Carpet & upholstery cleaning services', 0, 0);


INSERT INTO prospects (first_name, last_name, email, telephone, bedrooms, move_in_date, message, createdAt, updatedAt)

VALUES
('John', 'Smith', 'jsmith@jsmith.com', '555-555-5555', '1 bedroom', '2017-06-01', 'fifty words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate', 0, 0),
('Kylo', 'Ren', 'kren@kren.com', '444-444-4444', '1 bedroom, 2 bedrooms, 3 bedrooms', '2017-08-09', 'sixty words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis', 0, 0),
('Boba', 'Fett', 'bfett@bfett.com', '333-333-3333', '3 bedrooms', '2017-10-31', 'ten words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', 0, 0),
('Obi-Wan', 'Kanobi', 'obiwan@obiwan.com', '777-666-5555', '1 bedroom', '2017-05-25', 'ten words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', 0, 0),
('Leia', 'Organa', 'leia@organa.com', '222-222-2222', '1 bedroom', '2017-05-25', 'fifty words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate', 0, 0),
('Maz', 'Kanata', 'maz@maz.com', '888-888-8888', '3 bedrooms', '2017-07-01', 'ten words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', 0, 0),
('Wedge', 'Antilles', 'wedge@wedge.com', '234-567-8900', '2 bedrooms', '2017-07-22', 'ten words Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', 0, 0);


INSERT INTO tenants (name, email, street_address, apartment_number, city, state, zip_code, no_of_occupants, rent, lease_start, lease_end, createdAt, updatedAt)

VALUES
('General Greivous', 'general@general.com', 'Planet Kalee', '5000', 'Planet', 'Kalee', '00423', 2, 5000, '2017-08-01', '2018-07-31', 0, 0),
('Darth Maul', 'darth@maul.com', 'Lucas ipsum dolor Street', '72', 'Nelvaanian Watto', 'Yowza', '00423', 2, 5000, '2017-08-01', '2018-07-31', 0, 0),
('Captain Phasma', 'phasma@phasma.com', 'Anthos jerec bardan kendal', '22000', 'Lars coruscant', 'Greeata', '50042', 4, 7000, '2017-09-01', '2018-08-30', 0, 0);