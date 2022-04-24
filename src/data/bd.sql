CREATE TABLE class (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255),
                module ENUM('0','1','2','3','4','5','6') DEFAULT 0
            );
           
        CREATE TABLE student (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                birth_date DATE NOT NULL,
                class_id VARCHAR(255) NOT NULL, FOREIGN KEY (class_id) REFERENCES class(id)
            );
            CREATE TABLE hobby (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
            CREATE TABLE student_has_hobby (
                id VARCHAR(255) PRIMARY KEY,
                student_id VARCHAR(255) NOT NULL, FOREIGN KEY (student_id) REFERENCES student(id),
                hobby_id VARCHAR(255) NOT NULL, FOREIGN KEY (hobby_id) REFERENCES hobby(id)
            );
            CREATE TABLE teacher (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255) NOT NULL UNIQUE,
                birth_date DATE NOT NULL,
                class_id VARCHAR(255) NOT NULL, FOREIGN KEY (class_id) REFERENCES class(id)
            );
            
            CREATE TABLE specialty (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
            CREATE TABLE teacher_has_specialty (
                id VARCHAR(255) PRIMARY KEY,
                teacher_id VARCHAR(255), FOREIGN KEY (teacher_id) REFERENCES teacher(id),
                specialty_id VARCHAR(255), FOREIGN KEY (specialty_id) REFERENCES specialty(id)
            );

            