using System.ComponentModel.DataAnnotations;
namespace Form_Submission.Models
{
    public class User
    {
        //first name: min 4 characters long, last name, age: must be a positive, email: valid email format, password: at least 8 long
        [Required]
        [MinLength(4, ErrorMessage = "must be at least 4 characters.")]
        // [Display(FN = "Your FirstName:")]
        public string FirstName {get; set;}

        [Required]
        [MinLength(4, ErrorMessage = "must be at least 4 characters.")]
        // [Display(LN = "Your LastName:")]

        public string LastName {get; set;}
        
        [Required]
        [Range(0,110, ErrorMessage = "must be positive.")]
        // [Display(Age = "Your Age:")]
        public int Age {get; set;}

        [Required]
        [EmailAddress(ErrorMessage = "must be a valid email")]
        // [Display(Email = "Your Email:")]
        public string Email {get; set;}

        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set;}


    }
}