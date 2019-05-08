using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyStoreWeb.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace MyStoreWeb.Data
{
    public interface IStoreRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(bool includeItems);
        Order GetOrderById(int id);

        bool SaveAll();
        void AddEntity(object model);
    }
}


