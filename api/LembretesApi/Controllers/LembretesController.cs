using LembretesApi.Data;
using LembretesApi.Data.Dtos;
using LembretesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace LembretesApi.Controllers;

[ApiController]
[Route("v1/lembrete")]
public class LembreteController : Controller
{
    private LembreteDbContext _context;

    public LembreteController(LembreteDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CriaLembreteAsync([FromBody] CriarLembreteDto lembreteDto)
    {
        Lembrete lembrete = new Lembrete
        {
            Nome = lembreteDto.Nome,
            Data = lembreteDto.Data,
        };

        try
        {
            await _context.Lembretes.AddAsync(lembrete);
            await _context.SaveChangesAsync();
            return Created($"v1/lembrete/{lembrete.Id}", lembrete);
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }

    } 

    [HttpGet("list")]
    public async Task<IActionResult> ListaLembretes()
    {
        var list = await _context.Lembretes.AsNoTracking().ToListAsync();
        var lembretes = list.OrderBy(x => x.Data).GroupBy(x => DateOnly.FromDateTime(x.Data)).ToDictionary(x => x.Key);
     
       
        return Ok(lembretes);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> RecuperarLembrete(int id)
    {
        var lembrete = await _context.Lembretes.FirstOrDefaultAsync(lembrete => lembrete.Id == id);
        if (lembrete == null) return NotFound();

        ReadLembreteDto lembreteDto = new ReadLembreteDto
        {
            Id = lembrete.Id,
            Nome = lembrete.Nome,
            Data = lembrete.Data
        };
        return Ok(lembreteDto);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> AtualizaLembrete(int id, [FromBody] UpdateLembreteDto lembreteDto)
    {
        var lembrete = await _context.Lembretes.FirstOrDefaultAsync(lembrete => lembrete.Id == id);
        if (lembrete == null) return NotFound();

        try
        {
            lembrete.Nome = lembreteDto.Nome;
            lembrete.Data = lembreteDto.Data;

            _context.Update(lembrete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletaLembreteAsync(int id)
    {
        var lembrete = await _context.Lembretes.FirstOrDefaultAsync(lembrete => lembrete.Id == id);
        if (lembrete == null) return NotFound();

        try
        {
            _context.Remove(lembrete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
       
    }
}