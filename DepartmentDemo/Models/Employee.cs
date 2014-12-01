using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DepartmentDemo.Models
{
   
    //[Table("Employees")]
    public class Employee
    {
        [Key]
        public int Emp_Id { get; set; }
        public string Emp_Name { get; set; }
        // [ForeignKey("Department")]
        public string Dept_Id { get; set; }

        public virtual Department Department { get; set; }
    }

}