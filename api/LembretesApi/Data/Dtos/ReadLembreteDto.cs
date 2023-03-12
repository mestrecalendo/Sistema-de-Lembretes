using LembretesApi.Models;
using System.ComponentModel.DataAnnotations;

namespace LembretesApi.Data.Dtos;

public class ReadLembreteDto
{
    public int Id { get; set; }

    public string Nome { get; set; }

    public string Cor { get; set; }

    public DateTime Data { get; set; }

}
