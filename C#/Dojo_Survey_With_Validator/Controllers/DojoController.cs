using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Dojo_Survey_With_Validator.Models;

namespace Dojo_Survey_With_Validator.Controllers
{
    public class DojoController : Controller
    {
        private readonly ILogger<DojoController> _logger;

        public DojoController(ILogger<DojoController> logger)
        {
            _logger = logger;
        }
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("survey/submit")]
        public IActionResult Create(Dojo_Survay user)
        {
            if (ModelState.IsValid)
            {
                return View("result",user);
            }
            else
            {
                return View("Index");
            }
        }
        [HttpGet("result")]
        public IActionResult result()
        {

            return View("result");
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