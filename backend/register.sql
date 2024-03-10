USE registrations;

CREATE TABLE regDatas (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(255),
    email VARCHAR(255),
    pass VARCHAR(10)
);

INSERT INTO regDatas (fullname, email, pass) VALUES
('Test Name', 'test@gmail.com', 'testPassword');
