using System.ComponentModel.DataAnnotations;

namespace LembretesApi.Models;

public class Lembrete
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    public string Cor { get; set; }    

    [Required(ErrorMessage = "A data é obrigatória")]
    public DateTime Data { get; set; }

}