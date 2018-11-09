using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetsChatApp.Web.Controllers
{
    [Route("api/messages")]
    public class Messages : Controller
    {

        [HttpGet, Authorize(Roles = "User")]
        public string Get()
        {
            return "HELLO WORLD!!!";
        }
    }
}