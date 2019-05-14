using System.ComponentModel.DataAnnotations;

namespace MyStoreWeb.ViewModels
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
        [Required]
        public int ProductId { get; set; }

        public string ProductCategory { get; set; }
        public string ProductProductSize { get; set; }
        public string ProductProductModel { get; set; }
        public string ProductProductBrand { get; set; }
        public string ProductProductImage { get; set; }

    }
}