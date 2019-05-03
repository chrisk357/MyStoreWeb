using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyStoreWeb.Data;
using MyStoreWeb.Data.Entities;

namespace MyStoreWeb.Controllers
{
    [Route("api/[Controller]")]
    public class OrdersController : Controller
    {
        private readonly IStoreRepository _repository;
        private readonly ILogger<OrdersController> _logger;

        public OrdersController(IStoreRepository repository, ILogger<OrdersController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
  
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllOrders());
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var order = _repository.GetOrderById(id);

                if (order != null)
                    return Ok(order);
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
        [HttpPost]
        public IActionResult Post([FromBody]Order model)
        {
            //add to the DB
            try
            {
                _repository.AddEntity(model);
                if(_repository.SaveAll())
                {
                    return Created($"/api/orders/{model.Id}", model);
                }
                   
                       
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to save a new order: {ex}");

            }
            return BadRequest("Failed to save new order");

        }
    }
}