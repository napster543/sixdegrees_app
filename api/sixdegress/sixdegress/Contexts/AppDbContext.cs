using Microsoft.EntityFrameworkCore;
using sixdegress.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sixdegress.Contexts
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }
        public DbSet<PruebaSD> PruebaSD { set; get; }
    }
}
