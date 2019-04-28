using Microsoft.EntityFrameworkCore;
using MyStoreWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyStoreWeb.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options): base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}
