using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Products_and_Categories.Models
{
    public class Association
    {
        public int AssociationID {get; set;}
        public int ProductID {get; set;}
        public int CategoryID {get; set;}
        public Product Product {get; set;}
        public Category Category {get; set;}
    }
}