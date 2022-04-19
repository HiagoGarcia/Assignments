using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Chefs_N_Dishes.Models;
using Microsoft.EntityFrameworkCore;

namespace Chefs_N_Dishes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ChefContext db;
        public HomeController(ChefContext context, ILogger<HomeController> logger)
        {
            db = context;
            _logger = logger;
        }


        [HttpGet("")]
        public IActionResult Index()
        {
            List<Chef> chefs = db.Chefs
            .Include(chef => chef.CreatedDishes)
            .ToList();
            return View("Index", chefs);
        }

        [HttpGet("/dishes")]
        public IActionResult Dishes()
        {
            List<Dish> dishes = db.Dishes
            .Include(dish => dish.Creator)
            .ToList();
            return View("Dishes", dishes);
        }

        [HttpGet("/new")]
        public IActionResult NewChef()
        {
            return View();
        }

        [HttpGet("/dishes/new")]
        public IActionResult NewDish()
        {
            ViewBag.Chefs = db.Chefs
            .ToList();
            return View();
        }

        [HttpPost("/addChef")]
        public IActionResult AddChef(Chef newChef)
        {
            if (ModelState.IsValid == false)
            {
                return View("NewChef");
            }
            db.Add(newChef);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost("/addDish")]
        public IActionResult AddDish(Dish post_dish)
        {
            if (ModelState.IsValid == false)
            {
                return View("NewDish");
            }
            db.Add(post_dish);
            db.SaveChanges();
            return RedirectToAction("Dishes");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}