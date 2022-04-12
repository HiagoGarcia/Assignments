using Microsoft.AspNetCore.Mvc;

namespace Dojo_Survey_With_Model.Controllers
{
    public class DojoController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View();
        }

        [HttpPost("result")]
        public ViewResult Result(string Name, string Dojo, string Language, string Comment)
        {
            ViewBag.name = Name;
            ViewBag.dojo = Dojo;
            ViewBag.language = Language;
            ViewBag.comment = Comment;
            return View();
        }
    }
}