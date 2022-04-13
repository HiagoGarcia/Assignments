using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Random_Passcode.Models;

namespace Random_Passcode.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index(int length = 14)
        {
            int? count = HttpContext.Session.GetInt32("Count");
            if (count == null)
            {
                HttpContext.Session.SetInt32("Count", 1);
            }
            else
            {
                HttpContext.Session.SetInt32("Count", (int)count + 1);
            }
            string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            Random rnd = new Random();
            char[] chars = new char[length];
            for (int i = 0; i < length; i++)
            {
                chars[i] = validChars[rnd.Next(0, validChars.Length)];
            }
            string newString = new string(chars);
            RandomString mixedString = new RandomString()
            {
                str = newString
            };
            return View("Index", mixedString);
        }
        [HttpPost("rng")]
        public IActionResult CreateRandomString()
        {
            return RedirectToAction("Index");
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