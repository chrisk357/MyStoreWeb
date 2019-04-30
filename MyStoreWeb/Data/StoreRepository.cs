using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _ctx.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
