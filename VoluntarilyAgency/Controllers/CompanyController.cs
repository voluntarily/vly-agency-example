using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using VoluntarilyAgency.DatabaseHelper;

namespace VoluntarilyAgency.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        // GET: api/Company
        [HttpGet]
        public IEnumerable<string> Get()
        {
            string sql = @"SELECT 
                company.company_id,
                company.company_name,
                SUM(worked.hours) as hours,
                company_hours
            FROM worked
            LEFT JOIN volunteer
                ON volunteer.volunteer_id = worked.volunteer_id
            LEFT JOIN company 
                ON volunteer.company_id = company.company_id
            GROUP BY company.company_id, company.company_name, company_hours ";
            Database database = new Database();
            
            var allData = new List<Dictionary<string, string>>();

            var results = new Dictionary<int, Dictionary<string, string>>();

            using (var connection = database.GetConnection())
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {

                            int company_id = reader.GetInt32(0);

                            string company_hours = reader.GetBoolean(3) == true ? "1": "0";

                            Dictionary<string, string> data = new Dictionary<string, string>()
                            {
                                { "company_id", reader.GetInt32(0).ToString()},
                                { "company_name", reader.GetString(1) },
                                { "hours", reader.GetInt32(2).ToString() },
                                { "company_hours", company_hours }
                            };

                            allData.Add(data);

                            string type = company_hours == "0" ? "employee_hours" : "company_hours";

                            if(!results.ContainsKey(company_id))
                            {
                                results[company_id] = new Dictionary<string, string>() {
                                    { "company_id", data["company_id"]},
                                    { "company_name", data["company_name"]},
                                    { type, data["hours"]}
                                };
                            } else
                            {
                                results[company_id].Add(type, data["hours"]);
                                Random rnd = new Random();
                                Int32.TryParse(results[company_id]["company_hours"], out int points_company);
                                Int32.TryParse(results[company_id]["employee_hours"], out int points_employee);
                                int points = rnd.Next(1,6) * (points_company + 2 * points_employee);
                                results[company_id]["points"] = points.ToString();
                            }
                        }
                    }
                }

                List<string> toReturn = new List<string>();
                foreach(var result in results)
                {
                    toReturn.Add(JsonConvert.SerializeObject(result.Value));
                }
                return toReturn;
            }

        }
    }
}
