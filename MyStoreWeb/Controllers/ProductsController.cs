using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyStoreWeb.Data;
using MyStoreWeb.Data.Entities;

namespace MyStoreWeb.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    //[Produces("application.json")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(StoreRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Product>> Get()
        {
            try
            {
                return Ok(_repository.GetAllProducts());

            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products!");
            }
        }

    }
}



