using Microsoft.EntityFrameworkCore.Migrations;

namespace Chefs_N_Dishes.Migrations
{
    public partial class AddDishesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dish_Chefs_ChefID",
                table: "Dish");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Dish",
                table: "Dish");

            migrationBuilder.RenameTable(
                name: "Dish",
                newName: "Dishes");

            migrationBuilder.RenameIndex(
                name: "IX_Dish_ChefID",
                table: "Dishes",
                newName: "IX_Dishes_ChefID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Dishes",
                table: "Dishes",
                column: "DishID");

            migrationBuilder.AddForeignKey(
                name: "FK_Dishes_Chefs_ChefID",
                table: "Dishes",
                column: "ChefID",
                principalTable: "Chefs",
                principalColumn: "ChefID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dishes_Chefs_ChefID",
                table: "Dishes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Dishes",
                table: "Dishes");

            migrationBuilder.RenameTable(
                name: "Dishes",
                newName: "Dish");

            migrationBuilder.RenameIndex(
                name: "IX_Dishes_ChefID",
                table: "Dish",
                newName: "IX_Dish_ChefID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Dish",
                table: "Dish",
                column: "DishID");

            migrationBuilder.AddForeignKey(
                name: "FK_Dish_Chefs_ChefID",
                table: "Dish",
                column: "ChefID",
                principalTable: "Chefs",
                principalColumn: "ChefID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
