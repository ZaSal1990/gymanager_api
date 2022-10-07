INSERT INTO users (name, email, password, isAdmin) VALUES ('Olivia Palmer', 'abc@user.com', 'user', false), ('admin', 'abc@admin.com', 'admin', true);

INSERT INTO rooms(name, max_capacity_level) VALUES ('Multi-purpose Room', 100);


INSERT INTO days (name) VALUES ('Monday'), ('Tuesday'), ('Wednesday'),('Thursday');

INSERT INTO bulletin_board (title, description, isActive) VALUES ('Out of Service Alert', 'This is to inform that men washrooms on the main floor are currently out of service. Please use washrooms on teh first level until repairs complete. We appologize for any inconvenience.', true),
('Out of Service Alert', 'This is to inform that men washrooms on the first floor are currently out of service. Please use washrooms on teh first level until repairs complete. We appologize for any inconvenience.', true);

INSERT INTO gym_capacity (day, date, time, number_of_people)
VALUES 
('Monday', '2022-09-22', '1 PM', 50),
('Monday', '2022-09-23', '1 PM', 60),
('Monday', '2022-09-24', '1 PM', 70),
('Monday', '2022-09-25', '1 PM', 80);

INSERT INTO 
room_bookings (room_id, username, user_id, day_id, time, current_capacity_level) 
VALUES 
(1, 'Olivia Palmer' , 1, 1, '1pm', 10),
(1, 'Olivia Palmer' , 1, 2, '3pm', 30),
(1, 'Olivia Palmer' , 1, 3, '4pm', 40),
(1, 'Olivia Palmer' , 1, 4, '1pm', 10),
(1, 'Olivia Palmer' , 1, 1, '2pm', 20),
(1, 'Olivia Palmer' , 1, 2, '3pm', 30),
(1, 'Olivia Palmer' , 1, 3, '4pm', 40);
