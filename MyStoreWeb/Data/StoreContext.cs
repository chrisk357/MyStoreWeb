using Microsoft.EntityFrameworkCore;
using MyStoreWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyStoreWeb.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
            //THis may need to be removed after 7
            builder.Entity<Order>()
                .HasData(new Order()
                {
                  Id = 1,
                  OrderDate = DateTime.UtcNow,
                  OrderNumber = "1234"
                });
        }
    }
}
