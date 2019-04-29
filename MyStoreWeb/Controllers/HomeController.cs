using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyStoreWeb.Data;
using MyStoreWeb.Data.Entities;
using MyStoreWeb.Models;
using MyStoreWeb.Services;

namespace MyStoreWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMailService _mailService;
        private readonly IStoreRepository _repository;
        

        public HomeController(IMailService mailService, IStoreRepository repository)
        {
            _mailService = mailService;
            _repository = repository;
            
        }

        public IActionResult Index()
        {
          //  var results = _ctx.Products.ToList();
            return View();
        }

        //Removes home from the URL and shortens it to just /contact
        [HttpGet ("contact")]
        public IActionResult Contact()
        {
            
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactModel model)
        {
            //Double Checks Validation on Server Side now
            if (ModelState.IsValid)
            {
                //Send Email
                _mailService.SendMessage("chrisk357@gmail.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Message Sent!!";
                ModelState.Clear();
            }

            return View();
        }

        public IActionResult Shop()
        {
            var results = _repository.GetAllProducts();
            return View(results);
            /*
            var results = _context.Products
                .OrderBy(p => p.Category)
                .ToList();
            
            //This does the same thing as above

            var results = from p in DbContext.Products
                          orderby p.Category
                          select p;
            return View(results.ToList());
            */
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
