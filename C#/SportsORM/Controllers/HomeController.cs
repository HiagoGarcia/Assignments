using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomenLeagues = _context.Leagues
            .Where(l => l.Name.Contains("Women"))
            .ToList();
            ViewBag.Hockey = _context.Leagues
            .Where(l => l.Sport.Contains("Hockey"))
            .ToList();
            ViewBag.ButFootball = _context.Leagues
            .Where(l => l.Sport != "Football")
            .ToList();
            ViewBag.Conference = _context.Leagues
            .Where(l => l.Name.Contains("Conference"))
            .ToList();
            ViewBag.Atlanta = _context.Leagues
            .Where(l => l.Name.Contains("Atlantic"))
            .ToList();
            ViewBag.Dallas = _context.Teams
            .Where(t => t.Location.Contains("Dallas"))
            .ToList();
            ViewBag.Raptors = _context.Teams
            .Where(t => t.TeamName.Contains("Raptors"))
            .ToList();
            ViewBag.City = _context.Teams
            .Where(t => t.Location.Contains("City"))
            .ToList();
            ViewBag.T = _context.Teams
            .Where(t => t.TeamName.StartsWith("T"))
            .ToList();
            ViewBag.AlphabeticN = _context.Teams
            .OrderByDescending(t => t.TeamName)
            .ToList();
            ViewBag.AlphabeticL = _context.Teams
            .OrderBy(t => t.Location)
            .ToList();
            ViewBag.Cooper = _context.Players
            .Where(p => p.LastName.Contains("Cooper"))
            .ToList();
            ViewBag.Joshua = _context.Players
            .Where(p => p.FirstName.Contains("Joshua"))
            .ToList();
            ViewBag.CooperNoJoshua = _context.Players
            .Where(p => p.LastName.Contains("Cooper"))
            .Where(p => p.FirstName != "Joshua")
            .ToList();
            ViewBag.AlexanderOrWyatt = _context.Players
            .Where(p => p.FirstName.Contains("Alexander") || p.FirstName.Contains("Wyatt"))
            .ToList();
            
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}