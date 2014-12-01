using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DepartmentDemo.Models
{
    //[Table("Departments")]
    public class Department
    {

        public Department()
        {
            this.Employees = new HashSet<Employee>();
        }
       
        [Key]
        public int Dept_Id { get; set; }

        public string Dept_Name { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}