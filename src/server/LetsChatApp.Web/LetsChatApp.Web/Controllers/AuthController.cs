using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using LetsChatApp.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace LetsChatApp.Web.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if (user.UserName == "johndoe" && user.Password == "def@123")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@123"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:44331",
                    // TODO: NEEDS TO CHANGE TO CLIENT
                    audience: "http://localhost:44331",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }

        }
    }
}