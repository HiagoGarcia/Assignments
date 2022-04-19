using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chefs_N_Dishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefID { get; set; }

        [Required (ErrorMessage = "is required.")]
        [MinLength(2)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required (ErrorMessage = "is required.")]
        [MinLength(2)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required (ErrorMessage = "is required.")]
        [DateOfBirth(MinAge = 18, MaxAge = 150, ErrorMessage ="Must be 18 years or older")]
        [Display(Name = "Date of birth:")]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public List<Dish> CreatedDishes {get; set;}
    }
}