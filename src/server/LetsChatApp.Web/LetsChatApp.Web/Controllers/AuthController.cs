using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using LetsChatApp.Web.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace LetsChatApp.Web.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly IConfiguration _config;

        public AuthController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if (IsUserValid(user))
            {
                return Ok(new { Token = CreateToken(user) });
            }
            return Unauthorized();
        }

        private bool IsUserValid(LoginModel user)
        {
            return user.UserName == _config["Jwt:Username"] 
                   && user.Password == _config["Jwt:Password"];
        }

        private string CreateToken(LoginModel user)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:SecretKey"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, "User")
            };

            var tokeOptions = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                expires: DateTime.Now.AddMinutes(5),
                claims: claims,
                signingCredentials: signinCredentials
            );
            
            return new JwtSecurityTokenHandler().WriteToken(tokeOptions);
        }
    }
}