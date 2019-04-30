using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyStoreWeb.Migrations
{
    public partial class updateDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "OrderDate", "OrderNumber" },
                values: new object[] { new DateTime(2019, 4, 30, 15, 2, 13, 972, DateTimeKind.Utc).AddTicks(7818), "1234" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "OrderDate", "OrderNumber" },
                values: new object[] { new DateTime(2019, 4, 28, 23, 38, 28, 791, DateTimeKind.Utc).AddTicks(2465), "123" });
        }
    }
}
