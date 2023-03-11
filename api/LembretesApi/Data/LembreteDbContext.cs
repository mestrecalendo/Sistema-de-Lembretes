using LembretesApi.Models;
using Microsoft.EntityFrameworkCore;

namespace LembretesApi.Data
{
    public class LembreteDbContext : DbContext
    {
        public LembreteDbContext(DbContextOptions<LembreteDbContext> opts) : base(opts)
        {

        }

        public DbSet<Lembrete> Lembretes { get; set; }
    }
}