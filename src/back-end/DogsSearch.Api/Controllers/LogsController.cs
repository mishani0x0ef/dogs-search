using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DogsSearch.Api.Controllers
{
    public class Log
    {
        public string Message { get; set; }
    }

    [Route("api/logs")]
    [ApiController]
    public class LogsController : ControllerBase
    {
        private readonly ILogger<LogsController> _logger;

        public LogsController(ILogger<LogsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public ActionResult LogError([FromBody] Log log)
        {
            if (log?.Message is null)
            {
                return BadRequest();
            }

            _logger.LogError(log.Message);
            return Ok();
        }
    }
}