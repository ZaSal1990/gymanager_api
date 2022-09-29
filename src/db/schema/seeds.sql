INSERT INTO users (name, email, password, isAdmin) VALUES ('user', 'abc@user.com', 'user', false), ('admin', 'abc@admin.com', 'admin', true);

INSERT INTO rooms(name, max_capacity_level) VALUES ('Multi-purpose Room', 100);


INSERT INTO days (name) VALUES ('Monday');

INSERT INTO bulletin_board (title, description, isActive) VALUES ('Out of Service Alert', 'This is to inform that men washrooms on the main floor are currently out of service. Please use washrooms on teh first level until repairs complete. We appologize for any inconvenience.', true);

INSERT INTO gym_capacity (day, date, time, number_of_people)
VALUES ('Monday', '27th Spetember, 2022', '1 PM', 80);
