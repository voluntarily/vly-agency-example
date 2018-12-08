using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace VoluntarilyAgency.DatabaseHelper
{
    public abstract class DatabaseBase
    {
        private SqlConnectionStringBuilder _builder = new SqlConnectionStringBuilder();
        public DatabaseModel Model { get; set; }

        public string Table { get; set; }

        public DatabaseBase(string table)
        {
            Table = table;
            CreateConnectionString();
            Model = new DatabaseModel(Table);
        }

        private void CreateConnectionString()
        {
            _builder.DataSource = "voluntarilyagency.database.windows.net"; 
            _builder.UserID = "agency";            
            _builder.Password = "Admin123";     
            _builder.InitialCatalog = "agency";
        }

        protected SqlConnection GetConnection()
        {
            return new SqlConnection(_builder.ConnectionString);
        }

        protected abstract void AddModel();
    }

    public class DatabaseModel
    {
        public string Id { get; set; }
        public List<string> Columns = new List<string>();

        public DatabaseModel(string table)
        {
            Id = table + "_id";
        }

        public void AddColumns(List<string> columns)
        {
            Columns = columns;
        }

    }
}
