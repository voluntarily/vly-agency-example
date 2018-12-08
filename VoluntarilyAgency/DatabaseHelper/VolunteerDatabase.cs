using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VoluntarilyAgency.DatabaseHelper
{
    public class VolunteerDatabase : DatabaseBase
    {
        public VolunteerDatabase() : base("volunteer")
        {

        }

        public void GetAll()
        {
            using (var connection = GetConnection())
            {
                using (var cmd = new SqlCommand()
                {
                    CommandText = "SELECT * FROM dbo.Candidates WHERE id = @id",
                    CommandType = CommandType.Text,
                    Connection = connection
                })
                {
                    connection.Open();

                    using (var reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var id = reader[0];
                            var whatEver = reader[1];
                            // get the rest of the columns you need the same way
                        }
                    }
                }
            }
        }

        protected override void AddModel()
        {
        }
    }
}
