﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MyStoreWeb.Data.Entities;

namespace MyStoreWeb.Data
{
    public class StoreRepository : IStoreRepository
    {
        private readonly StoreContext _ctx;
        private readonly ILogger<StoreRepository> _logger;

        public StoreRepository(StoreContext ctx, ILogger<StoreRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;

        }

        


        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public void AddOrder(Order newOrder)
        {
            //Convert new products to lookup of product
            foreach(var item in newOrder.Items)
            {
                item.Product = _ctx.Products.Find(item.Product.Id);
            }
            AddEntity(newOrder);
        }


        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if (includeItems)
            {
                return _ctx.Orders
                    .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                    .ToList();
            }
            else
            {
                return _ctx.Orders
                    .ToList();
            }
        }



        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return _ctx.Orders
                    .Where(o => o.User.UserName == username)
                    .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                    .ToList();
            }
            else
            {
                return _ctx.Orders
                    .Where(o => o.User.UserName == username)
                    .ToList();
            }
        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("GetAllProducts was called");

                return _ctx.Products
                    .OrderBy(p => p.Description)
                    .ToList();
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public Order GetOrderById(string username, int id)
        {
            return _ctx.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .Where(o => o.Id == id && o.User.UserName == username)
                .FirstOrDefault();

        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _ctx.Products
                .Where(p => p.Category == category)
                .ToList();
        }



        public IEnumerable<Product> GetProductByBrand(string brand = null)
        {
            return _ctx.Products
                .Where(p => p.ProductBrand == brand || p.ProductBrand.StartsWith(brand))
                ;        
        }




        /*
            return from p in Products
                   where string.IsNullOrEmpty(brand) || p.brand.startswith(brand)
                   orderby p.ProductBrand
                   select p;
        }
        */

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
