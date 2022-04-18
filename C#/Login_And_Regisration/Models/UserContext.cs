using Microsoft.EntityFrameworkCore;

namespace Login_And_Regisration.Models
{
    
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions options) : base(options){}

        public DbSet<User> Users {get; set;}
    }
}