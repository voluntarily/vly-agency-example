using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace VoluntarilyAgency.DatabaseHelper
{
    public class Database
    {
        private SqlConnectionStringBuilder _builder = new SqlConnectionStringBuilder();

        public string Table { get; set; }

        public Database()
        {
            CreateConnectionString();
        }

        private void CreateConnectionString()
        {
            _builder.DataSource = "voluntarilyagency.database.windows.net"; 
            _builder.UserID = "agency";            
            _builder.Password = "Admin123";     
            _builder.InitialCatalog = "agency";
        }

        public SqlConnection GetConnection()
        {
            return new SqlConnection(_builder.ConnectionString);
        }
    }
}
