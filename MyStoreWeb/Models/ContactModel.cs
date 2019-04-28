using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyStoreWeb.Models
{
    public class ContactModel
    {
        [Required]
        [MinLength(3)]
        public string Name { get; set; }
       
        [EmailAddress, Required]
        public string Email { get; set; }

        public string Subject { get; set; }
        [MaxLength(500, ErrorMessage = "Under 500 Characters")]
        public string Message { get; set; }
    }
}
