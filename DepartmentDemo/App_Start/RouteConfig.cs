﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace DepartmentDemo
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Department", action = "Index", id = UrlParameter.Optional }

                //url: "{controller}/{action}/{id}",
                //defaults: new { controller = "Department", action = "Details", id = UrlParameter.Optional }

                // url: "{controller}/{action}/{id}",
                //defaults: new { controller = "Department", action = "DepartmentList", id = UrlParameter.Optional }
            );
        }
    }
}