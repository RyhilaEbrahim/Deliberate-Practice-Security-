using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace LetsChatApp.Web.Controllers
{
    [Route("api/messages")]
    [Authorize(Roles = "User")]
    public class Messages : Controller
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "message 1", "message 2", "messages 3" };
        }
    }
}