using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;

public class DogsService : IDogsService
{
    private readonly IConfiguration _configuration;

    public DogsService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<IEnumerable<Dog>> Get()
    {
        var query = @"
select
    d.DogId,
    d.Name,
    d.Age,
    d.Gender,
    d.ImageURL,
    d.Story,
    d.IsAdopted
from
    dbo.Dog d
        ";

        using (var connection = GetConnection())
        {
            return await connection.QueryAsync<Dog>(query);
        }
    }

    public async Task<Dog> GetById(int id)
    {
        var query = @"
select
    d.DogId,
    d.Name,
    d.Age,
    d.Gender,
    d.ImageURL,
    d.Story,
    d.IsAdopted
from
    dbo.Dog d
where
    d.DogId = @id
        ";

        using (var connection = GetConnection())
        {
            return await connection.QuerySingleAsync<Dog>(query, new { id });
        }
    }

    public async Task Adopt(int id)
    {
        var dog = await GetById(id);

        if (dog.IsAdopted)
            throw new InvalidOperationException($"Cannot addopt the dog '{id}' - '{dog.Name}'. Dog is already addopted.");

        var query = @"
update Dog
set 
    IsAdopted = 1
where 
    DogId = @id
        ";

        using (var connection = GetConnection())
        {
            await connection.ExecuteAsync(query, new { id });
        }
    }

    private IDbConnection GetConnection()
    {
        var connectionString = _configuration.GetConnectionString("DogsDb");
        var connection = new SqlConnection(connectionString);
        connection.Open();
        return connection;
    }
}