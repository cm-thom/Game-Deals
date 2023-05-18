INSERT INTO user (id, username, password, email)
VALUES (1, 'user1', 'root1234', 'email@email.com');

INSERT INTO products (id, name, price, console, description, view_count, genre, available, user_id)
VALUES (1, 'sonic', 10, 'sega saturn', 'old sega saturn game, very good', 0, 'adventure', 1, 1),
       (2, 'mario world', 20, 'nintendo 64', 'its-a-me, mario', 0, 'open world', 0, 1);