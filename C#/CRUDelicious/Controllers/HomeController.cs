using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private DishContext database;

        public HomeController(DishContext context)
        {
            database = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            List<Dish> dishes = database.Dishes.ToList();
            return View(dishes);
        }

        [HttpGet("new")]
        public IActionResult NewDish()
        {
            return View("NewDish");
        }

        [HttpPost("addDish")]
        public IActionResult AddDish(Dish post_dish)
        {
            database.Add(post_dish);
            database.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet("{dish_id}")]
        public IActionResult DishInfo(int dish_id)
        {
            Dish dish = database.Dishes.FirstOrDefault(d => d.DishID == dish_id);
            return View(dish);
        }

        [HttpGet("edit/{dish_id}")]
        public IActionResult edit(int dish_id)
        {
            Dish dish = database.Dishes.FirstOrDefault(d => d.DishID == dish_id);
            return View(dish);
        }

        [HttpPost("updateDish")]
        public IActionResult UpdateDish(Dish post_dish)
        {
            Dish dish = database.Dishes.FirstOrDefault(d => d.DishID == post_dish.DishID);
            dish.Name = post_dish.Name;
            dish.Chef = post_dish.Chef;
            dish.Calories = post_dish.Calories;
            dish.Tastiness = post_dish.Tastiness;
            dish.Description = post_dish.Description;

            database.SaveChanges();

            return Redirect($"{post_dish.DishID}");
        }

        [HttpPost("delete")]
        public IActionResult DeleteDish(int id_from_form)
        {
            Dish dish = database.Dishes.FirstOrDefault(d => d.DishID == id_from_form);
            database.Dishes.Remove(dish);
            database.SaveChanges();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
