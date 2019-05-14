using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using MyStoreWeb.Data.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyStoreWeb.Data
{
    public class StoreSeeder
    {
        private readonly StoreContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public StoreSeeder(StoreContext ctx, IHostingEnvironment hosting, UserManager<StoreUser> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();
            //Seed the main user
            StoreUser user = await _userManager.FindByEmailAsync("chris@motostore.com");
            if(user == null)
            {
                user = new StoreUser()
                {
                    LastName = "Kaye",
                    FirstName = "Chris",                    
                    Email = "chris@motostore.com",
                    UserName = "chris@motostore.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in Seeding");
                }
            }

            if(!_ctx.Products.Any())
            {
                //Need to create sample data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/product.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _ctx.Products.AddRange(products);

                var order = _ctx.Orders.Where( o => o.Id == 1).FirstOrDefault();
                if(order != null)
                {
                    order.User = user;
                    order.Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().ProductPrice
                        }


                    };
                }
                _ctx.SaveChanges();
            }
        }
    }
}
