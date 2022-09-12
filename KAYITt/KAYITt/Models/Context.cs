using Microsoft.EntityFrameworkCore;

namespace KAYITt.Models
{
    public class Context : DbContext
    { 
         public Context(DbContextOptions<Context> options) : base(options)
    {

    }


    public DbSet<student> students { get; set; }
}

    
}
