using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Login_And_Regisration.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace Login_And_Regisration.Controllers
{
    public class HomeController : Controller
    {

        private int? uid
        {
            get
            {
                return HttpContext.Session.GetInt32("UserId");
            }
        }

        private readonly ILogger<HomeController> _logger;
        private UserContext database;

        public HomeController(UserContext context, ILogger<HomeController> logger)
        {
            database = context;
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            if(uid != null)
            {
                return RedirectToAction("Success");
            }
            return View("Index");
        }

        [HttpGet("/login_page")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpGet("/success")]
        public IActionResult Success()
        {
            if (ModelState.IsValid == false)
            {
                return View("Index");
            }
            if(uid == null)
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpPost("/logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpPost("/register")]
        public IActionResult Register(User newUser)
        {
            if (ModelState.IsValid)
            {
                bool isEmailTaken = database.Users.Any(u => u.Email == newUser.Email);

                if (isEmailTaken)
                {
                    ModelState.AddModelError("Email", "Email is taken.");
                }
            }
            if (ModelState.IsValid == false)
            {
                return View("Index");
            }
            PasswordHasher<User> hasher = new PasswordHasher<User>();
            newUser.Password = hasher.HashPassword(newUser, newUser.Password);

            database.Users.Add(newUser);
            database.SaveChanges();

            HttpContext.Session.SetInt32("UserId", newUser.UserID);
            return RedirectToAction("Success");
        }

        [HttpPost("/login")]
        public IActionResult UserLogin(LoginUser loginUser)
        {
            if (ModelState.IsValid == false)
            {
                return View("Index");
            }
            User dbUser = database.Users.FirstOrDefault(u => u.Email == loginUser.LoginEmail);

            if (dbUser == null)
            {
                ModelState.AddModelError("LoginEmail", "not found.");
                return View("Index");
            }

            PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
            PasswordVerificationResult pwCompareResult = hasher.VerifyHashedPassword(loginUser, dbUser.Password, loginUser.LoginPassword);

            if (pwCompareResult == 0)
            {
                ModelState.AddModelError("LoginPassword", "invalid.");
                return View("Index");
            }

            HttpContext.Session.SetInt32("UserId", dbUser.UserID);
            return RedirectToAction("Success");
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
