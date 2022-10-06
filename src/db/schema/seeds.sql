INSERT INTO users (name, email, password, isAdmin) VALUES ('user', 'abc@user.com', 'user', false), ('admin', 'abc@admin.com', 'admin', true);

INSERT INTO rooms(name, max_capacity_level) VALUES ('Multi-purpose Room', 100);


INSERT INTO days (name) VALUES ('Monday');

INSERT INTO bulletin_board (title, description, isActive, created_at) VALUES ('Out of Service Alert', 'This is to inform that men washrooms on the main floor are currently out of service. Please use washrooms on teh first level until repairs complete. We appologize for any inconvenience.', true, '2022-10-04 19:30:55'),
('Washroom Fixed', 'This is to inform that men washrooms on the first floor is fixed.', true, '2022-10-05 19:30:55');

INSERT INTO gym_capacity (day, date, time, number_of_people)
VALUES 
('Monday', '2022-09-22', '1pm', 50),
('Monday', '2022-09-23', '1pm', 40),
('Monday', '2022-09-24', '1pm', 45),
('Monday', '2022-09-25', '1pm', 45),
('Monday', '2022-09-25', '3pm', 35);

INSERT INTO 
room_bookings (room_id, user_id, day_id, time, current_capacity_level) 
VALUES 
(1, 1, 1, '1pm', 10),
(1, 1, 1, '2pm', 20),
(1, 1, 1, '3pm', 30),
(1, 1, 1, '4pm', 40);
