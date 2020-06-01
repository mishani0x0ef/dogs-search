use DogsSearch
go

create table Log
(
    DogId bigint identity(1, 1) primary key,
    Level nvarchar(10) not null,
    Message nvarchar(max),
    LoggedAt datetime default getdate()
)
