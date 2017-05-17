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


INSERT INTO applicants (name, email, phone, birth_date, dl_num, dl_state, num_occupants, current_street, current_city, current_state, current_zip, hear_about, prev_landlord, prev_landlord_phone, prev_rent, from_date, to_date, prev_street, prev_state, prev_zip, reason_left, employer1, employer_city, employer_state, employer_phone, emp_from_date, emp_to_date, gross_salary, position_held, ref_name, ref_phone, desired_move_in, vehicle, pet_answer, pet_descrip, num_occupants_under18, createdAt, updatedAt)

VALUES
('Bob Smith', 'bob@smith.com', '541-232-2232', '1980-04-25', 'F255543', 'CA', 3, '555 Mulberry', 'Los Angeles', 'CA', '94555', 'relative recommended', 'Property Manager Company', '347-322-0098', 3350, '2015-01-01', '2016-01-31', '7662 Riverside Drive', 'CA', '92222', 'bigger space', 'CDE Company', 'Los Angeles', 'CA', '310-555-5555', '2015-12-01', '2017-05-16', 50000, 'Manager', 'Marshall Jones', '310-555-6767', '2017-06-01', 'Toyota Prius', 1, 'beagle', 1, 0, 0),

('Jane Kennedy', 'jane@kenndy.com', '456-768-7768', '1968-12-03', 'EE78292', 'AZ', 2, '625 Broadway', 'Phoenix', 'AZ', '85234', 'facebook ad', 'Landlords Inc.', '516-999-6516', 4500, '2017-02-01', '2017-04-30', '1601 University Ave', 'NY', '10463', 'relocation', 'XYZ Inc', 'Phoenix', 'AZ', '456-555-5555', '2010-09-29', '2017-05-16', 65000, 'Director', 'Sarah Connor', '456-555-2300', '2017-09-01', 'Ford Escort', 0, null, 0, 0, 0),

('Ross Whedon', 'ross@whedon.com', '255-389-3389', '1975-07-14', '87883829', 'GA', 1, '1720 Clancey', 'Alberta', 'GA', '62325', 'referred by a friend', 'ABC Management Co.', '727-824-8278', 1798, '2015-08-01', '2016-08-01', '120 Elgar Place', 'TX', '21271', 'job move', 'Widget Company', 'Alberta', 'GA', '555-555-5555', '2005-03-26', '2017-05-16', 45000, 'Associate', 'Mark Lewis', '555-555-0299', '2017-10-01', 'Honda Accord', 0, null, 0, 0, 0);
