create database DogsSearch
go

use  DogsSearch
go

create table Dog (
    DogId bigint identity(1, 1) primary key
    , Name nvarchar(50) not null
    , Age tinyint not null 
    , ImageURL nvarchar(500)
    , Gender nvarchar(10) default 'Male'
    , Story nvarchar(max)
    , IsAdopted bit not null default 0
)
