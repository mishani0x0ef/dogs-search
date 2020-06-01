using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;

public class DogsService : IDogsService
{
    private readonly IDbConnection _connection;

    public DogsService(IDbConnection connection)
    {
        _connection = connection;
    }

    public async Task<IEnumerable<Dog>> Get()
    {
        var query = @"
select
    d.DogId,
    d.Name,
    d.Age,
    d.Story
from
    dbo.Dogs d
        ";

        return await _connection.QueryAsync<Dog>(query);
    }

    public async Task<Dog> GetById(int id)
    {
        var query = @"
select
    d.DogId,
    d.Name,
    d.Age,
    d.Story
from
    dbo.Dogs d
where
    d.DogId = @id
        ";

        return await _connection.QuerySingleAsync<Dog>(query, new { id });
    }

    public async Task Adopt(int id)
    {
        var dog = await GetById(id);

        if (dog.IsAdopted)
            throw new InvalidOperationException($"Cannot addopt the dog '{id}' - '{dog.Name}'. Dog is already addopted.");

        var query = @"
update Dogs
set 
    IsAdopted = 1
where 
    DogId = @id
        ";

        return await _connection.ExecuteAsync(query, new { id });
    }
}