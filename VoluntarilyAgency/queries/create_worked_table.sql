USE agency;

DROP TABLE worked;

CREATE TABLE worked
(
	worked_id INT NOT NULL IDENTITY(1,1),
    school_id INT,
    volunteer_id INT,
    hours INT,
	students INT,
	company_hours BIT,
    PRIMARY KEY (worked_id)
);

SELECT * FROM worked_test;

INSERT INTO worked_test
VALUES (2,3,10,5,0);