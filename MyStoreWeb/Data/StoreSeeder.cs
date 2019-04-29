using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyStoreWeb.Data
{
    public class StoreSeeder
    {
        private readonly StoreContext _ctx;
        public StoreSeeder(StoreContext ctx)
        {
            _ctx = ctx;
        }
        public void Seed()
        {
            _ctx.Database.EnsureCreated();

            if(!_ctx.Products.Any())
            {
                //Need to create sample data

            }
        }
    }
}
