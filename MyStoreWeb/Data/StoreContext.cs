using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MyStoreWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyStoreWeb.Data
{
    public class StoreContext : IdentityDbContext<IdentityUser>
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Product>()
                .Property(p => p.ProductPrice)
                .HasColumnType("decimal(18,2)");

            builder.Entity<OrderItem>()
                .Property(p => p.UnitPrice)
                .HasColumnType("decimal(18,2)");

            //THis may need to be removed after 7
            /*
            builder.Entity<Order>()
                .HasData(new Order()
                {
                  Id = 1,
                  OrderDate = DateTime.UtcNow,
                  OrderNumber = "1234"
                });
                */
        }

    }
}
