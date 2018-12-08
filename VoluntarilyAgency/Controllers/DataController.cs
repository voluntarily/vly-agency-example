using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VoluntarilyAgency.DatabaseHelper;

namespace VoluntarilyAgency.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpPut("[action]")]
        public void GenerateWorkedData(int number)
        {
            Database database = new Database();
            using (var connection = database.GetConnection())
            {
                connection.Open();

                int school_id;
                int volunteer_id;
                int hours;
                int students;
                int company_hours;

                Random rnd = new Random();

                StringBuilder sb = new StringBuilder();

                while (number > 0)
                {
                    sb.Append("INSERT INTO worked VALUES ");

                    int todo;
                    if (number > 1000)
                    {
                        number -= 1000;
                        todo = 1000;
                    } else
                    {
                        todo = number;
                        number = 0;
                    }

                    for (int i = 0; i < todo; i++)
                    {
                        school_id = rnd.Next(1, 2567);
                        volunteer_id = rnd.Next(1, 1000);
                        hours = rnd.Next(1, 8);
                        students = rnd.Next(5, 30);
                        company_hours = rnd.Next(0, 2);
                        sb.Append($"({school_id},{volunteer_id},{hours},{students},{company_hours})");
                        if (i != todo - 1)
                        {
                            sb.Append(",");
                        }
                    }

                    String sql = sb.ToString();

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        command.ExecuteNonQuery();
                    }

                    sb.Clear();
                }
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("[action]")]
        public void DeleteWorked()
        {
            string sql = "TRUNCATE TABLE worked";
            Database database = new Database();
            using (var connection = database.GetConnection())
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}
