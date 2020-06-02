using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DogsSearch.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogsController : ControllerBase
    {
        private readonly IDogsService _dogsService;
        private readonly ILogger<DogsController> _logger;

        public DogsController(IDogsService dogsService, ILogger<DogsController> logger)
        {
            _dogsService = dogsService;
            _logger = logger;
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

            _logger.LogInformation($"Start attempt to addopt dog with id {id}");

            await _dogsService.Adopt(id);
            return Ok();
        }
    }
}