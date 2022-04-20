using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Products_and_Categories.Models;

namespace Products_and_Categories.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ProductCategoryContext db;

        public HomeController(ProductCategoryContext context, ILogger<HomeController> logger)
        {
            db = context;
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.Categories = db.Categories
            .ToList();
            return View("Index");
        }

        [HttpGet("/products")]
        public IActionResult Products()
        {
            ViewBag.Products = db.Products
            .ToList();
            return View();
        }

        [HttpGet("/products/{ProductID}")]
        public IActionResult ProductDetails(int productID)
        {
            var productWithCategories = db.Products
            .Include(product => product.Categories)
                .ThenInclude(sub => sub.Category)
            .FirstOrDefault(product => product.ProductID == productID);
            
            List<Category> allCategories = db.Categories
            .ToList();
            List<Category> unrealatedCategories = new List<Category>();
            foreach (var category in allCategories)
            {
                var found = false;
                foreach (var relCatAssoc in productWithCategories.Categories)
                {
                    if (category.CategoryID == relCatAssoc.CategoryID)
                    {
                        found = true;
                    }
                    
                }
                if(!found)
                {
                    unrealatedCategories.Add(category);
                }
            }
            ViewBag.UnrelatedCategories = unrealatedCategories;
            return View(productWithCategories);
        }

        [HttpGet("/{CategoryID}")]
        public IActionResult CategoryDetails(int categoryID)
        {
            var categoryWithProducts = db.Categories
            .Include(category => category.Products)
                .ThenInclude(sub => sub.Product)
            .FirstOrDefault(category => category.CategoryID == categoryID);
            
            List<Product> allProducts = db.Products
            .ToList();
            List<Product> unrealatedProducts = new List<Product>();
            foreach (var product in allProducts)
            {
                var found = false;
                foreach (var relProdAssoc in categoryWithProducts.Products)
                {
                    if (product.ProductID == relProdAssoc.ProductID)
                    {
                        found = true;
                    }
                    
                }
                if(!found)
                {
                    unrealatedProducts.Add(product);
                }
            }
            ViewBag.UnrelatedProducts = unrealatedProducts;
            return View(categoryWithProducts);
        }
        [HttpPost("/createProduct")]
        public IActionResult AddProduct(Product newProduct)
        {
            if (ModelState.IsValid == false)
            {
                return View("Products");
            }
            db.Add(newProduct);
            db.SaveChanges();
            return RedirectToAction("Products");
        }
        [HttpPost("/createCategory")]
        public IActionResult AddCategory(Category newCategory)
        {
            if (ModelState.IsValid == false)
            {
                return View("Index");
            }
            db.Add(newCategory);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost("/AddCategoryToProduct/{productID}")]
        public IActionResult AddCategoryToProduct(Association newAssoc, int productID)
        {
            // The user did not select this in the form, so it comes from the URL instead.
            newAssoc.ProductID = productID;
            db.Add(newAssoc);
            db.SaveChanges();
            return RedirectToAction("ProductDetails");
        }
        [HttpPost("/AddProductToCategory/{categoryID}")]
        public IActionResult AddProductToCategory(Association newAssoc, int categoryID)
        {
            // The user did not select this in the form, so it comes from the URL instead.
            newAssoc.CategoryID = categoryID;
            db.Add(newAssoc);
            db.SaveChanges();
            return RedirectToAction("CategoryDetails");
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
