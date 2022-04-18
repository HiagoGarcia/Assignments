using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Login_And_Regisration.Models
{

    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        public string LastName { get; set; }

        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required]
        [MinLength(8)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [NotMapped]
        [Compare("Password", ErrorMessage = "must match Password.")]
        public string ConfirmPassword {get;set;}

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}