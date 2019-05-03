using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyStoreWeb.Data.Entities;

namespace MyStoreWeb.Data
{
    public interface IStoreRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        IEnumerable<Order> GetAllOrders();
        Order GetOrderById(int id);

        bool SaveAll();

    }
}


