using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chefs_N_Dishes.Models
{
    public class Dish
    {
        [Key]
        public int DishID { get; set; }

        [Required (ErrorMessage = "is required.")]
        public string Name { get; set; }

        [Required (ErrorMessage = "is required.")]
        public int Calories { get; set; }

        [Required (ErrorMessage = "is required.")]
        [Range(1,5, ErrorMessage = "must be between 1 to 5.")]
        public int Tastiness { get; set; }

        [Required (ErrorMessage = "is required.")]
        public string Desctiprion { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public int ChefID { get; set; }
        public Chef Creator { get; set; }
    }
}