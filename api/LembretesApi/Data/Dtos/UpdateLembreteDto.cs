using System.ComponentModel.DataAnnotations;

namespace LembretesApi.Data.Dtos;

public class UpdateLembreteDto
{
    [Required(ErrorMessage = "O nome é obrigatório")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    public string Cor { get; set; }

    [Required(ErrorMessage = "A data é obrigatória")]
    public DateTime Data { get; set; }
}
