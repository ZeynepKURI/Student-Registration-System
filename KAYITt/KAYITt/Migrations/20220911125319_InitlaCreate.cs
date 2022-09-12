using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KAYITt.Migrations
{
    public partial class InitlaCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "students",
                columns: table => new
                {
                    öğrenciId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AD = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    SOYAD = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    ŞEHİR = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    İLÇE = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_students", x => x.öğrenciId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "students");
        }
    }
}
