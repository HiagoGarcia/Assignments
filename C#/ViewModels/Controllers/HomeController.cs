using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ViewModels.Models;

namespace ViewModels.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            string blurb = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dolore ipsum voluptatibus magni, voluptatem cumque dolores iure quisquam cupiditate eum nobis, architecto, repudiandae quibusdam aspernatur odio dolor! Nemo, officia rem?";
            return View(model:blurb);
        }
        [HttpGet("users")]
        public IActionResult Names()
        {
            string[] names = new string[]
            {
                "Sally",
                "Billy",
                "Joey",
                "Moose"
            };
            return View(names);
        }
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] num = new int[]
            {
                1,
                2,
                3,
                10,
                43,
                5
            };
            return View(num);
        }
        [HttpGet("user")]
        public IActionResult UserDetail()
        {
            User someUser = new User()
            {
                FirstName = "Moose",
                LastName = "Phillips"
            };
            return View(someUser);
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
