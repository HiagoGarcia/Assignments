using Microsoft.EntityFrameworkCore;

namespace Chefs_N_Dishes.Models
{
    
    public class ChefContext : DbContext
    {
        public ChefContext(DbContextOptions options) : base(options){}

        public DbSet<Chef> Chefs {get; set;}
        public DbSet<Dish> Dishes {get; set;}
    }
}