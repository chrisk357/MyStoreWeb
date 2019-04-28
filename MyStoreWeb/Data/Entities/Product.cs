using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyStoreWeb.Data.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string ProductBrand { get; set; }
        public string ProductModel { get; set; }
        public string Description { get; set; }

        public string ProductSize { get; set; }

        public string ProductColor { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductNSN { get; set; }
    }
}
