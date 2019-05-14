using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyStoreWeb.Migrations
{
    public partial class IdentityV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "OrderDate", "OrderNumber", "UserId" },
                values: new object[] { 1, new DateTime(2019, 5, 6, 18, 9, 38, 339, DateTimeKind.Utc).AddTicks(9367), "1234", null });
        }
    }
}
