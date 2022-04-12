using System.ComponentModel.DataAnnotations;

namespace Dojo_Survey_With_Validator.Models
{
    public class Dojo_Survay{
        [Required]
        [MinLength(2, ErrorMessage = "must be at least 2 charcters long.")]
        public string Name {get; set;}

        [Required]
        public string Dojo {get; set;}
        
        [Required]
        public string Language {get; set;}

        [MinLength(20, ErrorMessage = "should be at least 20 characters long.")]
        public string Comment {get; set;}
    }
}