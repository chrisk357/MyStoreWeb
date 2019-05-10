using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyStoreWeb.Data;
using MyStoreWeb.Data.Entities;

namespace MyStoreWeb.Controllers
{
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        private readonly IStoreRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IStoreRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get()
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



