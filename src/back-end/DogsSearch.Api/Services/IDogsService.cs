using System.Collections.Generic;
using System.Threading.Tasks;

public interface IDogsService
{
    Task<IEnumerable<Dog>> Get();
    Task<Dog> GetById(int id);
    Task Adopt(int id);
}