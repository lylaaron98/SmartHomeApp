create database devices;

create table devices(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    on_of INT,
    open_close INT,
    temperature FLOAT,
    volume int,
    brightness int
    
)ENGINE=InnoDB;