using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Razor_Fun.Controllers
{
    public class RazorController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }
    }
}