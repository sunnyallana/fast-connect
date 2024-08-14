-- db name 
create database fast_connect;
USE fast_connect;
-- table for teacher registration
create table tbl_teacher
(
    id int primary key,
    name varchar(30) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    qualification varchar(50) not null,
    specialization varchar(50) not null,
    dob date not null
    -- for which sections and programs he/she teach like :BSE-4C and MSC-1A i will give you dropdown design in dir
    -- FAST-CONNECT-->fast-connect-doc-->coursesdropdown.jpg
)

--table for student registration;
create table tbl_student
(
    student_id int not null,
    name varchar(30) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    dob date not null,
    gender varchar not null,
    program varchar not null,-- i-e BSCS ...
    current_semester varchar (10) not null,
    current_year varchar (10) not null, --derived from sem
    primary key (student_id)
    -- make email unique key
    unique (email)
)

   