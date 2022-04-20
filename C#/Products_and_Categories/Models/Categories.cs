using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Products_and_Categories.Models
{
    public class Category
    {
        [Key]
        public int CategoryID {get; set;}

        [Required]
        public string Name {get; set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public List<Association> Products {get; set;}
    }
}