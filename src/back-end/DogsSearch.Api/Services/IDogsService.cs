using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface IDogsService
{
    Task<IEnumerable<Dog>> Get();
    Task<Dog> GetById(Guid id);
    Task<Guid> Create(Dog dog);
    Task Adopt(Guid id);
    Task RemoveById(Guid id);
}