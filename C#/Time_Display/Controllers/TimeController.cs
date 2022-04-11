using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;
namespace Time_Display.Controllers
{
    public class TimeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
        DateTime currentTime = DateTime.Now;
        ViewBag.Time = currentTime;
            return View("Index");
        }
    }
}