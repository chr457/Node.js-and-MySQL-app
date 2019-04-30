create table users(
    email varchar(255) primary key,
    created_at timestamp default now()
    );
    
insert into users(email) Values
('katie34@yahoo.com'),('Tunde@gmail.com');