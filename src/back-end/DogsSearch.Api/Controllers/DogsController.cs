using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DogsSearch.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogsController : ControllerBase
    {
        private readonly IDogsService _dogsService;

        public DogsController(IDogsService dogsService)
        {
            _dogsService = dogsService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dog>>> Get()
        {
            var dogs = await _dogsService.Get();
            return Ok(dogs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Dog>> GetById(int id)
        {
            if (id < 1)
                return BadRequest();

            var dog = await _dogsService.GetById(id);

            if (dog is null)
                return NotFound();

            return Ok(dog);
        }

        [Route("{id}/adopt")]
        [HttpPost]
        public async Task<IActionResult> Adopt(int id)
        {
            if (id < 1)
                return BadRequest();

            await _dogsService.Adopt(id);
            return Ok();
        }
    }
}