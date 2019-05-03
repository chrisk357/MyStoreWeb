﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyStoreWeb.Data;
using MyStoreWeb.Data.Entities;
using MyStoreWeb.ViewModels;

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
        public IActionResult Post([FromBody]OrderViewModel model)
        {
            //add to the DB
            try
            {
                if (ModelState.IsValid)
                {
                    var newOrder = new Order()
                    {
                        OrderDate = model.OrderDate,
                        OrderNumber = model.OrderNumber,
                        Id = model.OrderId

                    };

                    if (newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }
                    _repository.AddEntity(newOrder);
                    if (_repository.SaveAll())
                    {
                        var vm = new OrderViewModel()
                        {
                            OrderId = newOrder.Id,
                            OrderDate = newOrder.OrderDate,
                            OrderNumber = newOrder.OrderNumber
                        };
                        {
                            return Created($"/api/orders/{vm.OrderId}", vm);
                        }
                    }
                    else
                    {
                        return BadRequest(ModelState);
                    }

                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new order: {ex}");

            }
            return BadRequest("Failed to save new order");

        }
    }
}