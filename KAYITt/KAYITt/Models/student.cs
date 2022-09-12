using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KAYITt.Models
{
    public class student
    {
        [Key]
        public int studentId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string isim { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string soyad { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(40)")]
        public string sehır{ get; set; }

        [Required]
        [Column(TypeName = "nvarchar(40)")]
        public string ılce{ get; set; }


    }
}

