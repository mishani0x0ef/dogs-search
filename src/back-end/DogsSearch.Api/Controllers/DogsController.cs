using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DogsSearch.Api.Controllers
{
    /// <summary>
    /// Set of operations to work with dogs.
    /// </summary>
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

        /// <summary>
        /// Get collection of all existing dogs.
        /// </summary>
        /// <returns>Collection of dogs.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dog>>> Get()
        {
            var dogs = await _dogsService.Get();
            return Ok(dogs);
        }

        /// <summary>
        /// Get information about the specific dog by it's ID.
        /// </summary>
        /// <param name="id">ID of the dog to get information about</param>
        /// <returns>Information about the dog.</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Dog>> GetById(Guid id)
        {
            if (id == Guid.Empty)
                return BadRequest();

            var dog = await _dogsService.GetById(id);

            if (dog is null)
                return NotFound();

            return Ok(dog);
        }

        /// <summary>
        /// Add new dog to the collection of available pets.
        /// Returns ID of the dog after creation.
        /// </summary>
        /// <param name="dog">Dog that should be added.</param>
        /// <returns>ID of the dog.</returns>
        [HttpPost]
        public async Task<ActionResult<Guid>> CreateDog([FromBody] Dog dog)
        {
            var id = await _dogsService.Create(dog);
            return Ok(id);
        }


        /// <summary>
        /// Remove dog by it's ID from the list of available pets.
        /// </summary>
        /// <param name="id">ID of the dog to be removed.</param>
        [HttpDelete]
        public async Task RemoveDog(Guid id)
        {
            await _dogsService.RemoveById(id);
        }

        /// <summary>
        /// Adopt specific dog. Operation make the dog unavailable for next repeated adoptions.
        /// </summary>
        /// <param name="id">ID of the pet to adopt.</param>
        [Route("{id}/adopt")]
        [HttpPost]
        public async Task<IActionResult> Adopt(Guid id)
        {
            if (id == Guid.Empty)
                return BadRequest();

            _logger.LogInformation($"Start attempt to addopt dog with id {id}");

            await _dogsService.Adopt(id);
            return Ok();
        }
    }
}