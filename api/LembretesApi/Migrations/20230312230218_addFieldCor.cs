using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LembretesApi.Migrations
{
    /// <inheritdoc />
    public partial class addFieldCor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cor",
                table: "Lembretes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cor",
                table: "Lembretes");
        }
    }
}
