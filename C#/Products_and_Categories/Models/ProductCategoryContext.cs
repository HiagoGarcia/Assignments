using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;


namespace Products_and_Categories.Models
{
    public class ProductCategoryContext : DbContext
    {
        public ProductCategoryContext(DbContextOptions options) : base(options){}

        public DbSet<Product> Products {get; set;}
        public DbSet<Category> Categories {get; set;}
        public DbSet<Association> Associations {get; set;}
    }
}